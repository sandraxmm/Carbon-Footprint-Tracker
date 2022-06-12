// Air quality variables
var errorLabel = document.querySelector("label[for='error-msg']")
var lonInput = document.querySelector("#lon");
var latInput = document.querySelector("#lat");
var appid = "201298bb4e1a226bed23c25333dda56b";
var link = "http://api.openweathermap.org/data/2.5/air_pollution";
var SearchBtn = document.querySelector("#btn");
var componentsEl = document.querySelectorAll(".component-val");
var Airquality = document.querySelector(".air-quality")
var AirqualityStatus = document.querySelector(".air-quality-status")
var lat = null
var lon = null


//Carbon Footprint Calculator
var button = document.querySelector("#submit-carbonfootprint")
var carMileage = document.querySelector("#mileage")
var carTypeInput = document.querySelector("#vehicle")
var carbonFootprint = document.querySelector("#carbon-results");
var carbonAPI = 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar'
var apiKey = '2b55785d9emsh128efc9a2b8a7e8p11212ajsn4abb761087ca'

//Air Quality API function

// get user location when they visit page
var RequestUserLocation = function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gatherLocation, gatherError)
    }else {
        gatherError({message: "location error. Please put cordinations"})
    }
    
};

var gatherLocation = function(pos) {
     lat = pos.coords.latitude.toFixed(2);
     lon = pos.coords.longitude.toFixed(2);

    latInput.value = lat;
    lonInput.value = lon;
    GetApi();
};

var GetApi = async function(event) {
    // event.preventDefault();
    if(lat == null) {
        lat = latInput.value;
    }
    if(lon == null) {
        lon = lonInput.value;
    }   
    var data = await fetch("http://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat +"&lon=" + lon +"&appid="+ appid +"")
    .catch(err => {
        gatherError({message: "location error. Please put cordinations"})
        console.log(err)
    })
    var airdata = await data.json()
    console.log(airdata);
    setComponent(airdata);
    setAirAqi(airdata);
}
// set the current air status at the location
const setAirAqi = function(airdata) {
    const Aqi = airdata.list[0].main.aqi;
    let airStats = ""; color = "";
    Airquality.innerText = Aqi
    // air quality status
    switch(Aqi) {
        case 1:
          airStats = "Perfect Condition"
          color = "green"
          break;
        case 2:
            airStats = "Fair Condition"
            color = "yellow"
            break
          // code block
          case 3:
            airStats = "Moderate Condition"
            color = "rgb(201, 204, 13)"
          break;
          case 4:
            airStats = "Poor Condition"
			color = "rgb(204, 83, 13)"
			break
            case 5:
			airStats = "Very Poor Condition"
			color = "rgb(204, 13, 13)"
			break

        default:
            airStats = "Unknown"
          // code block
      }
      AirqualityStatus.innerText = airStats;
      AirqualityStatus.getElementsByClassName.color = color;
}

var gatherError = function(e) {
    errorLabel.inntertext = e.message;
};

// extracting data
var setComponent = function(airdata) {
    var component = {...airdata.list[0].components}
    componentsEl.forEach(function(ele) {
        var attr = ele.getAttribute("data-comp")
        ele.innerText = component[attr] += " μg/m3"
    })
};
SearchBtn.addEventListener("click",GetApi);

RequestUserLocation();

//Carbon Footprint function
function carbonFootprintAsk(event) {
    event.preventDefault()
    var distance = carMileage.value;
    var carType = carTypeInput.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        }
    };
    var URI = 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance='+ distance +'&vehicle=' + carType;
    fetch(URI, options)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        carbonFootprint.append(data.carbonEquivalent);
        sendToLocalStor(data.carbonEquivalent);
    })
}
//event listener for submit button
button.addEventListener('click',carbonFootprintAsk);


//keep this var?
var prevCal = document.querySelector("#prevCal")

//event listener added jm
prevCal.addEventListener("click", function(){
console.log(prevCal)

});

function sendToLocalStor(data) {
    console.log(data)
localStorage.setItem("response", JSON.stringify(data));
}
 function retrieveFromStor (){
     var grabFromLocalStor = JSON.parse(localStorage.getItem("response"))
     console.log(grabFromLocalStor)
 }
