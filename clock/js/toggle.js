//Author: NodeWee (https://nodewee.github.io)
//Source Code: https://github.com/NodeWee/LessClock

function toggle_more() {
    var elem = document.getElementById("more");
    if (elem.style.display != "none") {
        elem.style.display = "none";
        document.getElementById("version").style.display = "none";
        document.getElementById("love").style.display = "none";
    }
    else {
        elem.style.display = "block";
        document.getElementById("version").style.display = "block";
        document.getElementById("love").style.display = "block";
    }
}

function toggle_theme() {
    var elem = document.getElementsByTagName("body")[0];
    if (elem.classList.contains("black-theme")) {
        elem.classList.remove("black-theme");
        elem.classList.add("white-theme");
        // elem.classList.replace("black-theme", "white-theme");
    }
    else {
        elem.classList.remove("white-theme");
        elem.classList.add("black-theme");
        // elem.classList.replace("white-theme", "black-theme");
    }
}
