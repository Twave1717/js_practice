const API_KEY = '216c852305878bb181fe5ee308cd9dc4';


function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('#weather');
            const city = document.querySelector('#geo');
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("Can't find your geolocation.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);