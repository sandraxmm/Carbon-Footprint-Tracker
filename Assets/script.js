//Carbon Footprint Calculator
var button = document.querySelector("#submit-carbonfootprint")
var carMileage = document.querySelector("#mileage")
var carTypeInput = document.querySelector("#vehicle")
var carbonFootprint = document.querySelector("#results");
var carbonAPI = 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar'
var apiKey = '2b55785d9emsh128efc9a2b8a7e8p11212ajsn4abb761087ca'

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
        console.log(data)
    })
}
//event listener for submit button
button.addEventListener('click',carbonFootprintAsk);

//append results to html - code NOT WORKING
carbonFootprint.append(carbonFootprintAsk);

//keep this var?
var prevCal = document.querySelector("#prevCal")

//event listener added jm
prevCal.addEventListener("click", function(){
console.log(prevCal)
});

function sendToLocalStor(data) {
localStorage.setItem("response", JSON.stringify(data));
}
 function retrieveFromStor (){
     var grabFromLocalStor = JSON.parse(localStorage.getItem("response"))
     console.log(grabFromLocalStor)
 }
