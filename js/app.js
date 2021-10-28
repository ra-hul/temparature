const API_KEY = `efbf6d2e549cfb3d9a066435072771d8`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

// get the h1 by its id
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// set the h1's name by dynamic way 
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    console.log(temperature);

}

