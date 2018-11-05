window.onload = choosePics;

var myPix = new Array("img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png")

function choosePics() {
    for(var i=0;i<100;i++){
        var randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("prva").src = myPix[randomNum];
        var rn= Math.floor(Math.random() * myPix.length);
        document.getElementById("vtora").src = myPix[rn];
    }
}