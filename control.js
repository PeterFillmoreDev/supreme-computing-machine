//grab all elements
let display = document.querySelectorAll('.disp');
let btnN = document.querySelectorAll('.btnn');
let btnO = document.querySelectorAll('.btno');
let btnEquals = document.querySelector('#eBtn')
let btnBackspace = document.querySelector('#bbtn')
let btnClearAll = document.querySelector('#cebtn')

//start sets every thing to 0
let numActive = 0;
let numInactive = 0;
//let stage = 1;
let opFunction = "";


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
    //if(stage == 1){
      if(numInactive == 0){
        numInactive = numActive;
        numActive = 0;
      }
      //numInactive += opBtn.value;
      display[1].textContent = numActive;
      display[0].textContent = numInactive;
      opFunction = opBtn.id;
    //}
  });
});


//events for function button
btnEquals.addEventListener('click', e => {
  //if (stage == 2){
    if (opFunction == 'add'){
      numInactive = Number(numInactive) + Number(numActive);
    }
    if (opFunction == 'subtract'){
      numInactive = Number(numInactive) - Number(numActive);
    }
    if (opFunction == 'multiply'){
      numInactive = Number(numInactive) * Number(numActive);
    }
    if (opFunction == 'divide'){
      numInactive = Number(numInactive) / Number(numActive);
    }
    numActive = 0;
    display[1].textContent = numActive;
    display[0].textContent = numInactive;
    //stage = 1;
  //};
});

btnClearAll.addEventListener("click", e => {
  opFunction = "";
  numInactive = 0;
  numActive = 0;
  display[1].textContent = numActive;
  display[0].textContent = numInactive;
});

btnBackspace.addEventListener("click", e => {
  function backspace(string){
    return(string.slice(0, -1));
  };

  if(numActive.length == 1){
    numActive = 0;
  }
  else{
    numActive = backspace(numActive);
  };
  display[1].textContent = numActive;
});

