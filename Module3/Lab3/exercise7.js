//Module 3 - JS Advanced - Question 7
//Garrard Glenn 



class DigitalClock {

    constructor(prefix) {

        this.prefix = prefix;       // inherit prefix property from parent class?      
    }

    display() {

        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];      // get current Date() values --> for later comparison 

        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
                // creates hh.mm.ss values for current time 

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    }   // end display() 

    stop() {

        clearInterval(this.timer);      // stop() will be called later to stop alarm --> stop comparison between set alarm time and current time 

    }   // end stop() 

    start() {

        this.display();     // display current time 
        this.timer = setInterval(() => this.display(), 1000);   // setInterval --> display current time every 1000ms  

    }   // end start()

}   //end DigitalClock class 



// PrecisionClock class (subclass of DigitalClock)
class PrecisionClock extends DigitalClock {

    constructor(prefix, precision = 1000) {

        super(prefix);                      // call parent constructor (DigitalClock)
        this.precision = precision;         // set precision for PrecisionClock subclass 

    }

    start() {

        this.display();
        this.timer = setInterval(() => this.display(), this.precision);     // timer uses setInterval -> from this.precision --> set as: 1000ms

    }   // end start() 

}   // end PrecisionClock subclass

// AlarmClock class (subclass of DigitalClock)
class AlarmClock extends DigitalClock {

    constructor(prefix, wakeupTime = '07:00') {         // constructor for subclass --> prefix is inherited from parent class, wakeUpTime = 7AM 
        super(prefix);
        this.wakeupTime = wakeupTime;                   // sets wakeUpTime 

    }

    start() {

        this.display();
        this.timer = setInterval(() => {

            this.display();

            if (this.checkWakeupTime()) {       // compare wakeUpTime to current time 

                console.log("Wake Up!");        // if wakeUpTime === currentTime --> display "Wake Up!"
                this.stop();                    // stop() --> clear interval 

            }   // end if

        }, 1000);       //end this.timer -> setInterval = 1000ms
    }

    checkWakeupTime() {                         // function for comparing wakeUpTime and currentTime 

        let currentDate = new Date();
        let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;      // current time w/ hh:mm values 
        return currentTime === this.wakeupTime;

    }   // end checkWakeupTime() 

}   // end AlarmClock subclass




// Example Usage
const myPrecisionClock = new PrecisionClock('Precision Clock:', 500); // tick every 500ms
myPrecisionClock.start();

const myAlarmClock = new AlarmClock('Alarm Clock:', '07:30'); // Wakeup time set to 07:30
myAlarmClock.start();
