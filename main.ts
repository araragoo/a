/**
 * 0xAE = 174 I2C address of the MAX30105 device
 */
// NG:pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE, true);
// NG:pins.i2cWriteNumber(addr, value, NumberFormat.UInt8BE, false);
// let buf = pins.createBuffer(2);
// buf[0] = reg;
// buf[1] = value;
// pins.i2cWriteBuffer(addr, buf, false);
function i2cwrite (addr: number, reg: number, value: number) {
    pins.i2cWriteNumber(
    addr,
    reg * 256 + value,
    NumberFormat.UInt16BE,
    false
    )
}
// let X
// let buf = pins.createBufferFromArray([X]) // ex. [X, Y, Z]
// buf = pins.i2cReadBuffer(addr, 1)
// return buf[0]
function i2cread (addr: number, reg: number) {
    pins.i2cWriteNumber(
    addr,
    reg,
    NumberFormat.UInt8BE,
    false
    )
    return pins.i2cReadNumber(addr, NumberFormat.UInt8BE, false)
}
// Which interrupts are tripped
let MAX30100_INT_STATUS = 0
// Which interrupts are active
let MAX30100_INT_ENABLE = 1
// Where data is being written
let MAX30100_FIFO_WR_PTR = 2
// Number of lost samples
let MAX30100_OVRFLOW_CTR = 3
// Where to read from
let MAX30100_FIFO_RD_PTR = 4
// Ouput data buffer
let MAX30100_FIFO_DATA = 5
// Control register
let MAX30100_MODE_CONFIG = 6
// Oximetry settings
let MAX30100_SPO2_CONFIG = 7
// Pulse width and power of LEDs
let MAX30100_LED_CONFIG = 9
// Temperature value, whole number
let MAX30100_TEMP_INTG = 22
// Temperature value, fraction
let MAX30100_TEMP_FRAC = 23
// Part revision
let MAX30100_REV_ID = 254
// Part ID, normally 0x11
let MAX30100_PART_ID = 255
// 0x57 =  87 I2C address of the MAX30100 device
let MAX30100_I2C_ADDRESS = 87
basic.forever(function () {
    basic.pause(100)
    basic.showNumber(i2cread(MAX30100_I2C_ADDRESS, MAX30100_LED_CONFIG))
    basic.pause(100)
})
