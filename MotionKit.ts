//% weight=100 color=#00A654 icon="\uf1b9" block="Motion-Kit"
namespace MotionKit {

	
    /*some parameters used for controlling the turn and length */
    const microSecInASecond = 1000000
    let distancePerSec = 100
    let numberOfDegreesPerSec = 200

    /**
     * Drives forwards. Call stop to stop
     */
    //% blockId=motion_kit_servos_forward
    //% block="drive forward"
    export function forward(): void {
        pins.servoWritePin(AnalogPin.C16, 0);
        pins.servoWritePin(AnalogPin.C17, 180);
    }

    /**
     * Drives backwards. Call stop to stop
     */
    //% blockId=motion_kit_servos_backward
    //% block="drive backward"
    export function backward(): void {
        pins.servoWritePin(AnalogPin.C16, 180);
        pins.servoWritePin(AnalogPin.C17, 0);
    }

    /**
	* Turns left. Call stop to stop
	*/
    //% blockId=motion_kit_servos_left
    //% block="turn left"
    export function left(): void {
        pins.servoWritePin(AnalogPin.C16, 0);
        pins.servoWritePin(AnalogPin.C17, 0);
    }

	/**
	 * Turns right. Call ``stop`` to stop
	 */
    //% blockId=motion_kit_servos_right
    //% block="turn right"
    export function right(): void {
        pins.servoWritePin(AnalogPin.C16, 180);
        pins.servoWritePin(AnalogPin.C17, 180);
    }

	/**
	 * Stop for 360 servos.
	 * rather than write 90, which may not stop the servo moving if it is out of trim
	 * this stops sending servo pulses, which has the same effect.
	 * On a normal servo this will stop the servo where it is, rather than return it to neutral position.
	 * It will also not provide any holding force.
     */
    //% blockId=motion_kit_servos_stop
    //% block="stop"
    export function stop(): void {
        pins.analogWritePin(AnalogPin.C16, 0);
        pins.analogWritePin(AnalogPin.C17, 0);
    }

	/**
	 * Sends servos to 'neutral' position.
	 * On a well trimmed 360 this is stationary, on a normal servo this is 90 degrees.
     */
    //% blockId=motion_kit_servos_neutral
    //% block="goto neutral position"
    export function neutral(): void {
        pins.servoWritePin(AnalogPin.C16, 90);
        pins.servoWritePin(AnalogPin.C17, 90);
    }

    /**
     * Drives forwards the requested distance and then stops
     * @param howFar distance to move
     */
    //% blockId=motion_kit_drive_forwards
    //% block="drive forwards %howFar|distance" 
    export function driveForwards(howFar: number): void {
        let timeToWait = (howFar * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        forward();
        control.waitMicros(timeToWait);
        stop();
    }

    /**
     * Drives backwards the requested distance and then stops
     * @param howFar distance to move
     */
    //% blockId=motion_kit_drive_backwards
    //% block="drive backwards %howFar|distance" 
    export function driveBackwards(howFar: number): void {
        let timeToWait = (howFar * microSecInASecond) / distancePerSec; // calculation done this way round to avoid zero rounding
        backward();
        control.waitMicros(timeToWait);
        stop();
    }

    /**
     * Turns right through the requested degrees and then stops
     * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
     * a simple turn, wait, stop method.
     * Runs the servos at slower than the right function to reduce wheel slip
     * @param deg how far to turn, eg: 90
     */
    //% blockId=motion_kit_turn_right
    //% block="turn right %deg|degrees"
    export function turnRight(deg: number): void {
        let timeToWait = (deg * microSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.C16, 130);
        pins.servoWritePin(AnalogPin.C17, 130);
        control.waitMicros(timeToWait);
        stop();
    }

    /**
    * Turns left through the requested degrees and then stops
    * needs NumberOfDegreesPerSec tuned to make accurate, as it uses
    * a simple turn, wait, stop method.
    * Runs the servos at slower than the right function to reduce wheel slip
    * @param deg how far to turn, eg: 90
    */
    //% blockId=motion_kit_turn_left
    //% block="turn left %deg|degrees"
    export function turnLeft(deg: number): void {
        let timeToWait = (deg * microSecInASecond) / numberOfDegreesPerSec;// calculation done this way round to avoid zero rounding
        pins.servoWritePin(AnalogPin.C16, 50);
        pins.servoWritePin(AnalogPin.C17, 50);
        control.waitMicros(timeToWait);
        stop()
    }

	/**
     * Allows the setting of the turn speed.
     * This allows tuning for the turn x degrees commands
     * @param degPerSec : How many degrees per second it does.
     */
    //% blockId=motion_kit_set_turn_speed_param
    //% block="calibrate turn speed to %DegPerSec|degrees per second" 
    export function setDegreesPerSecond(degPerSec: number): void {
        numberOfDegreesPerSec = degPerSec
    }

    /**
     * Allows the setting for forward / reverse speed.
     * This allows tuning for the move x distance commands
     * @param DegPerSec : How many degrees per second it does.
     */
    //% blockId=motion_kit_set_movement_speed_param 
    //% block="calibrate forward speed to %DistPerSec|mm per second"
    export function setDistancePerSecond(distPerSec: number): void {
        distancePerSec = distPerSec
    }
}
