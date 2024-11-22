class SleepWorkout {
    constructor(today, dayType, sleep, naps, workLoad) {
        this.today = today;
        this.dayType = dayType;
        this.sleep = sleep;
        this.naps = naps;
        this.workLoad = workLoad;
        this.totalHrsSleep = 0;
        this.workDay = false;
        this.nonWorkDay = false;
        this.recommendation = "";
    }

    setWorkDayStatus() {
        if (this.dayType === "workday") {
            this.workDay = true;
        } else if (this.dayType === "nonWorkday") {
            this.nonWorkDay = true;
        }
    }

    convertNapsToHours() {
        return this.naps / 60;
    }

    calculateTotalSleep() {
        const napsInHours = this.convertNapsToHours();
        this.totalHrsSleep = Math.round((this.sleep + napsInHours) * 10) / 10; 
    }

    getRecommendation() {
        if (this.nonWorkDay) {
            if (this.totalHrsSleep > 4) {
                this.recommendation = "Today is a Workout day.";
            } else {
                this.recommendation = "Today is a Rest day. You need more sleep.";
            }
        } else if (this.workDay) {
            if (this.workLoad === "heavy") {
                if (this.totalHrsSleep >= 7) {
                    this.recommendation = "Today is a Workout day.";
                } else {
                    this.recommendation = "Today is a Rest day. You need more sleep for this heavy workday.";
                }
            } else if (this.workLoad === "light") {
                if (this.totalHrsSleep >= 6) {
                    this.recommendation = "Today is a Workout day.";
                } else {
                    this.recommendation = "Today is a Rest day. You need more sleep for this light workday.";
                }
            } else {
                this.recommendation = "Please specify if today is a heavy or light workday.";
            }
        }
    }

    run() {
        this.setWorkDayStatus();
        this.calculateTotalSleep();
        this.getRecommendation();
        return {
            today: this.today,
            dayType: this.dayType, 
            sleep: this.sleep,
            naps: this.naps,
            totalHrsSleep: this.totalHrsSleep,
            workLoad: this.workLoad,
            recommendation: this.recommendation
            
        };
    }
}

export { SleepWorkout };