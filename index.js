const apikey = "ab7ca7632a7829e21c190aad2c67c7af";
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather_icon")
    async function checkWheather(city){
        const response = await fetch(apiUrl + city +`&appid=${apikey}`);
        var data = await response.json();
        console.log(data)
        document.querySelector(".city_name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%"; 
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
        
        if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloud.png";
        }
        else if(data.weather[0].main == "Clear"){
        weatherIcon.src="clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="Drizzle.png";
        }
        else if(data.weather[0].main == "Rain"){
        weatherIcon.src="rain image.png";
        }
        else if(data.weather[0].main == "Mist"){
        weatherIcon.src="mist.png";
        }
        document.querySelector(".weather").style.display =" block";
    }
    
    searchBtn.addEventListener('click',()=>{
        checkWheather(searchBox.value);
    })
