# Servo Blocks to support Calliope mini Servo Konnektor

Blocks that support the Calliope mini Motion kit, based on the Kitronik Servo:Lite board.

## ServoLite

* turn around

```blocks
input.onButtonPressed(Button.A, () => {
    kitronik_servo_lite.turnRight(90);
})
```

* go forward

```blocks
input.onButtonPressed(Button.B, () => {
    kitronik_servo_lite.driveForwards(10);
})
```

* stop both motors when pressing ``A+B``

```blocks
input.onButtonPressed(Button.AB, () => {
    kitronik_servo_lite.stop();
})
```

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


```package
pxt-kitronik-servo-lite=github:joernalraun/motionkit
```
