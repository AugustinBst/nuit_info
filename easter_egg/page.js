const keyBoard = document.querySelector('.keyboard')

let cle = 0;
let i = 0;
let s = 0;
let t = 0;

keyBoard.addEventListener('keydown', key =>{
    if(key.keyCode !== 84 && key.keyCode !== 83 && key.keyCode !== 73) {
        cle = 0;
        i = 0;
        s = 0;
        t = 0;
    }
    if(key.keyCode === 73 ) {
        if (i === 0)
            cle += 1;
        if (i === 1) {
            cle = 0;
            i = 0;
            s = 0;
            t = 0;
        } else
            i = 1;
    }
    if(key.keyCode === 83) {
        if (i === 1)
            cle += 1;
        if (s === 1) {
            cle = 0;
            i = 0;
            s = 0;
            t = 0;
        } else
            s = 1;
    }
    if(key.keyCode === 84) {
        if (i === 1 && s === 1)
            cle += 1;
        if (t === 1) {
            cle = 0;
            i = 0;
            s = 0;
            t = 0;
        } else
            t = 1;
    }
    if (cle === 3)
        egg();
})

function egg() {
    window.open("easter_egg/eester_egg.html","_self");
}