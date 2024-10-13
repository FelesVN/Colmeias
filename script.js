function mudar1() {
    var img = document.getElementById("imagem1");
    if (img.src.includes("imagens/r1.png")) {
        img.src = "imagens/s1.png";
    } else {
        img.src = "imagens/r1.png";
    }
}
function mudar2() {
    var img = document.getElementById("imagem2");
    if (img.src.includes("imagens/r2.png")) {
        img.src = "imagens/s1.png";
    } else {
        img.src = "imagens/r2.png";
    }
}
function mudar3() {
    var img = document.getElementById("imagem3");
    if (img.src.includes("imagens/r3.png")) {
        img.src = "imagens/s2.png";
    } else {
        img.src = "imagens/r3.png";
    }
}
function mudar4() {
    var img = document.getElementById("imagem4");
    if (img.src.includes("imagens/r4.png")) {
        img.src = "imagens/s1.png";
    } else {
        img.src = "imagens/r4.png";
    }
}
function mudar5() {
    var img = document.getElementById("imagem5");
    if (img.src.includes("imagens/r5.png")) {
        img.src = "imagens/s1.png";
    } else {
        img.src = "imagens/r5.png";
    }
}
function mudar6() {
    var img = document.getElementById("imagem6");
    if (img.src.includes("imagens/r6.png")) {
        img.src = "imagens/s2.png";
    } else {
        img.src = "imagens/r6.png";
    }
}
function mudar7() {
    var img = document.getElementById("imagem7");
    if (img.src.includes("imagens/r7.png")) {
        img.src = "imagens/s1.png";
    } else {
        img.src = "imagens/r7.png";
    }
}
function mudar8() {
    var img = document.getElementById("imagem8");
    if (img.src.includes("imagens/r8.png")) {
        img.src = "imagens/s1.png";
    } else {
        img.src = "imagens/r8.png";
    }
}
function mudar9() {
    var img = document.getElementById("imagem9");
    if (img.src.includes("imagens/r9.png")) {
        img.src = "imagens/s3.png";
    } else {
        img.src = "imagens/r9.png";
    }
}
function mudar10() {
    var img = document.getElementById("imagem10");
    if (img.src.includes("imagens/r10.png")) {
        img.src = "imagens/s4.png";
    } else {
        img.src = "imagens/r10.png";
    }
}
function mudar11() {
    var img = document.getElementById("imagem11");
    if (img.src.includes("imagens/r11.png")) {
        img.src = "imagens/s2.png";
    } else {
        img.src = "imagens/r11.png";
    }
}
function mudar12() {
    var img = document.getElementById("imagem12");
    if (img.src.includes("imagens/r12.png")) {
        img.src = "imagens/s2.png";
    } else {
        img.src = "imagens/r12.png";
    }
}

document.getElementById("imagem1").addEventListener("click", mudar1)
document.getElementById("imagem2").addEventListener("click", mudar2)
document.getElementById("imagem3").addEventListener("click", mudar3)
document.getElementById("imagem4").addEventListener("click", mudar4)
document.getElementById("imagem5").addEventListener("click", mudar5)
document.getElementById("imagem6").addEventListener("click", mudar6)
document.getElementById("imagem7").addEventListener("click", mudar7)
document.getElementById("imagem8").addEventListener("click", mudar8)
document.getElementById("imagem9").addEventListener("click", mudar9)
document.getElementById("imagem10").addEventListener("click", mudar10)
document.getElementById("imagem11").addEventListener("click", mudar11)
document.getElementById("imagem12").addEventListener("click", mudar12)

ScrollReveal().reveal('#logo',{
    reset: false,
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.ficha',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('h1',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('.produto',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('h2',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('.implantes',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});

ScrollReveal().reveal('.produto2',{
    origin: "bottom", 
    distance: "50px", 
    duration: 2000, 
    delay: 100, 
    reset: false 
});
