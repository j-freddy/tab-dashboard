class DayWeather {
    description;
    minTemp;
    maxTemp;

    isToday;
    currentTemp;

    constructor(description, minTemp, maxTemp, isToday = false, currentTemp = -99) {
        this.description = description;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.isToday = isToday;
        this.currentTemp = currentTemp;
    }
}