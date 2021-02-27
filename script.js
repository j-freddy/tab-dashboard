const DOMAIN_NAME = "https://api.openweathermap.org";

//Update this to match user location
let latitude = 51.5148;
let longitude = -0.1469;
let unit = "metric";

let req = `${DOMAIN_NAME}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${TOKEN}`;

function parseData(data) {
    let daysWeather = [];

    data.daily.forEach((day, i) => {
        let description = day.weather[0].main;
        let minTemp = day.temp.min;
        let maxTemp = day.temp.max;
        //Refactor this code
        let isToday = i === 0;
        let currentTemp;

        if(isToday) {
            currentTemp = data.current.temp;
            daysWeather.push(new DayWeather(description, minTemp, maxTemp, true, currentTemp));
        } else {
            daysWeather.push(new DayWeather(description, minTemp, maxTemp));
        }
    });

    return daysWeather;
}

//Fetch data
fetch(req)
    .then(response => response.json())
    .then(data => {
        let filteredData = parseData(data);
        console.log(filteredData);
    })
    .catch(_ => {
        console.log("Error in fetching data");
    });