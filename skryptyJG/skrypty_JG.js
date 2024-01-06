let pole, punkt, prostokat,kolo, prostokatFull,koloFull;
let ctx,canvas,canvasHeigth,canvasWidth, centerX, centerY;

function innitIT(){

    startPunkt();
    startCanvas();
    clearCanvas();
    tryProstokat();
   // wypelnijProstokat();
    tryKolo();
    //wypelnijKolo();

    prostokat.maluj(centerX,centerY);
    kolo.maluj(centerX,centerY);
    //punkt.maluj(centerX,centerY);

    kolo.pole;
    kolo.obwod;
    prostokat.pole;
    prostokat.obwod;

    // wypelnijKolo();
    // wypelnijProstokat();
    //
    // prostokatFull.maluj();
    // koloFull.maluj();
}




function startPunkt(){
 punkt = {
    x:document.getElementById("x").value,
    y:document.getElementById("y").value,
    get r() { return Math.hypot(this.x, this.y); },
    set r(newvalue) {
     let oldvalue = Math.hypot(this.x, this.y);
    let ratio = newvalue/oldvalue;
    this.x *= ratio;
    this.y *= ratio;
     },
    get theta() { return Math.atan2(this.y, this.x); },
     kolor:"red",
     set theta(newtheta){
        this.x = Math.cos(newtheta)*this.r;
        this.y = Math.sin(newtheta)*this.r;
     },
     // maluj(){
     //    ctx.fillStyle = this.kolor;
     //    ctx.fillRect(centerX+ +this.x, centerY+ +this.y,3,3);
     // }
}
}



function startCanvas(){
    canvas = document.getElementById("myCanvasJG");
    ctx = canvas.getContext("2d");
    canvasWidth = canvas.width;
    canvasHeigth = canvas.height;

    centerX = canvasWidth/2;
    centerY = canvasHeigth/2;
}

function clearCanvas(){
    ctx.clearRect(0,0,canvasWidth,canvasHeigth);
}

function tryProstokat(){

prostokat = Object.create(punkt);
prostokat.kolor = "green";
Object.defineProperty(prostokat,'pole',{

    get(){
        document.getElementById("prostokatPole").innerHTML = this.x * this.y * 4;
        return this.x*this.y*4;},
});
Object.defineProperty(prostokat,'obwod',{
    get(){
        document.getElementById("prostokatObwod").innerHTML = (+this.x + +this.y) * 4;
        return (+this.x + +this.y)*4;}
});

prostokat.maluj = function(){
    ctx.strokeStyle = this.kolor;
    ctx.strokeRect(centerX -+ this.x, centerY -+ this.y, 2*(+this.x), 2*(+this.y));

}
}


function wypelnijProstokat(){
    prostokatFull = Object.create(prostokat);
    prostokatFull.maluj = function(){
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = document.getElementById("kolor").value;
        ctx.fillRect(centerX -+ this.x, centerY -+ this.y, 2*(+this.x), 2*(+this.y));
        ctx.globalAlpha = 1.0;
    };
}

function tryKolo(){
    kolo = Object.create(punkt);
    kolo.kolor = "red";
    Object.defineProperty(kolo,'pole',{
        get(){
            document.getElementById("koloPole").innerHTML = Math.floor(Math.PI*this.r**2);
            return Math.PI*this.r**2;
        }
    })
    Object.defineProperty(kolo,'obwod',{
        get(){
            document.getElementById("koloObwod").innerHTML = Math.floor(2 * Math.PI * this.r);
            return (2 * Math.PI * this.r);}
    })
    kolo.maluj = function(){
        ctx.strokeStyle = this.kolor;
        ctx.beginPath();
        ctx.arc(centerX,centerY,kolo.r,0,Math.PI*2);
        ctx.stroke();
        ctx.closePath();
    };
}

function wypelnijKolo(){
    koloFull = Object.create(kolo);
    koloFull.maluj = function(){
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = document.getElementById("kolor2").value;
        ctx.beginPath();
        ctx.arc(centerX,centerY,kolo.r,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.globalAlpha = 1.0;
    };
}
function malujKoloKolorem(){
    wypelnijKolo();
    koloFull.maluj();
 }

 function malujProstokatKolorem(){
     wypelnijProstokat();

     prostokatFull.maluj();
 }

