class DayWeather {
    static descriptions = ["Clear", "Clouds", "Snow", "Rain", "Drizzle", "Thunderstorm", "Overcast"];
    static weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    description;
    minTemp;
    maxTemp;
    weekday;

    isToday;
    currentTemp;

    constructor(description, minTemp, maxTemp, weekdayIndex, isToday = false, currentTemp = -99) {
        this.description = description;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.weekday = this.getWeekdayAbbre(weekdayIndex);
        this.isToday = isToday;
        this.currentTemp = currentTemp;
        this.updateDescription();
    }

    getWeekdayAbbre(index) {
        return DayWeather.weekdays[index].substring(0, 3);
    }

    updateDescription() {
        //OpenWeatherMap gives a long list of descriptions synonymous to 'overcast'
        if(!DayWeather.descriptions.find(word => this.description === word)) {
            this.description = "Overcast";
        }
    }
}