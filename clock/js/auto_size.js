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

    var window_width = document.getElementsByTagName("body")[0].clientWidth;
    if (window.time_formats[window.time_format_index].slice(0, 3) == "12h") {
        var ampm_maxwidth = window_width * 0.12 - 5;
        var hms_maxwidth = window_width * 0.88 - 5;
    }
    else {
        var hms_maxwidth = window_width - 5;
    }

    var elTime = document.getElementById("time");
    var elAMPM = document.getElementById("ampm");
    var elAM = document.getElementById("am");
    var elPM = document.getElementById("pm");
    var elHMS = document.getElementById("hms");
    var elHour = document.getElementById("hour");
    var elMinute = document.getElementById("minute");
    var elSecond = document.getElementById("second");


    // if (window.time_formats[window.time_format_index].slice(-2) == '2d') {
    //     elHour.innerHTML = "00";
    // }
    // var sminute = elMinute.innerHTML;
    var ssecond;
    // elMinute.innerHTML = "00";
    if (elSecond) {
        ssecond = elSecond.innerHTML;
        elSecond.innerHTML = ":00";
    }


    var calc_count = 0; //计数，避免死循环
    var start_fontsize = 5;

    if (window.time_formats[window.time_format_index].slice(0, 3) == "12h") {
        elAMPM.style.display = "block";
        // ampm width
        font_size = start_fontsize;
        elAMPM.style.fontSize = font_size + "px";
        var scale = ampm_maxwidth / elAMPM.scrollWidth;
        font_size = font_size * scale;
        elAMPM.style.fontSize = font_size + "px";
        while (true) {
            calc_count++;
            if (calc_count > 20) {
                break;
            }
            var gap = ampm_maxwidth - elAMPM.scrollWidth;
            var add_num = Math.abs(gap / 2);

            if (gap > 10) {
                font_size = font_size + add_num;
            }
            else if (gap < 1) {
                font_size = font_size - add_num;
            }
            else {
                break
            }

            // font_size = parseInt(font_size * scale);
            elAMPM.style.fontSize = font_size + "px";
        }
    } else {
        elAMPM.style.display = "none";
    }



    calc_count = 0;
    font_size = start_fontsize;
    elHMS.style.fontSize = font_size + "px";
    var scale = hms_maxwidth / elHMS.scrollWidth;
    font_size = font_size * scale;
    elHMS.style.fontSize = font_size + "px";

    while (true) {
        calc_count++;
        if (calc_count > 20) {
            break;
        }

        var gap = hms_maxwidth - elHMS.scrollWidth;
        var add_num = Math.abs(gap / 2);
        // console.log("HMS gap" + gap);

        if (gap > 10) {
            font_size = font_size + add_num;
        }
        else if (gap < 1) {
            font_size = font_size - add_num;
        }
        else {
            break
        }

        // font_size = parseInt(font_size * scale);
        elHMS.style.fontSize = font_size + "px";
        if (elSecond) {
            elSecond.style.fontSize = font_size / 2 + "px";
        }
    }

    elPM.style.lineHeight = elAM.style.lineHeight = elHMS.clientHeight / 2 - 2 + "px";

    elDate = document.getElementById("date");
    font_size = font_size / 3;
    // if (font_size < 5) {
    //     font_size = 5;
    // }
    elDate.style.fontSize = font_size + "px";
    elDate.style.width = elDate.scrollWidth + "px";


    elTime.style.width = window_width + "px";

    // elMinute.innerHTML = sminute;
    if (ssecond) {
        elSecond.innerHTML = ssecond;
    }
}


window.onresize = function () { auto_size(); };

auto_size();