let input1=document.querySelector("#price");
let input2=document.querySelector("#month");
let input3=document.querySelector("#percentage");
let button1=document.querySelector("#calculate");
let button2=document.querySelector("#clean");
let result=document.querySelector(".list-group");
let finalAmount=document.querySelector("#finalAmounts");

button1.addEventListener("click", function(){
    if(input1.value=="" || input2.value=="" || input3.value==""){
        alert("Fill the inputs!");
        return;
    }

    result.innerHTML="";
    finalAmount.innerHTML="";
    for(let i=0; i<input2.value; i++){
    result.innerHTML += "<li class='list-group-item'>"+(input1.value*(1+input3.value*input2.value/100)/input2.value)+"</li>";
    }

    finalAmount.innerHTML += "Toplam: " + (input1.value*(1+input3.value*input2.value/100));
});

button2.addEventListener("click", function(){
    result.innerHTML="";
    finalAmount.innerHTML="";
    input1.value="";
    input2.value="";
    input3.value="";
})