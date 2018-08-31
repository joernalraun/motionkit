# Calliope mini Motion Kit, update to the Kitronik blocks for micro:bit

Blocks to support the Calliope mini Motion Kit.

## ServoLite

* turn around

```blocks
input.onButtonPressed(Button.A, () => {
    motion_kit.turnRight(90);
})
```

* go forward

```blocks
input.onButtonPressed(Button.B, () => {
    motion_kit.driveForwards(10);
})
```

* stop both motors when pressing ``A+B``

```blocks
input.onButtonPressed(Button.AB, () => {
    motion_kit.stop();
})
```

## License

MIT

## Supported targets

* for PXT/calliope
(The metadata above is needed for package search.)


```package
pxt-motion-kit=github:joernalraun/motionkit
```