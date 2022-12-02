let a = 0;

function moins() {
    a--;
    document.getElementById("p1").innerHTML = a;
}

function plus() {
    a++;
    document.getElementById("p1").innerHTML = a;
}

function reset() {
    a = 0;
    document.getElementById("p1").innerHTML = a;
}

function valider() {
    if (a === 42) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_self");
    } else 
        alert(' mauvaise réponse,\n indince : H2G2 ')
}
