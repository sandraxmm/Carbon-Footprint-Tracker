


 var prevCal = document.querySelector(".prevCal")
 var results = document.querySelector("#results")
//event listener added jm
prevCal.addEventListener("click", function(){
console.log(prevCal)
     var grabFromLocalStor = JSON.parse(localStorage.getItem("response"))
     console.log(grabFromLocalStor)
     results.append(grabFromLocalStor)
});
 


function sendToLocalStor(data) {
    console.log(data)
localStorage.setItem("response", JSON.stringify(data));

};
 






var prevCal2 = document.querySelector(".prevCal2")
var results2 = document.querySelector("#results2")
//event listener added jm
prevCal2.addEventListener("click", function(){
console.log(prevCal)
    var grabFromLocalStor = JSON.parse(localStorage.getItem("response2"))
    console.log(grabFromLocalStor)
    results2.append(grabFromLocalStor)
});



function sendToLocalStor(data) {
   console.log(data)
localStorage.setItem("response2", JSON.stringify(data));

};

 
