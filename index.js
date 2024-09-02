let button = document.querySelector("#Button");
let input = document.querySelector("#inputData");
let container = document.querySelector(".container");
let display = document.querySelector(".display");
input.max = new Date().toISOString().split("T")[0];


function calculateAge(){
    let currentDate = new Date(input.value);


    let d1 = currentDate.getDate();
    let m1 = currentDate.getMonth()+1;
    let y1 = currentDate.getYear();


    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getYear();                                    



    let y3 = y2-y1;
    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = (12+m2)-m1;
    }
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getDate(y1,m1)+d2-d1;
    }


    function getDate(year,month){
        return new Date(year,month,0).getDate();
    }
    display.innerText = `${y3} Years ${m3} Months ${d3} days years old`;
    
}

button.addEventListener("click",()=>{
    if(input.value == ""){
        display.innerText =" Enter the age First! ..";
    }
    else{
    calculateAge();
    }
    input.value ="";
})