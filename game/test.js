var lock = 0;
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Pellentesque auctor, nisl finibus pellentesque porttitor, magna dolor luctus nunc, \n id facilisis lacus eros quis libero. Ut ultricies ultricies velit, eu laoreet leo imperdiet ac. Proin nibh urna, eleifend eu sagittis ac, tincidunt id ex. In scelerisque dapibus pulvinar. Aenean scelerisque, quam quis sollicitudin placerat, enim ipsum consequat arcu, quis sagittis mi tellus vitae lectus. Mauris euismod orci a scelerisque porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

function first(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("r1").innerHTML = "F";
        document.getElementById("answer").innerHTML = text;
        lock = 1;
    }
}

function second(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("r2").innerHTML = "V";
        document.getElementById("answer").innerHTML = text;
        lock = 1;
    }
}

function third(element1, element2, element3){
    if (lock === 0) {
        element1.style.backgroundColor = "red";
        element2.style.backgroundColor = "lightgreen";
        element3.style.backgroundColor = "red";
        document.getElementById("r3").innerHTML = "F";
        document.getElementById("answer").innerHTML = text;
        lock = 1;
    }
}
