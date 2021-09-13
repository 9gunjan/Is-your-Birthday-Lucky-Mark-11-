const birthdayDate = document.querySelector("#d-o-b");
const luckyNumber = document.querySelector("#lucky-number");
const outputBox = document.querySelector("#output");
const checkButton = document.querySelector("#check-number");

checkButton.addEventListener("click" , function (){

    
        const dob = birthdayDate.value;
        const sum = calculateSum(dob);
        if(sum&&dob){
            compareValues(sum,luckyNumber.value);
        }else{
            outputBox.innerText = "Pleasee enter both the fields.";
        }

    
});

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum =0 ;
    for(let i=0;i<dob.length;i++){
        sum += Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="Wow! Your Birthday is Lucky !! "
    }else{
        outputBox.innerText="Sorry! Your Birthday is not Lucky :("
    }
}

