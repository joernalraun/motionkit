// go right 90 degrees
input.onButtonPressed(Button.A, () => {
    motion_kit.turnRight(90);
})
// go forward 10
input.onButtonPressed(Button.B, () => {
    motion_kit.driveForwards(10);
})
// stop
input.onButtonPressed(Button.AB, () => {
    motion_kit.stop
})

