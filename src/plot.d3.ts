import * as d3 from 'd3'

const margin = { top: 20, right: 50, bottom: 30, left: 50 }
export type Datum = number
export type Size = { height: number; width: number }

export function renderData(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: Datum[][],
  xScale: d3.ScaleLinear<number, number>,
  yScale: d3.ScaleLinear<number, number>,
  xDomain: [number, number]
) {
  const line = d3
    .line<Datum>()
    .x((d, i) => xScale(((i + 0.5) / data[0].length) * xDomain[1]))
    .y((d) => yScale(d))

  svg.select<SVGGElement>('path.plot-area').datum(data[0]).attr('d', line)
  for (let i = 1; i < data.length; i++)
    svg
      .select<SVGGElement>('path.plot-area-d' + (i + 1))
      .datum(data[i])
      .attr('d', line)
}
export function renderXAxis(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  xScale: d3.ScaleLinear<number, number>,
  size: Size
) {
  svg.select<SVGGElement>('g.x.axis').call((g) =>
    g
      .attr('transform', `translate(0,${size.height - margin.bottom})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(size.width / 80)
          .tickPadding(10)
          .tickSize(-size.height + margin.top + margin.bottom)
          .tickFormat((t) => ((t as number) * 1000).toFixed(3) + 'ms')
          .tickSizeOuter(0)
      )
      .call((g) => g.select('.domain').remove())
  )
}
export function renderYAxis(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  yScale: d3.ScaleLinear<number, number>,
  size: Size
) {
  const yTicks = d3.ticks(yScale.domain()[0], yScale.domain()[1], 10)
  svg
    .select<SVGGElement>('g.y.axis')
    .call((g) =>
      g.attr('transform', `translate(${margin.left},0)`).call(
        d3
          .axisLeft(yScale)
          .tickValues(yTicks)
          .tickPadding(10)
          .tickSize(-size.width + margin.right + margin.left - 1)
          .tickFormat((v) => v + 'v')
      )
    )
    .call((g) =>
      g.select('.domain').attr(
        'd',
        (d, _, path) =>
          // close path so the domain has a right border
          d3.select(path[0]).attr('d') + 'z'
      )
    )
}
export function renderTriggerVoltage(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  triggerVoltage: number,
  yScale: d3.ScaleLinear<number, number>,
  size: Size,
  setTriggerVoltage: (v: number) => void
) {
  const line = svg
    .selectAll<SVGLineElement, number>('line.triggerVoltage')
    .data([triggerVoltage])
  const newLine = line.enter().append('line').classed('triggerVoltage', true)
  line
    .merge(newLine)
    .attr('x1', margin.left)
    .attr('x2', size.width - margin.right)
    .attr('y1', yScale(triggerVoltage))
    .attr('y2', yScale(triggerVoltage))
  const handle = svg
    .selectAll<SVGLineElement, number>('line.triggerVoltageHandle')
    .data([triggerVoltage])
  const newHandle = handle
    .enter()
    .append('line')
    .classed('triggerVoltageHandle', true)
  handle
    .merge(newHandle)
    .attr('x1', margin.left)
    .attr('x2', size.width - margin.right)
    .attr('y1', yScale(triggerVoltage))
    .attr('y2', yScale(triggerVoltage))
    .call(
      d3
        .drag<SVGLineElement, number>()
        .on('start', function () {
          d3.select(this).classed('active', true)
        })
        .on('drag', function dragged() {
          setTriggerVoltage(yScale.invert(d3.event.y))
        })
        .on('end', function () {
          d3.select(this).classed('active', false)
        })
    )
}
export function renderTriggerPos(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  triggerPos: number,
  xScale: d3.ScaleLinear<number, number>,
  size: Size,
  setTriggerPos: (v: number) => void
) {
  const line = svg
    .selectAll<SVGLineElement, number>('line.triggerPos')
    .data([triggerPos])
  const newLine = line.enter().append('line').classed('triggerPos', true)
  line
    .merge(newLine)
    .attr('x1', xScale(triggerPos))
    .attr('x2', xScale(triggerPos))
    .attr('y1', size.height - margin.bottom)
    .attr('y2', margin.top)

  const handle = svg
    .selectAll<SVGLineElement, number>('line.triggerPosHandle')
    .data([triggerPos])
  const newhandle = line
    .enter()
    .append('line')
    .classed('triggerPosHandle', true)
  handle
    .merge(newhandle)
    .attr('x1', xScale(triggerPos))
    .attr('x2', xScale(triggerPos))
    .attr('y1', size.height - margin.bottom)
    .attr('y2', margin.top)
    .call(
      d3
        .drag<SVGLineElement, number>()
        .on('start', function () {
          d3.select(this).classed('active', true)
        })
        .on('drag', function dragged() {
          setTriggerPos(xScale.invert(d3.event.x))
        })
        .on('end', function () {
          d3.select(this).classed('active', false)
        })
    )
}
