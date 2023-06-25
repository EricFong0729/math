$(function start(){
    document.getElementById("Hanlin").hidden = true;
    document.getElementById("Longteng").hidden = true;
    document.getElementById("Nani").hidden = true;
    document.getElementById("Sanmin").hidden = true;

    var button1 = document.getElementById("HanlinButton");
    var button2 = document.getElementById("LongtengButton");
    var button3 = document.getElementById("NaniButton");
    var button4 = document.getElementById("SanminButton");
    var HanlinDiv = document.getElementById("Hanlin");
    var LongtengDiv = document.getElementById("Longteng");
    var NaniDiv = document.getElementById("Nani");
    var SanminDiv = document.getElementById("Sanmin");

    button1.addEventListener("click", function() { show(HanlinDiv); }, false);
    button2.addEventListener("click", function() { show(LongtengDiv); }, false);
    button3.addEventListener("click", function() { show(NaniDiv); }, false);
    button4.addEventListener("click", function() { show(SanminDiv); }, false);
});

function show(element) {
    if (element.hidden) {
        element.hidden = false;
    } else {
        element.hidden = true;
    }
};