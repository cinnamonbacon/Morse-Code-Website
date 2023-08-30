var startDate;
var endDate;
var letterSpaceTimes=[];
var dotTimes=[];
var dashTimes=[];
var calibrated = false;
var letterNum = 0;

const letters = document.getElementById('calibrationLetters');
const LASTLETTER = 9;

const morseText = document.getElementById('morse-code-text');
const translatedText = document.getElementById('translated-text');
const morseMap = new Map();

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



document.addEventListener('keydown', (event) =>{
  if(calibrated===false&&(event.key==='Spacebar'||event.key===' ')){
    document.getElementById('letter'+letterNum).classList.add('morse-Outlined');
    console.log('test');
    startDate = new Date();
  }
})

document.addEventListener('keyup', (event) =>{
  if(calibrated===false&&(event.key==='Spacebar'||event.key===' ')){
    endDate = new Date();
    if(document.getElementById('letter'+letterNum).classList.contains("dot")){
      dotTimes.push(endDate-startDate);
    }else if(document.getElementById('letter'+letterNum).classList.contains("dash")){
      dashTimes.push(endDate-startDate);
    }
    

    letterNum++;
    if(letterNum>LASTLETTER){
      calibrate();

    }
  }
})

var letterSpaceTime;
var dotAvgTime;
var dashAvgTime
function calibrate(){
  calibrated = true;
  dotAvgTime = average(dotTimes);
  dashAvgTime = average(dashTimes);
  letters.hidden=true;
  morseText.hidden = false;
  translatedText.hidden = false;
  morseText.value='';
}

// Calculates and returns the average of an array
function average(arrayEntry){
  var total = 0;
  for(let i=0;i<arrayEntry.length;i++){
    total+=arrayEntry[i];
  }
  return total/arrayEntry.length;
}






morseText.addEventListener('input', function handleChange(event) {
    document.getElementById('translated-text').textContent = morseToText(event.target.value);
  });

document.addEventListener('keydown', (event) =>{
  if(calibrated&&(event.key==='Spacebar'||event.key===' ')){
    timeStart();
  }
})
document.addEventListener('keyup', (event) =>{
  if(calibrated&&(event.key==='Spacebar'||event.key===' ')){
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
}