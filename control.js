//grab all elements
let display = document.querySelectorAll('.disp');
let btnN = document.querySelectorAll('.btnn');
let btnO = document.querySelectorAll('.btno');
let btnEquals = document.querySelector('#=btn')
let btnBackspace = document.querySelector('#bbtn')
let btnClearAll = document.querySelector('#cebtn')

//
let numActive = 0;
let numInactive = 0;
let stage = 1;
let opFunction = "";

//functions for the math

function add(active, inactive){
  return(inactive + active);
};

function subtract(active, inactive){
  return(inactive - active);
};

function multiply(active, inactive){
  return(inactive * active);
};

function divide(active, inactive){
  return(inactive / active);
};



// events for number buttons
btnN.forEach(numBtn => {
  numBtn.addEventListener('click', function(e) {
    if (numActive == '0'){
      numActive = numBtn.value;
    }
    else if(numBtn.value == "." && /([.])/i.test(numActive)){}
    else{
      numActive += numBtn.value;
    }
    display[1].textContent = numActive;
  });
});


//events for operator buttons
btnO.forEach(opBtn =>{
  opBtn.addEventListener('click', function(e){
    if(stage == 1){
      numInactive = numActive;
      numActive = opBtn.value;
      stage = 2;
      display[1].textContent = numActive;
      display[0].textContent = numInactive;
      opfunction = opBtn.id;
    }
  });
});


/*
btnEquals.addEventListener(e => {
  if (stage == 2){

  }
});
*/
