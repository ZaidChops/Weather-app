let form = document.querySelector("form");
let input = document.querySelector("input");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let test_section = document.querySelector('text-section') 
let weather = document.querySelector('.weather')
let main_content = document.querySelector('#main-text')
let head = document.querySelector('h3')
let h6 = document.querySelector('h6')
let para = document.querySelector('.para')
let h5 = document.querySelector('h5')


let API_KEY = "d519878016395599e418c187ee68cc7b";

const getData = async (e) => {
  e.preventDefault();
  weather.innerHTML = `<h2> Loading.... </h2>`
  
   const text= input.value

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
   

let heading = document.querySelector('h2')
heading.innerHTML = `<h2> ${data.main.temp}</h2>`
weather.innerHTML = `<div>
<p>${data.weather[0].description}</p>
 <img class="image" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather image" width="90px"> </div>
`

    head.innerText =  data.name
    h6.innerText = data.sys.country
    para.innerText = `${data.main.humidity}%`
    h5.innerText =  today = Date();
    body.style.backgroundImage = `url("https://source.unsplash.com/random/900×700/?${data.weather[0].description}")`;
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  } catch (error) {
    window.alert("Please enter valid city name");
  }

  form.reset();
};

form.addEventListener("submit", getData);
