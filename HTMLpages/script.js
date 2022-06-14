


 var prevCal = document.querySelector("#prevCal")
 var results = document.querySelector("#results")
//event listener added jm
prevCal.addEventListener("click", function(){
console.log(prevCal);
results.innerHTML="";
     var grabFromLocalStor = JSON.parse(localStorage.getItem("response"))
     console.log(grabFromLocalStor)
     results.append(grabFromLocalStor)
});
 


function sendToLocalStor(data) {
    console.log(data)
localStorage.setItem("response", JSON.stringify(data));

};
 



 
