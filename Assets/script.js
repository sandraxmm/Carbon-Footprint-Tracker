// curl --request POST \
// --url https://beta3.api.climatiq.io/estimate \
// --header 'Authorization: Bearer 7CVW88CEXD49DFKK71F9072RPEYH' \
var data = {
        "emission_factor": "electricity-energy_source_grid_mix",
        "parameters":
            {
            "energy": 4200,
            "energy_unit": "kWh"
            }
         };

// Endpoint
var endpoint = "https://beta3.api.climatiq.io/estimate";

//Fetch
fetch(endpoint, {
    method: 'POST',
    headers: {
        Authorization: 'Bearer 7CVW88CEXD49DFKK71F9072RPEYH',
    },
    body: JSON.stringify(data)
}).then(function(response) {
    return response.json()
}).then(function(data) {
//Function to handle response
    console.log(data)
})



