var img = document.getElementById("img");
var off = document.getElementById("off");
var on = document.getElementById("on");

function onBulb(){
    img.src = "images/bulb-on.jpg";

    off.disabled = false;
    on.disabled = true;
}

function offBulb(){
    img.src = "images/bulb-off.jpg";

    off.disabled = true;
    on.disabled = false;
}