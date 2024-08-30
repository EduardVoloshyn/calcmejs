// game global constants
//const DEBUG_MODE = true;

// UI
const DISABLE = true;
const ENABLE = false;


const MILLISECONDS = 1000;

let iterations = 5;
let minValue = 2;
let maxValue = 6;
let delaySeconds = 1;
let total = 0;

let settings = {
    currentPlayer: 0,

    predifinedSettings: [
        set_0 = {
            description: "Easy 1",
            iterations: 10,
            minValue: 1,
            maxValue: 9,
            delaySeconds: 3
        },
        set_1 = {
            description: "Middle 1",
            iterations: 20,
            minValue: 1,
            maxValue: 20,
            delaySeconds: 2
        },
        set_1 = {
            description: "Hard 1",
            iterations: 30,
            minValue: 10,
            maxValue: 50,
            delaySeconds: 2
        }
    ]
};
// ---------------------------------------------------------------------
function showMessage(message) {
    alert(message);
    console.log(message);
}

function showDebugMessage(message) {
    if (DEBUG_MODE) {
        // alert(message);
        console.log(message);
    }

}

// UI
function showUiLabel(labelId, text) {
    var label = document.getElementById(labelId);
    label.innerHTML = text;
}

// UI
function setFieldValue(fieldId, value) {
    var field = document.getElementById(fieldId);
    field.defaultValue = value;
}

// UI
function disableEnableButton(labelId, mode) {
    var button = document.getElementById(labelId);
    button.disabled = mode;
}

// UI
function requestInputData(description, defaultValue) {
    return prompt(description, defaultValue);
}

// UI
function requestYesNoConfirmation(question) {
    result = confirm(question);
}

// Core
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getParameters() {
    iterations = Number(document.getElementById("iterations").value);
    minValue = Number(document.getElementById("minValue").value);
    maxValue = Number(document.getElementById("maxValue").value);
    delaySeconds = Number(document.getElementById("delaySecondsValue").value);
}
function setUpParameters() {
    setFieldValue("iterations", iterations);
    setFieldValue("minValue", minValue);
    setFieldValue("maxValue", maxValue);
    setFieldValue("delaySecondsValue", delaySeconds);
}

function initGame() {
    iterations = settings.predifinedSettings[0].iterations;
    minValue = settings.predifinedSettings[0].minValue;
    maxValue = settings.predifinedSettings[0].maxValue;
    delaySeconds = settings.predifinedSettings[0].delaySeconds; 

    setUpParameters();
   
    disableEnableButton("myResultValue",DISABLE);
    disableEnableButton("inputResultLabel",DISABLE);
    disableEnableButton("checkResultButton",DISABLE);
}

// UI
function showUiField(index) {
    const element = gameObject.fields[index];

    var html = document.getElementById("field_" + index);
    html.innerHTML = "";
}

// UI
function showUiLabel(labelId, text) {
    var label = document.getElementById(labelId);
    label.innerHTML = text;
}

// UI
function disableEnableButton(labelId, mode) {
    var button = document.getElementById(labelId);
    button.disabled = mode;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

async function startGame(params) {
    let index=0;
    let new_number=0;
    total = 0;

    getParameters();

    disableEnableButton("myResultValue",DISABLE);
    disableEnableButton("inputResultLabel",DISABLE);
    disableEnableButton("checkResultButton",DISABLE);

    for (index; index < iterations; index++){

        console.log('iteration:' + (index+1))
        await sleep(delaySeconds*MILLISECONDS) // Pause for 2 seconds
        
        
        // setTimeout(function(new_number) {
        new_number = minValue+getRandomInt(maxValue-minValue);
        console.log('next number: '+ new_number);

        total += new_number;
        console.log('total: '+ total);
        showUiLabel("number" , new_number);
      
    }

    disableEnableButton("myResultValue",ENABLE);
    disableEnableButton("inputResultLabel",ENABLE);
    disableEnableButton("checkResultButton",ENABLE);
}

function checkResult() {
    var myResult = Number(document.getElementById("myResultValue").value);
    if (myResult == total) {
        showUiLabel("resultOfGame" , "!!! ПЕРЕМОГА !!!");
    } else {
        showUiLabel("resultOfGame" , "...нЕвДаЧа...");
    }
  }
  
function checkResultButton() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello World!");
    document.body.appendChild(x);
}

//--------------------------------
// start script

initGame(); 
