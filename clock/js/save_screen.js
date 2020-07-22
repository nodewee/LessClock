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

    window.cover.style.display = 'inline';
}

function cover_hide() {

    window.cover.style.display = 'none';

}


function save_screen() {
    cover_show();
    cover_black();
    setTimeout(cover_red, 100);
    setTimeout(cover_yellow, 200);
    setTimeout(cover_blue, 300);
    setTimeout(cover_white, 400);
    setTimeout(cover_hide, 400);
}

