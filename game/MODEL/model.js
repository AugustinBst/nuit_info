var lock = 0;
var text_win = "GG et oui c'est comme sa le MODEL"
var text_lose = "Et non, ce n'est pas comme sa."

function first(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_lose;
        lock = 1;
    }
}

function second(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_win;
        lock = 1;
    }
}

function third(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_lose;
        lock = 1;
    }
}

function first_2(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_lose;
        lock = 1;
    }
}

function second_2(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_win;
        lock = 1;
    }
}

function third_2(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_lose;
        lock = 1;
    }
}


function first_3(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_lose;
        lock = 1;
    }
}

function second_3(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_win;
        lock = 1;
    }
}

function third_3(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("answer").innerHTML = text_lose;
        lock = 1;
    }
}
