
let bar =document.querySelector(".bars");
let lis=document.querySelector(".lisa");
let pafay=document.querySelector(".pafay");
let dyasrm=document.querySelector(".pafay .dyasrm");
let monthsrm=document.querySelector(".pafay .monthsrm");
let country=document.querySelector(".information h3");
let temp=document.querySelector(".ino-temp h2 ");
let stateWeather =document.querySelector(".weater");
let humidity =document.querySelector(".humidity");
let wind =document.querySelector(".wind");
let imgtemp =document.querySelector(".ino-temp img");
let inputsearch =document.querySelector(".varseach .inputsearch");
let find =document.querySelector(".varseach .find");
let search =inputsearch.value;

inputsearch.addEventListener('keyup',function(){
    console.log(inputsearch.value);
})

bar.addEventListener('click',function(){
lis.classList.toggle("j")
})


const url =`https://api.weatherapi.com/v1/current.json?key=3b4dfcf6e8d44f3f879125222230108&q=`;
const fetchurl= async(city)=>{
try{
const res =await fetch(`${url}${city}`);
const data =await res.json(res);
console.log(data);
let days=["sun", "mon","tuse","wed","thur","fri","sat"];
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var o= data.current.last_updated;
var z=new Date(o);
dyasrm.innerHTML=days[z.getDay()];
monthsrm.innerHTML=`${z.getDate()} ${month[z.getMonth()]}`;
country.innerHTML=data.location.name;
temp.innerHTML=`${data.current.temp_c}<sup>o</sup>c`;
stateWeather.innerHTML=data.current.condition.text;
humidity.innerHTML=`${data.current.humidity}%`;
wind.innerHTML=`${Math.round(data.current.wind_kph)}km/h`;
if(data.current.cloud  >5 ){
  imgtemp.src =`images/302 (1).png`;
}
else if(data.current.cloud  <=5 ){
    imgtemp.src =`images/113.webp`;
}

}catch(error){
console.log(error);
}
}
const urln =`https://api.weatherapi.com/v1/current.json?key=3b4dfcf6e8d44f3f879125222230108&q=egypt`;
const fetchurln= async()=>{
try{
const res =await fetch(urln);
const data =await res.json(res);
console.log(data);
let days=["sun", "mon","tuse","wed","thur","fri","sat"];
var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
var o= data.current.last_updated;
var z=new Date(o);
dyasrm.innerHTML=days[z.getDay()];
monthsrm.innerHTML=`${z.getDate()} ${month[z.getMonth()]}`;
country.innerHTML=data.location.name;
temp.innerHTML=`${data.current.temp_c}<sup>o</sup>c`;
stateWeather.innerHTML=data.current.condition.text;
humidity.innerHTML=`${data.current.humidity}%`;
wind.innerHTML=`${Math.round(data.current.wind_kph)}km/h`;
if(data.current.cloud  >5 ){
  imgtemp.src =`images/302 (1).png`;
}
else if(data.current.cloud  <=5 ){
    imgtemp.src =`images/113.webp`;
}

}catch(error){
console.log(error);
}
}
fetchurln()

inputsearch.addEventListener('keyup',function(){
    fetchurl(inputsearch.value)
})


const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

