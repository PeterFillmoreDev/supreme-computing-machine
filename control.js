//grab all elements
let display = document.querySelectorAll('.disp');
let btnN = document.querySelectorAll('.btnn');
let btnO = document.querySelectorAll('.btno');
let btnC = document.querySelectorAll('.btnO');

//string array where [1] is the active string and [is the inactive string]
let disp = ["0","0"];


btnN.forEach(item => {
  item.addEventListener('click', function(e) {
    if (disp[1] == '0'){
      disp[1] = item.value;
      display[1].textContent = disp [1];
    }
    else if(item.value == "." && /([.])/i.test(disp[1])){
      display[1].textContent = disp [1];
    }
    else{
      disp[1] += item.value;
      display[1].textContent = disp [1];
    }
  });
});