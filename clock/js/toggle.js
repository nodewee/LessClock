/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

var LessClock = window.LessClock;

function hide_help(a) {
    document.getElementById('help').style.display = 'none';
}
function show_help() {
    document.getElementById('help').style.display = 'block';
}

function hide_about(a) {
    document.getElementById('about').style.display = 'none';
    hide_help();
}
function show_about() {
    document.getElementById('about').style.display = 'block';
    show_help();
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





LessClock.theme = "white";
function toggle_theme() {
    var elHTML = document.getElementsByTagName("html")[0];
    var elBody = document.getElementsByTagName("body")[0];
    var elFullscreen = document.getElementById("fullscreen_area");

    //toggle
    if (LessClock.theme == "white") {
        LessClock.theme = "black";
    }
    else {
        LessClock.theme = "white";
    }

    if (LessClock.theme == "white") {

        elHTML.classList.remove("black-theme");
        elBody.classList.remove("black-theme");
        elFullscreen.classList.remove("black-theme");

        elHTML.classList.add("white-theme");
        elBody.classList.add("white-theme");
        elFullscreen.classList.add("white-theme");

    }
    else {

        elHTML.classList.remove("white-theme");
        elBody.classList.remove("white-theme");
        elFullscreen.classList.remove("white-theme");

        elHTML.classList.add("black-theme");
        elBody.classList.add("black-theme");
        elFullscreen.classList.add("black-theme");
    }
}

document.addEventListener("click", function (event) {
    var tagname = event.target.tagName.toUpperCase();
    if (tagname == "HTML" || tagname == "BODY") {
        toggle_theme();
    }
    else {
        var elID = event.target.id.toLowerCase();
        if (elID == "fullscreen_area") {
            toggle_theme();
        }
    }
});




LessClock.clock_fonts = ['"DIN Condensed", "IBM 3270", "Rockwell", "OCR A Std", "Helvetica Neue", "Helvetica"', '"Righteous", cursive', '"Staatliches", cursive', '"Concert One", cursive']
LessClock.clock_font_index = 0;
LessClock.preload_font_index = 0;
function preload_fonts() {
    var el = document.getElementById("cover");
    var font = LessClock.clock_fonts[LessClock.preload_font_index];
    el.style.fontFamily = font;
    // show_msg("preload " + font);
    LessClock.preload_font_index++;
    if (LessClock.preload_font_index >= LessClock.clock_fonts.length) {
        return
    }
    else {
        setTimeout(preload_fonts, 1000);
    }
}
setTimeout(preload_fonts, 2000);


function next_clock_font() {
    LessClock.clock_font_index = LessClock.clock_font_index + 1;
    if (LessClock.clock_font_index >= LessClock.clock_fonts.length) {
        LessClock.clock_font_index = 0;
    }

    var font_value = LessClock.clock_fonts[LessClock.clock_font_index];
    document.getElementById("clock").style.fontFamily = font_value;
    show_msg("font: " + font_value, 1000);
    auto_size();
}



function next_time_format() {
    LessClock.time_format_index = LessClock.time_format_index + 1;
    if (LessClock.time_format_index >= LessClock.time_formats.length) {
        LessClock.time_format_index = 0;
    }

    show_msg(LessClock.time_formats[LessClock.time_format_index].toUpperCase(), 600);
    update_time();
    auto_size();
}


function update_time_offset() {
    var time_offset = document.getElementById('time_offset').value;
    if (time_offset < -16) {
        time_offset = -16;
    }
    else if (time_offset > 16) {
        time_offset = 16;
    }
    LessClock.time_offset = time_offset;
    update_time();
}