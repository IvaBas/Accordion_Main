let par = document.querySelector(".par");
let img_plus = document.querySelector(".img_plus")
let img_minus = document.querySelector(".img_minus")

let par1 = document.querySelector(".par1");
let img_plus1 = document.querySelector(".img_plus1")
let img_minus1 = document.querySelector(".img_minus1")

let par2 = document.querySelector(".par2");
let img_plus2 = document.querySelector(".img_plus2")
let img_minus2 = document.querySelector(".img_minus2")

let par3 = document.querySelector(".par3");
let img_plus3 = document.querySelector(".img_plus3")
let img_minus3 = document.querySelector(".img_minus3")

// Duzi nacin, postoji dole brzi nacin ali samo padajuci paragraf, bez minus znaka:

function hideShow() {
    if (par.style.display == "block") {
        par.style.display = "none";
        img_plus.style.display = "block";
        img_minus.style.display = "none";
    } else {
        par.style.display = "block";
        img_plus.style.display = "none";
        img_minus.style.display = "block";
    }
}

function hideShow1() {
    if (par1.style.display == "block") {
        par1.style.display = "none";
        img_plus1.style.display = "block";
        img_minus1.style.display = "none";
    } else {
        par1.style.display = "block";
        img_plus1.style.display = "none";
        img_minus1.style.display = "block";
    }
}

function hideShow2() {
    if (par2.style.display == "block") {
        par2.style.display = "none";
        img_plus2.style.display = "block";
        img_minus2.style.display = "none";
    } else {
        par2.style.display = "block";
        img_plus2.style.display = "none";
        img_minus2.style.display = "block";
    }
}

function hideShow3() {
    if (par3.style.display == "block") {
        par3.style.display = "none";
        img_plus3.style.display = "block";
        img_minus3.style.display = "none";
    } else {
        par3.style.display = "block";
        img_plus3.style.display = "none";
        img_minus3.style.display = "block";
    }
}


// Brzi nacin ali samo padajuci paragraf, bez minus znaka:
// function hideShow() {
//     par.classList.toggle("hide");
// }

// function hideShow1() {
//     par1.classList.toggle("hide1");
// }

// function hideShow2() {
//     par2.classList.toggle("hide2");
// }

// function hideShow3() {
//     par3.classList.toggle("hide3");
// }
