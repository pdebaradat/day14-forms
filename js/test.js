let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    
    greetParagraph.innerHTML = "Greetings " +  age + " year old " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + " you are wrong!!!!!!";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + " you are VERY wrong!!!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + " DING DING DING! You are right!";
    }
}

function truth() {
    let truthAnswer = document.getElementById("truth-answer");

    let oneSelected = document.getElementById("one").checked;
    let twoSelected = document.getElementById("two").checked;
    let threeSelected = document.getElementById("three").checked;

    if (oneSelected) {
        truthAnswer.innerHTML = fname + " you are wrong!!!!!!";
    }
    else if (twoSelected) {
        truthAnswer.innerHTML = fname + " you found the lie!";
    }
    else if (threeSelected) {
        truthAnswer.innerHTML = fname + " you are wrong :(";
    }
}