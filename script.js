function calculate(){
    var height=(document.getElementById("height").value)/100;
    var weight=document.getElementById("weight").value;
    
    var bmi = (weight / height ** 2).toFixed(1);
    var text=""
    if(bmi<18.5){
        text= "Your BMI is "+bmi+", you are underweight."
    }else if(bmi<24.9){
        text= "Your BMI is "+bmi+", you are at the ideal weight."
    }else if(bmi<29.9){
        text= "Your BMI is "+bmi+", you are overweight."
    }else if(bmi<39.9){
        text= "Your BMI is "+bmi+", you are obese."
    }else if(bmi>39.9){
        text= "Your BMI is "+bmi+", you are morbidly obese."
    }
    document.getElementById("text-area").innerText=text
}