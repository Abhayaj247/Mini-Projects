const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

function getWeather(city) {
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"8b9de8fd223d2b9af45962a31c5cd078"}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="weather Icon"/>`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

      const weatherTemp = data.main.temp - 273; //
      const temp = weatherTemp.toFixed(2);
      temperature.innerHTML = `${temp}°C`;

      const desc = data.weather[0].description;
      description.innerHTML = desc;
    });
}
