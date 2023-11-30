// Main speed so it does not change throughout the program.
let drivespeed = 60
// Line sensor instructions
basic.forever(function () {
    lineSensors.displaySensors()
    if (lineSensors.checkSensor(IRSensor.LEFT, IRColour.BLACK)) {
        motion.turnLeft(drivespeed)
    } else if (lineSensors.checkSensor(IRSensor.RIGHT, IRColour.BLACK)) {
        motion.turnRight(drivespeed)
    } else if (lineSensors.checkSensor(IRSensor.MIDDLE, IRColour.BLACK)) {
        motion.driveStraight(drivespeed)
    }
})
