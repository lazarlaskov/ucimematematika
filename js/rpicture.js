/**
 * Created by Laskov on 25-Oct-17.
 */
window.onload = choosePic;

var myPix = new Array("img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png");

function choosePic() {
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("pik").src = myPix[randomNum];
}