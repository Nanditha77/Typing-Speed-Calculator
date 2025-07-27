const input=document.querySelector("input");
const btnn=document.getElementById("btnn");
const icon=document.querySelector(".icon");
const weather=document.querySelector(".weather");      
const temp=document.querySelector(".temp");
const description=document.querySelector(".description");

function getWeather() {
    let city=input.value;
    console.log(city);
    //city name api and this city same
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'98c22cae4c9d993357073479f475cc24'}`).then(response=>response.json()).then(data=>{console.log(data);
      //check where icon is there in output
       const iconCode=data.weather[0].icon;
       icon.innerHTML=`<img src= "http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon"/>`
       // use if else switch for different icon if you want
    //check output here in console

    const weatherCity=data.name;
    const weatherCountry=data.sys.country;
    weather.innerHTML=`${weatherCity},${weatherCountry}`;
    let weatherTemp=data.main.temp;
    //let matters than const in changing values
    weatherTemp=weatherTemp-273;
    const tempt=weatherTemp.toFixed(2);
    temp.innerHTML=`${tempt}°C`
    //writing just °C will not work so we need to convert from kelvin to celcius
    const weatherDesc=data.weather[0].description;
    description.innerHTML=weatherDesc;
})

    
}

