var level = 0;
var canvas, ctx;
var objsize = 40;
var forms = [];
var canvaswidth;
var canvasheight;
var formtypes = ['triangle', 'circle', 'square'];
var colors = ['red','green','blue','orange','black'];
var dxdy = [-1, 1   ];
var Form = function(type, color, numberInside, x, y, dx, dy){
    this.type = type;
    this.x = x; this.y = y;
    this.dx = dx; this.dy = dy;
    this.color = color;
    this.numberInside = numberInside;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init(){
    canvas = document.getElementById('game1canvas');
    canvas.width = (window.innerWidth);
    canvas.height = (window.innerHeight);
    ctx = canvas.getContext('2d');
    canvaswidth = canvas.width;
    canvasheight = canvas.height;
    generateForms();
}

function generateForms(){
    
    for(var i = 0; i < 20; i ++){
        var formtype = formtypes[getRandomInt(0,2)];
        var color = colors[getRandomInt(0,4)];
        var x = getRandomInt(0, canvaswidth);
        var y = getRandomInt(0, canvasheight);
        var dx = dxdy[getRandomInt(0,1)];
        var dy = dxdy[getRandomInt(0,1)];
        var randomInside = getRandomInt(1, 50);
        var record = new Form(formtype, color, randomInside, x, y, dx, dy);
        forms.push(record);
        drawRecord(record);
    }
    start();
}

function start(){
    animationDraw();
}


function animationDraw(){
    ctx.fillStyle = 'white';
    var cRHeight = canvas.height;
    var cRWidth = canvas.width;
    ctx.fillRect(0,0, cRWidth,cRHeight);

    for(var i = 0; i < forms.length; i ++){
        var record = forms[i];

        if(record.x + record.dx >= cRWidth){
            record.dx = -1 * record.dx;
        }
        if(record.y + record.dy >= cRHeight){
            record.dy = -1 * record.dy;
        }
        if(record.x + record.dx < 0){
            record.dx = -1 * record.dx;
        }
        if(record.y + record.dy < 0){
            record.dy = -1 * record.dy;
        }
        record.x += record.dx;
        record.y += record.dy;
        // console.log(record);
        drawRecord(record);
    }
    setTimeout(animationDraw, 50);
}

function drawRecord(record){
    if(record.type == 'triangle'){
        ctx.beginPath();
        ctx.fillStyle = record.color;
        ctx.moveTo(record.x, record.y);
        ctx.lineTo(record.x + 25, record.y + 40);
        ctx.lineTo(record.x - 25 , record.y + 40);
        ctx.fill();   
        ctx.font = "20px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(record.numberInside,record.x - 12,record.y + 32);
    }
    if(record.type == 'square'){
        ctx.fillStyle = record.color;
        ctx.fillRect(record.x, record.y, objsize, objsize);
        ctx.strokeStyle = record.color;
        ctx.strokeRect(record.x, record.y, objsize, objsize);

        ctx.font = "20px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(record.numberInside,record.x + 10,record.y + 27);

    }
    if(record.type == 'circle'){
        ctx.beginPath();
        ctx.arc(record.x, record.y, 23, 0, 2 * Math.PI, false);
        ctx.fillStyle = record.color;
        ctx.fill();

        ctx.font = "20px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText(record.numberInside,record.x - 11,record.y + 7);
    }
}


document.getElementById('game1canvas').addEventListener('click',function(evt){
    // alert(evt.clientX + ',' + evt.clientY);
    for(var i = forms.length - 1; i >= 0; i --){
        ctx.strokeRect(evt.clientX - 30, evt.clientY - 30, 40, 40);

        if(evt.clientX - 40 <= forms[i].x && evt.clientX + 40 >= forms[i].x){
            if(evt.clientY + 50 >= forms[i].y && evt.clientY - 50 <= forms[i].y){
            forms.splice(i, 1);
            break;
            }
        }
    }
},false);