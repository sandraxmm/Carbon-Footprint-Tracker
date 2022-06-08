const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com',
		'X-RapidAPI-Key': '2b55785d9emsh128efc9a2b8a7e8p11212ajsn4abb761087ca'
	}
};

fetch('https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));