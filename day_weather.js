class DayWeather {
    static descriptions = ["Clear", "Clouds", "Snow", "Rain", "Drizzle", "Thunderstorm", "Overcast"];

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
        this.updateDescription();
    }

    updateDescription() {
        //OpenWeatherMap gives a long list of descrptions synonymous to 'overcast'
        if(!DayWeather.descriptions.find(word => this.description === word)) {
            this.description = "Overcast";
        }
    }
}