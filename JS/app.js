

function displayDiv() {
   document.getElementById("inputDisplay").style.display = "block";
   document.getElementById("textHeight").value = '';
   document.getElementById("textWeight").value = "";
   document.getElementById("textAge").value= "";
   
   
}


function calculateMaleBmi(height, weight, age) {
    var bmiTotal = Math.floor(88.362 + (13.397 * weight ) + (4.799 * height ) - (5.677 * age)) + " j";
    console.log(bmiTotal)
    document.getElementById("bmiTotal").innerText = bmiTotal;


    

}
function calculateFemaleBmi(height, weight, age) {
    var bmiTotal = Math.floor(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)) + " j";
    console.log(bmiTotal)
    document.getElementById("bmiTotal").innerText = bmiTotal;


    

}

//make function to clear input 


document.getElementById("buttonCalc").onclick = function(){
   
    var height = document.getElementById("textHeight").value;
    var weight = document.getElementById("textWeight").value;
    var age = document.getElementById("textAge").value;
    calculateMaleBmi(height,weight,age);
    calculateFemaleBmi(height,weight,age);

    console.log(height)
    console.log(weight)
    console.log(age)
}
