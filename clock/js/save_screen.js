/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

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
    window.cover.style.left = 0;
    window.cover.style.top=0;
    window.cover.style.width = window.innerWidth+"px";
    window.cover.style.height = window.innerHeight+"px";

    window.cover.style.display = 'block';
}

function cover_hide() {
    window.cover.style.display = 'none';
    window.cover.style.width="0px";
    window.cover.style.height="0px";
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



if (window.is_kindle) {
    setTimeout(save_screen_kindle, 2000); //刷新一次屏幕，清理 kindle 残影
    setInterval(save_screen_kindle, 3600000); //每小时再清理一次
}
else {
    setInterval(save_screen, 1800000); //保护屏幕像素，每过30分钟刷新一次屏幕
}