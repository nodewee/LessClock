/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

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





window.theme = "white";
function toggle_theme() {
    var elHTML = document.getElementsByTagName("html")[0];
    var elBody = document.getElementsByTagName("body")[0];
    var elFullscreen = document.getElementById("fullscreen_area");

    //toggle
    if (window.theme == "white") {
        window.theme = "black";
    }
    else {
        window.theme = "white";
    }

    if (window.theme == "white") {

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




window.clock_fonts = ['"DIN Condensed", "IBM 3270", "Rockwell", "OCR A Std", "Helvetica Neue", "Helvetica"', '"Righteous", cursive', '"Staatliches", cursive', '"Concert One", cursive']
window.clock_font_index = 0;
window.preload_font_index = 0;
function preload_fonts() {
    var el = document.getElementById("cover");
    var font = window.clock_fonts[window.preload_font_index];
    el.style.fontFamily = font;
    // show_msg("preload " + font);
    window.preload_font_index++;
    if (window.preload_font_index >= window.clock_fonts.length) {
        return
    }
    else {
        setTimeout(preload_fonts, 1000);
    }
}
setTimeout(preload_fonts, 2000);


function next_clock_font() {
    window.clock_font_index = window.clock_font_index + 1;
    if (window.clock_font_index >= window.clock_fonts.length) {
        window.clock_font_index = 0;
    }

    var font_value = window.clock_fonts[window.clock_font_index];
    document.getElementById("clock").style.fontFamily = font_value;
    show_msg("font: " + font_value, 1000);
    auto_size();
}



function next_time_format() {
    window.time_format_index = window.time_format_index + 1;
    if (window.time_format_index >= window.time_formats.length) {
        window.time_format_index = 0;
    }

    show_msg(window.time_formats[window.time_format_index].toUpperCase(), 600);
    update_time();
    auto_size();
}