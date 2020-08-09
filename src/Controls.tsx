import React, { useMemo } from 'react'
import { useAdcClocks, useTriggerDirection, synchMode } from './bindings'
import { formatTime } from './formatters'
//@ts-ignore
import { Slider } from 'shards-react'
import { Icon, RadioGroup, Radio } from 'rsuite'
import { useRecoilState, useSetRecoilState } from 'recoil'

const samples = 500
const styles = {
  input: { width: 200, marginRight: 10, display: 'inline-flex' },
  radioGroupLabel: {
    padding: '8px 2px 8px 10px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
}

const ticksPerMs = 32000000 / 1000
const millisToADCClocks = (msPerFrame: number) => {
  const msPerSample = msPerFrame / 500
  return msPerSample * ticksPerMs
}

function Controls() {
  const [adcClockTicks, setAdcClockTicks] = useRecoilState(useAdcClocks.send)
  const [triggerDirection, setTriggerDirection] = useRecoilState(
    useTriggerDirection.send
  )
  const setSynchMode = useSetRecoilState(synchMode)
  console.log('Controls', adcClockTicks, triggerDirection)
  return (
    <div style={{ width: 'calc(100% - 50px)' }}>
      {useMemo(
        () => (
          <Slider
            pips={{
              mode: 'steps',
              // stepped: true,
              connect: true,
              density: 3,
              format: {
                // from: (a: any) => a,
                to: (a: number) => formatTime((a / 32000000) * samples)
              }
            }}
            range={{
              min: [79],
              '11%': [millisToADCClocks(2)],
              '22%': [millisToADCClocks(5)],
              '33%': [millisToADCClocks(10)],
              '44%': [millisToADCClocks(20)],
              '55%': [millisToADCClocks(50)],
              '66%': [millisToADCClocks(100)],
              '77%': [millisToADCClocks(200)],
              '88%': [millisToADCClocks(500)],
              max: [millisToADCClocks(1000)]
            }}
            connect={true}
            start={[adcClockTicks]}
            onSlide={(n: number) => {
              setAdcClockTicks(n)
              setSynchMode(n < millisToADCClocks(20))
            }}
          />
        ),
        [adcClockTicks, setAdcClockTicks]
      )}
      {useMemo(
        () => (
          <RadioGroup
            inline
            value={triggerDirection}
            onChange={setTriggerDirection}
            appearance="picker"
          >
            <span style={styles.radioGroupLabel}>Trigger: </span>
            <Radio value={false}>
              <Icon icon="level-down" size="2x" />
            </Radio>
            <Radio value={true}>
              <Icon icon="level-up" size="2x" />
            </Radio>
          </RadioGroup>
        ),
        [setTriggerDirection, triggerDirection]
      )}
    </div>
  )
}

export default Controls
