var i = 0;
document.addEventListener('keydown', (event) =>{
  if(event.key==='Spacebar'||event.key===' '){
    document.getElementById('letter'+i).classList.add('morse-Outlined');
    console.log('test');
    i++;
  }
})

/*const morseText = document.getElementById('morse-code-text');
const morseButton = document.getElementById('morse-input-button');
const morseMap = new Map();
var startDate;
var endDate;
var currentInterval;
var recorded=false;
morseMap.set('.-','a');
morseMap.set('-...','b');
morseMap.set('-.-.','c');
morseMap.set('-..','d');
morseMap.set('.','e');
morseMap.set('..-.','f');
morseMap.set('--.','g');
morseMap.set('....','h');
morseMap.set('..','i');
morseMap.set('.---','j');
morseMap.set('-.-','k');
morseMap.set('.-..','l');
morseMap.set('--','m');
morseMap.set('-.','n');
morseMap.set('---','o');
morseMap.set('.--.','p');
morseMap.set('--.-','q');
morseMap.set('.-.','r');
morseMap.set('...','s');
morseMap.set('-','t');
morseMap.set('..-','u');
morseMap.set('...-','v');
morseMap.set('.--','w');
morseMap.set('-..-','x');
morseMap.set('-.--','y');
morseMap.set('--..','z');
morseMap.set('',' ');


morseText.addEventListener('input', function handleChange(event) {
    document.getElementById('translated-text').textContent = morseToText(event.target.value);
  });

document.addEventListener('keydown', (event) =>{
  if(event.key==='Spacebar'||event.key===' '){
    timeStart();
  }
})
document.addEventListener('keyup', (event) =>{
  if(event.key==='Spacebar'||event.key===' '){
    timeStop();
  }
})


function timeStart(){
  // Ends on key repeats
  if(recorded){
    return;
  }

  // Recordes time key pressed
  startDate = new Date();

  // Adds space if not first entry according to time since last press
  if(endDate!=null){
    addSpace(startDate-endDate);
  }
  
  recorded = true;
}

function timeStop(){
  endDate = new Date();
  addInput(endDate-startDate);
  recorded = false;
}

function addInput(lengthHeld){
  if(lengthHeld<300){
    morseText.value=morseText.value+'.';
  }else{
    morseText.value=morseText.value+'-';
  }
  document.getElementById('translated-text').textContent = morseToText(morseText.value);
}

function addSpace(lengthHeld){
  if(lengthHeld>2000){
    morseText.value=morseText.value+'  ';
  }else if(lengthHeld>500){
    morseText.value=morseText.value+' ';
  }
  document.getElementById('translated-text').textContent = morseToText(morseText.value);
}

function morseToText(morseCode) {
  let output = '';
  const morseArray = morseCode.split(" ");
  for (let i = 0; i < morseArray.length; i++) {
    var nextChar = morseMap.get(morseArray[i]);
    if(nextChar == undefined){
      output = output+morseArray[i];
    }else{
      output = output+morseMap.get(morseArray[i]);
    }
  } 
  return output;
}*/