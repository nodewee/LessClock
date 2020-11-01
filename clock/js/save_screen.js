/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

var LessClock = window.LessClock;

LessClock.cover = document.getElementById("cover");

function cover_black() {
    LessClock.cover.style.backgroundColor = "black";
    LessClock.cover.style.color = "black";
}

function cover_red() {
    LessClock.cover.style.backgroundColor = "red";
    LessClock.cover.style.color = "red";
}

function cover_yellow() {
    LessClock.cover.style.backgroundColor = "yellow";
    LessClock.cover.style.color = "yellow";
}

function cover_blue() {
    LessClock.cover.style.backgroundColor = "blue";
    LessClock.cover.style.color = "blue";
}

function cover_white() {
    LessClock.cover.style.backgroundColor = "white";
    LessClock.cover.style.color = "white";
}

function cover_show() {
    LessClock.cover.style.left = 0;
    LessClock.cover.style.top=0;
    LessClock.cover.style.width = window.innerWidth+"px";
    LessClock.cover.style.height = window.innerHeight+"px";

    LessClock.cover.style.display = 'block';
}

function cover_hide() {
    LessClock.cover.style.display = 'none';
    LessClock.cover.style.width="0px";
    LessClock.cover.style.height="0px";
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
    setTimeout(cover_black, 250);
    setTimeout(cover_white, 500);
    setTimeout(cover_hide, 750);
}



if (LessClock.is_kindle) {
    setTimeout(save_screen_kindle, 2000); //刷新一次屏幕，清理 kindle 残影
    setInterval(save_screen_kindle, 3600000); //每小时再清理一次
}
else {
    setInterval(save_screen, 1800000); //保护屏幕像素，每过30分钟刷新一次屏幕
}