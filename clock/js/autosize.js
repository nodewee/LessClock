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
    var time_fontsize = get_element_font_size(document.getElementById("time"));
    var hour_fontsize = get_element_font_size(document.getElementById("hour"));
    elem_minute = document.getElementById("minute");
    elem_second = document.getElementById("second");
    if (elem_minute) {
        var minute_fontsize = get_element_font_size(document.getElementById("minute"));
    }
    if (elem_second) {
        var second_fontsize = get_element_font_size(document.getElementById("second"));
    }

    //auto adjust time box font size
    var finished = false;
    var scale = 1.0;
    var count = 0;
    var max_width = document.getElementById("clock").clientWidth;
    console.log("max_width:" + max_width);
    var adjust_box = document.getElementById("time");
    while (true) {
        // count++;
        // console.log(count);
        // console.log("font size:"+get_element_font_size(document.getElementById("time")));
        // if (count>10){
        //     return;
        // }
        // console.log("scroll width:" + adjust_box.scrollWidth);
        // console.log("offset width:" + adjust_box.offsetWidth);
        // console.log("client width:" + adjust_box.clientWidth);


        if (adjust_box.scrollWidth > max_width) {
            scale = scale - 0.1;
            finished = true;
        }
        else {
            scale = scale + 0.1;
        }
        document.getElementById("time").style.fontSize = (time_fontsize * scale) + "px";
        document.getElementById("hour").style.fontSize = (hour_fontsize * scale) + "px";
        if (elem_minute != null) {
            elem_minute.style.fontSize = (minute_fontsize * scale) + "px";
        }
        if (elem_second != null) {
            elem_second.style.fontSize = (second_fontsize * scale) + "px";
        }

        if (finished) {
            break;
        }

    } // end while
    document.getElementById("time").style.width = max_width+"px";


    //auto adjust date box font size

    var date_fontsize = get_element_font_size(document.getElementById("date"));
    var month_fontsize = get_element_font_size(document.getElementById("month"));
    var day_fontsize = get_element_font_size(document.getElementById("day"));
    var week_fontsize = get_element_font_size(document.getElementById("week"));

    finished = false;
    scale = 1.0;
    max_width = document.getElementById("clock").clientWidth / 2;
    adjust_box = document.getElementById("date");

    while (true) {
        if (parseFloat(adjust_box.scrollWidth) > max_width) {
            scale = scale - 0.1;
            finished = true;
        }
        else {
            scale = scale + 0.1;
        }
        document.getElementById("date").style.fontSize = (date_fontsize * scale) + "px";
        document.getElementById("month").style.fontSize = (month_fontsize * scale) + "px";
        document.getElementById("day").style.fontSize = (day_fontsize * scale) + "px";
        document.getElementById("week").style.fontSize = (week_fontsize * scale) + "px";

        if (finished) {
            break;
        }
    } // end while
    document.getElementById("date").style.width = max_width+"px";

}

