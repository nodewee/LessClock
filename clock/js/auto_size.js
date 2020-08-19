/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

// 考虑 IE 的兼容性
function getStyle(el) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, null);
    } else {
        return el.currentStyle;
    }
}


function get_element_font_size(elem) {
    var style = getStyle(elem).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    return fontSize;
}

function auto_size() {

    //auto adjust time box font size
    var base_fontsize = 10;
    var max_width = document.getElementById("clock").clientWidth;
    // var max_width = window.innerWidth;
    var adjust_box = document.getElementById("time");
    adjust_box.style.width = "1px";

    document.getElementById("time").style.fontSize = base_fontsize + "px"
    document.getElementById("hour").style.fontSize = base_fontsize + "px"
    elem_minute = document.getElementById("minute");
    elem_second = document.getElementById("second");
    if (elem_minute) {
        elem_minute.style.fontSize = base_fontsize + "px";
    }
    if (elem_second) {
        elem_second.style.fontSize = base_fontsize / 2 + "px";
    }


    var scale = max_width / adjust_box.scrollWidth + 10;

    while (true) {
        document.getElementById("time").style.fontSize = base_fontsize * scale + "px";
        document.getElementById("hour").style.fontSize = base_fontsize * scale + "px";
        if (elem_minute) {
            elem_minute.style.fontSize = (base_fontsize * scale) + "px";
        }
        if (elem_second) {
            elem_second.style.fontSize = (base_fontsize / 2 * scale) + "px";
        }

        // console.log(max_width)
        // console.log(adjust_box.scrollWidth)

        if ((adjust_box.scrollWidth - max_width) > 5) {
            scale = scale - (adjust_box.scrollWidth / max_width) / 2;
        }
        else if ((adjust_box.scrollWidth - max_width) >= 0) {
            scale = scale - 0.01;
        }
        else {
            break;
        }
    }


    document.getElementById("time").style.width = document.getElementById("time").scrollWidth + "px";



    //auto adjust date box font size
    var base_fontsize = 10;
    var max_width = document.getElementById("clock").clientWidth;
    var adjust_box = document.getElementById("date");

    adjust_box.style.width = "1px";
    document.getElementById("date").style.fontSize = base_fontsize + "px"
    document.getElementById("month").style.fontSize = base_fontsize + "px"
    document.getElementById("day").style.fontSize = base_fontsize + "px"
    document.getElementById("week").style.fontSize = base_fontsize + "px"

    var scale = max_width / adjust_box.scrollWidth / 1.5;

    document.getElementById("date").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("month").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("day").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("week").style.fontSize = (base_fontsize * scale * 0.8) + "px";

    // console.log(document.getElementById("date").scrollWidth)
    document.getElementById("date").style.width = document.getElementById("date").scrollWidth + "px";


}


window.onresize = function () { auto_size(); };

auto_size();