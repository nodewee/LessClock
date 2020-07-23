//Author: NodeWee (https://nodewee.github.io)
//Source Code: https://github.com/NodeWee/LessClock

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
    var base_fontsize = 14;
    var max_width = document.getElementById("clock").clientWidth;
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


    var scale = max_width / adjust_box.scrollWidth;

    document.getElementById("time").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("hour").style.fontSize = (base_fontsize * scale) + "px";
    if (elem_minute != null) {
        elem_minute.style.fontSize = (base_fontsize * scale) + "px";
    }
    if (elem_second != null) {
        elem_second.style.fontSize = (base_fontsize / 2 * scale) + "px";
    }

    document.getElementById("time").style.width = document.getElementById("time").scrollWidth + "px";


    //auto adjust date box font size
    var base_fontsize = 14;
    var max_width = document.getElementById("clock").clientWidth;
    var adjust_box = document.getElementById("date");

    adjust_box.style.width = "1px";
    document.getElementById("date").style.fontSize = base_fontsize + "px"
    document.getElementById("month").style.fontSize = base_fontsize + "px"
    document.getElementById("day").style.fontSize = base_fontsize + "px"
    document.getElementById("week").style.fontSize = base_fontsize + "px"

    var scale = max_width / adjust_box.scrollWidth/1.5;

    document.getElementById("date").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("month").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("day").style.fontSize = (base_fontsize * scale) + "px";
    document.getElementById("week").style.fontSize = (base_fontsize * scale * 0.8) + "px";

    // console.log(document.getElementById("date").scrollWidth)
    document.getElementById("date").style.width = document.getElementById("date").scrollWidth + "px";

}

