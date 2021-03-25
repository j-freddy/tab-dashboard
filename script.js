const DOMAIN_NAME = "https://api.openweathermap.org";

//Update this to match user location
const latitude = 51.5148;
const longitude = -0.1469;
const unit = "metric";

const mainContainer = document.getElementById("main");

let req = `${DOMAIN_NAME}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${TOKEN}`;

/*
    index = 0 -> Today
    index = 1 -> Tomorrow
*/
function getWeekDayIndex(index) {
    let d = new Date();
    return (d.getDay() + index) % 7;
}

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
            daysWeather.push(new DayWeather(description, minTemp, maxTemp, getWeekDayIndex(i), true, currentTemp));
        } else {
            daysWeather.push(new DayWeather(description, minTemp, maxTemp, getWeekDayIndex(i)));
        }
    });

    return daysWeather;
}

function displayDay(dayWeather) {
    //Container
    let elem = document.createElement("div");
    //Quarter width
    elem.className = "col-md-3";

    let info = document.createElement("p");
    info.innerHTML =
        "Description: " + dayWeather.description + "<br />" +
        "Date: " + dayWeather.weekday + "<br />" +
        "Min: " + dayWeather.minTemp + "<br />" +
        "Max: " + dayWeather.maxTemp;
    elem.appendChild(info);

    mainContainer.appendChild(elem);
}

fetch(req)
    .then(response => response.json())
    .then(data => {
        let filteredData = parseData(data);
        console.log(filteredData);

        filteredData.forEach(day => displayDay(day));
    })
    .catch(e => {
        throw e;
    });