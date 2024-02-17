var url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kakkanad&appid=8f9164d0bb1a347b51a7d0e25e247b6c"

fetch(url).then(res => res.json()).then(data => displayWeather(data))

function displayWeather(data) {
    let temp = data.main.temp
    let dis = data.weather[0].description
    let humidity = data.main.humidity
    let wind = data.wind.speed
    console.log(temp, dis, humidity, wind);
    let dataHTML = `
    <div class="container">
        <div class="widget">
          <div class="details">
            <div class="temperature"> ${temp} </div>
            <div class="summary">
              <p class="summaryText">Mostly ${dis} </p>
            </div>
            <div class="precipitation">Humidity: ${humidity} </div>
            <div class="wind">Wind: ${wind} mph</div>
          </div>
          <div class="pictoBackdrop"></div>
          <div class="pictoFrame"></div>
          <div class="pictoCloudBig"></div>
          <div class="pictoCloudFill"></div>
          <div class="pictoCloudSmall"></div>
          <div class="iconCloudBig"></div>
          <div class="iconCloudFill"></div>
          <div class="iconCloudSmall"></div>
        </div>
      </div>`
    document.getElementById("main").innerHTML = dataHTML
}

function fetchWeather(){
    let placeName=box.value
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${placeName}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`
    fetch(url).then(res=>res.json()).then(data=>displayWeather(data))
}