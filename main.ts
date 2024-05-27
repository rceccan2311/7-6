let LUZ = 0
basic.forever(function () {
    LUZ = input.lightLevel()
    basic.showNumber(LUZ)
    if (LUZ > 150) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
