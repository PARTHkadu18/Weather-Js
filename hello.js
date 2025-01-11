const apiKey = '297254da8961b1e34a931ee08dc76433'; // Replace with your OpenWeatherMap API key
let city = 'Mumbai'; 

const input = document.querySelector('#inpt');
const weatherImg=document.querySelector('#image1');
const cityVal=document.querySelector('#head1');
const Temp=document.querySelector('#para1');
const windSpeed=document.querySelector('#para2');
const humid=document.querySelector('#para3');
const main=document.querySelector('#main');

function makeCap(str){
     const str1=str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ');
     return str1.split('-').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join('-');

}

input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
    
      city=input.value;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  

      city=makeCap(city);
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

     Temp.innerHTML=data.main.temp+'\u00B0C'
     cityVal.innerHTML=city
     const ws=data.wind.speed*3.6
     windSpeed.innerHTML=ws.toFixed(2)+' km/h'
     humid.innerHTML=data.main.humidity+'%'
     const wea=data.weather[0].main;
     main.innerHTML=data.weather[0].description;

     if(wea==='Clouds'){
      weatherImg.src="./WeatherIcon/clouds.png"
     }else if(wea==='Clear'){
         weatherImg.src="./WeatherIcon/clear.webp"
     }
     else if(wea==='Rain'){
          weatherImg.src="./WeatherIcon/rain.webp"
     }
     else if(wea==='Smoke'){
         weatherImg.src="./WeatherIcon/smoke.png"
     }
     else if(wea==='Mist'){
         weatherImg.src="./WeatherIcon/mist.png"
     }
     else if(wea==='Haze'){
         weatherImg.src="./WeatherIcon/Haze.png"
     }
     else if(wea==='Snow'){
          weatherImg.src="./WeatherIcon/snowfall.png"
     }
     else{
          weatherImg.src="./WeatherIcon/clouds.png"
     }
     input.value='';
  })
  .catch(error => console.error('Error:', error));


    }
})


document.addEventListener('DOMContentLoaded', () => {
  city='Amravati';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  

fetch(apiUrl)
.then(response => response.json())
.then(data => {

 Temp.innerHTML=data.main.temp+'\u00B0C'
 cityVal.innerHTML=city
 const ws=data.wind.speed*3.6
 windSpeed.innerHTML=ws.toFixed(2)+' km/h'
 humid.innerHTML=data.main.humidity+'%'
 const wea=data.weather[0].main;
 main.innerHTML=data.weather[0].description;

 if(wea==='Clouds'){
  weatherImg.src="./WeatherIcon/clouds.png"
 }else if(wea==='Clear'){
     weatherImg.src="./WeatherIcon/clear.webp"
 }
 else if(wea==='Rain'){
      weatherImg.src="./WeatherIcon/rain.webp"
 }
 else if(wea==='Smoke'){
     weatherImg.src="./WeatherIcon/smoke.png"
 }
 else if(wea==='Mist'){
     weatherImg.src="./WeatherIcon/mist.png"
 }
 else if(wea==='Haze'){
     weatherImg.src="./WeatherIcon/Haze.png"
 }
 else if(wea==='Snow'){
      weatherImg.src="./WeatherIcon/snowfall.png"
 }
 else{
      weatherImg.src="./WeatherIcon/clouds.png"
 }
 input.value='';
})
.catch(error => console.error('Error:', error));

});