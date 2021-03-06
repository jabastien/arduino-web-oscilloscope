#include "data-struct.h"

#define DAPEN 7
#define GA0 5
#define DNS0 2
#define DPS0 0
#define DIFFS 1

/*
    0 -> 2   -> 727.28 kSamples
    1 -> 2   -> 727.28 kSamples // adc can't read over 2.5v here
    2 -> 4   -> 363.64 kSamples
    3 -> 8   -> 181.82 kSamples
    4 -> 16  -> 90.91  kSamples
    5 -> 32  -> 45.455 KSamples
    6 -> 64  -> 22.727 kSamples
    7 -> 128 -> 11,363 kSamples
*/
#define DIV_1 0b0000
#define DIV_1_5 0b1000
#define DIV_4_5 0b1110
#define GAIN1 0b00
#define GAIN8 0b01
#define GAIN16 0b10
#define GAIN32 0b11
const uint8_t gainArray[][2] = {
    {GAIN1, DIV_1_5},   // 25 v
    {GAIN1, DIV_4_5},   // 6.25 v
    {GAIN1, DIV_1},     // 5 v
    {GAIN8, DIV_1_5},   // 3.125 v
    {GAIN16, DIV_1_5},  // 1.5625 v
    {GAIN32, DIV_1_5},  // 0.78125 v
    {GAIN8, DIV_4_5},   // 0.78125 v
    {GAIN8, DIV_1},     // 0.625 v
    {GAIN16, DIV_4_5},  // 0.390625 v
    {GAIN16, DIV_1},    // 0.3125 v
    {GAIN32, DIV_4_5},  // 0.1953125 v
    {GAIN32, DIV_1},    // 0.15625 v
};
enum ReferenceVoltage {
  // The other 1v, 2v and 4v make the ADC jump a lot
  AREF = 0b000,
  AVCC = 0b001,
  v2_048 = 0b010,
  v1_024 = 0b011,
  v4_096 = 0b100,
};

const uint8_t refVoltage = ReferenceVoltage::AVCC;
inline void startADC() {
  // input A0 --->
  // -[ADCSRD]-> voltage division ->
  // -[ADMUX]-> muxer ->
  // -[DAPCR]-> diff amplifier ->
  // -[ADCSRD]-> ADC -> buffer

  // uint16_t ticksPerAdcRead =
  //     ADC_PRESCALER * (15 + 1.5 + 5.5)
  //      // A normal conversion takes 15 ADC clock cycles
  //         // + 1.5 sample and hold + (5.5 unaccounted for)

  float adcTicksPerSample = state.secPerSample * F_CPU / 22;
  uint8_t prescaler;

  if (adcTicksPerSample >= 128)
    prescaler = 7;
  else if (adcTicksPerSample >= 64)
    prescaler = 6;
  else if (adcTicksPerSample >= 32)
    prescaler = 5;
  else if (adcTicksPerSample >= 16)
    prescaler = 4;
  else if (adcTicksPerSample >= 8)
    prescaler = 3;
  else if (adcTicksPerSample >= 4)
    prescaler = 2;
  else if (adcTicksPerSample >= 2)
    prescaler = 1;
  else
    prescaler = 0;

  uint8_t gain = gainArray[state.amplifier][0];
  uint8_t divisor = gainArray[state.amplifier][1];

  ADMUX = bitRead(refVoltage, 0)
              << REFS0 |  // ADC refference is AVCC [seel also: ADCSRD:REFS2]
          bitRead(refVoltage, 1) << REFS1 |  // ADC refference is AVCC [seel
                                             // also: ADCSRD:REFS2]
          1 << ADLAR |  // ADC data register is left adjustment
          divisor << MUX0;

  ADCSRA = 1 << ADEN |   // enable ADC
           1 << ADSC |   // start conversion
           1 << ADATE |  // ADC auto triggering enable
           0 << ADIE |   // disable ADC interrupt
           prescaler << ADPS0;
  ADCSRB = 0 << ADTS0;  // Continuous conversion

  ADCSRC = 1 << DIFFS |  // 1 = from diff amplifier, 0=multiplexer
           0 << SPN |    // ADC conversion input polarity control
           0 << SPD;     // 1: high speed conversion (can't hear a difference)
  ADCSRD = bitRead(refVoltage, 2)
               << REFS2 |    // part of ADC reference voltage [see ADMUX:REFS0]
           0b00 << IVSEL0 |  // 2v DAC output
           0b001 << VDS0;    // ADC0 voltage division
  DAPCR = 0b1 << DAPEN |     // Enable
          gain << GA0 |      // gain
          0b110 << DNS0 |    // (-) GND
          0b00 << DPS0;      // (+) MUX
}

inline void stopADC() { ADCSRA = 0; }

void setupADC() {
  bitSet(DIDR0, PC0D);  // disable digital input (reduce noise) A0
  // bitSet(DIDR0, PC1D);  // disable digital input (reduce noise) A1
  // bitSet(DIDR0, PC2D);  // disable digital input (reduce noise) A2
  // bitSet(DIDR0, PC3D);  // disable digital input (reduce noise) A3

  // PC2::5 // 4 digital channels
  DDRC = 0b00000000;
  PORTC = 0b00000000;

  // PD5::7 // part 1 of external ADC
  DDRD = 0b00000000;
  PORTD = 0b00000000;

  // PB0::4 // part 2 of external ADC
  DDRB = 0b00100000;   // d13 as output
  PORTB = 0b00000000;  // disable all pullups
}
