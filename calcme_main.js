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
let maxPosibbleTotal=0; 

let settings = {
    currentPlayer: 0,

    predifinedSettings: [
        // set_debug = {
        //     description: "Debug preset",
        //     iterations: 5,
        //     maxPosibbleTotal: 20,
        //     minValue: 1,
        //     maxValue: 9,
        //     delaySeconds: 1
        // },
        set_0 = {
            description: "Easy 1",
            iterations: 10,
            maxPosibbleTotal: 20,
            minValue: 1,
            maxValue: 19,
            delaySeconds: 2
        },
        set_1 = {
            description: "Middle 1",
            iterations: 20,
            maxPosibbleTotal: 50,
            minValue: 1,
            maxValue: 20,
            delaySeconds: 2
        },
        set_1 = {
            description: "Hard 1",
            iterations: 30,
            maxPosibbleTotal: 100,
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

// Logic
function getParameters() {
    iterations = Number(document.getElementById("iterations").value);
    minValue = Number(document.getElementById("minValue").value);
    maxValue = Number(document.getElementById("maxValue").value);
    delaySeconds = Number(document.getElementById("delaySecondsValue").value);
    maxPosibbleTotal = Number(document.getElementById("maxPossibleTotalValue").value);
}

function setUpParameters() {
    setFieldValue("iterations", iterations);
    setFieldValue("minValue", minValue);
    setFieldValue("maxValue", maxValue);
    setFieldValue("delaySecondsValue", delaySeconds);
    setFieldValue("maxPossibleTotalValue", maxPosibbleTotal);
}

function initGame() {
    iterations = settings.predifinedSettings[0].iterations;
    minValue = settings.predifinedSettings[0].minValue;
    maxValue = settings.predifinedSettings[0].maxValue;
    delaySeconds = settings.predifinedSettings[0].delaySeconds;
    maxPosibbleTotal = settings.predifinedSettings[0].maxPosibbleTotal;

    setUpParameters();
   
    showUiLabel("number" , "");
    disableEnableButton("myResultValue",DISABLE);
    disableEnableButton("inputResult_Label",DISABLE);
    disableEnableButton("checkResult_Button",DISABLE);
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
    let isPositive=true;
    total = 0;

    getParameters();
    

    disableEnableButton("myResultValue",DISABLE);
    disableEnableButton("inputResult_Label",DISABLE);
    disableEnableButton("checkResult_Button",DISABLE);

    for (index; index < iterations; index++){

        console.log('iteration:' + (index+1))
        await sleep(delaySeconds*MILLISECONDS) // Pause for seconds
        
        
        // setTimeout(function(new_number) {
        console.log('isPositive: '+ isPositive);
        do {
            new_number = minValue+getRandomInt(maxValue-minValue);
            
            if (isPositive == false) {
                new_number=new_number* (-1);
                
            }
            console.log('new number TRY: '+ new_number);
            
        } while (total+new_number>Math.abs(maxPosibbleTotal) || (total+new_number<1));
       
        console.log('next number: '+ new_number);

        total += new_number;
        isPositive=!isPositive;
        
        console.log('total: '+ total);
        console.log('------------------------');

        showUiLabel("number" , new_number);
      
    }

    showUiLabel("number" , "");
    disableEnableButton("myResultValue",ENABLE);
    disableEnableButton("inputResult_Label",ENABLE);
    disableEnableButton("checkResult_Button",ENABLE);
    
    
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
