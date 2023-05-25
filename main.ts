basic.forever(function () {
    // LED
    // potenciometro
    pins.analogWritePin(AnalogPin.P1, pins.analogReadPin(AnalogPin.P2))
})
