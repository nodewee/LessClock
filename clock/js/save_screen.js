//Author: NodeWee (https://nodewee.github.io)
//Source Code: https://github.com/NodeWee/LessClock

window.cover = document.getElementById("cover");

function cover_black() {
    window.cover.style.backgroundColor = "black";
    window.cover.style.color = "black";
}

function cover_red() {
    window.cover.style.backgroundColor = "red";
    window.cover.style.color = "red";
}

function cover_yellow() {
    window.cover.style.backgroundColor = "yellow";
    window.cover.style.color = "yellow";
}

function cover_blue() {
    window.cover.style.backgroundColor = "blue";
    window.cover.style.color = "blue";
}

function cover_white() {
    window.cover.style.backgroundColor = "white";
    window.cover.style.color = "white";
}

function cover_show() {
    window.cover.style.display = 'block';
    window.cover.style.width = window.innerWidth;
    console.log(window.innerWidth);
}

function cover_hide() {
    window.cover.style.display = 'none';
}


function save_screen() {
    cover_show();
    cover_black();
    setTimeout(cover_red, 50);
    setTimeout(cover_yellow, 100);
    setTimeout(cover_blue, 150);
    setTimeout(cover_white, 200);
    setTimeout(cover_hide, 300);
}

function save_screen_kindle() {
    cover_show();
    cover_white();
    setTimeout(cover_black, 100);
    setTimeout(cover_white, 200);
    setTimeout(cover_hide, 300);
}

