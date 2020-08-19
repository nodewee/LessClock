/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

function hide_about(a) {
    document.getElementById('about').style.display = 'none';
}
function show_about() {
    document.getElementById('about').style.display = 'block';
}

function hide_skill(skill_id) {
    document.getElementById(skill_id).style.display = 'none';
}
function show_skill(skill_id) {
    document.getElementById(skill_id).style.display = 'block';
}


function toggle_more() {
    var elem = document.getElementById("more");
    if (elem.style.display != "none") {
        elem.style.display = "none";
        document.getElementById("copyright").style.display = "none";
    }
    else {
        elem.style.display = "block";
        document.getElementById("copyright").style.display = "block";
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
