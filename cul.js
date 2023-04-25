let button = document.querySelectorAll("button");
let opInput = document.querySelector("#ope-input");
let resInput = document.querySelector("#res-input");


//let historyIcon = document.querySelector(".fa-sharp");
//let historyPage = document.querySelector(".history-page");


let valueOne = 0;
let valueTwo = 0;
let operation = "";
let option2 = false;

//historyIcon.addEventListener("click" , () => {
 // historyPage.classList.toggle("active");
  
//})

 button.forEach(btn => {
    btn.addEventListener("click", () => {
     
     if (btn.classList.contains("clear-all") || btn.classList.contains("clear"))
     {

   //clear 

if (btn.classList.contains("clear")){
  if (resInput.value > 0){
    clearInput (resInput);
  }else{
    clearInput(opInput);
  }
}else
    //clear all
{
  clearAll();
}

     } else if (btn.classList.contains("Operation")){

     //operation

     if (btn.value != "="){
      option2 = true;
      valueOne = opInput.value;
      Operation = btn.value
     }else{
      if(option2){
         let sum = `${valueOne} ${Operation} ${valueTwo}`;
         resInput.value = `${eval(sum)}`;
         valueOne = 0;
         valueTwo = 0;
         Operation = "";
      }
     }

     }else{

      if (option2){
        valueTwo == 0 ? valueTwo = btn.value : valueTwo += btn.value;
        opInput.value = `${valueOne} ${Operation} ${valueTwo}`;
      }else{
        opInput.value == 0 ? opInput.value = btn.value : opInput.value += btn.value ;

        valueOne += btn.value;
   
   
      }
   

         
     }

      

    })
 })

 function clearInput(input){
  let currentResult = input.value.split("");
  let last = currentResult.pop();
  if (currentResult.length > 0){
    input.value = currentResult.join("");
  }else{
    input.value = 0;
    option2 = false;
    valueOne = 0;
    valueTwo = 0;
    Operation = "";


  }
 }
 function clearAll(){
  opInput.value = 0;
  resInput.value = 0;
    option2 = false;
    valueOne = 0;
    valueTwo = 0;
    Operation = "";

 }