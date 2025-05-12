const api_key = "";

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let request_location = "london";

    const input = document.querySelector("input");
    if(input.value != ""){
        request_location = input.value;
    }

    const request_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${request_location}?key=${api_key}`;

    fetch(request_url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json.days[0]);
        return {description: json.days[0].description, 
            temperature: json.days[0].temp,
            icon: json.days[0].icon};
    })
    .then((weather) => {
        console.log(`Todays Forecast: ${weather.description} Temperature: ${weather.temperature} ${weather.icon}`);
        displayWeather(weather);
    })
    .catch((err) => {
        console.log(err);
    });
});


function displayWeather(weather){
    const display = document.getElementById("display");

    const title = document.createElement("h2");
    title.textContent = weather.icon;
    display.appendChild(title);

    const description = document.createElement("p");
    description.textContent = weather.description;
    display.appendChild(description);

    const temperature = document.createElement("p");
    temperature.textContent = weather.temperature;
    display.appendChild(temperature);
}