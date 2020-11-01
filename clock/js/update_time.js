/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */
var LessClock = window.LessClock;

LessClock.time_last_length = 0;

function hour24to12(hour) {
    var intHour = parseFloat(hour + '');
    if (intHour >= 12) {
        intHour = intHour - 12;
    }
    if (intHour == 0) {
        intHour = 12;
    }

    var strHour = intHour.toString();
    if (intHour < 10) {
        strHour = '0' + strHour;
    }

    return strHour
}


function update_time() {
    // moment().format('YYYY MM DD dddd a HH:mm:ss')
    // en:2020 10 28 Wednesday am 13:10:03
    // zh-cn:2020 10 28 星期三 上午 13:49:17

    var time_strs = moment().utcOffset(parseInt(LessClock.time_offset)).locale(LessClock.lang).format('YYYY MM DD dddd a HH:mm:ss').split(' ');

    var syear = time_strs[0];
    var smonth = time_strs[1];
    var sday = time_strs[2];

    var sweek = time_strs[3];
    var ampm = time_strs[4];

    var time1 = time_strs[5].split(':');

    var shour24 = time1[0];
    var shour = time1[0];
    var sminute = time1[1];
    var ssecond = time1[2];

    var cur_time_format = LessClock.time_formats[LessClock.time_format_index];
    if (cur_time_format.slice(0, 3) == "12h") {
        var shour = hour24to12(shour);

        // show AM/PM

        var el_hide;
        var el_show;
        if (parseFloat(shour24) < 12) {
            el_hide = document.getElementById("pm");
            el_show = document.getElementById("am");
        }
        else {
            el_hide = document.getElementById("am");
            el_show = document.getElementById("pm");
        }

        el_show.innerHTML = ampm;
        el_hide.innerHTML = "&nbsp;";

    }

    // 1 digit or 2 digits
    if (cur_time_format.slice(-2) != '2d') {
        shour = shour.replace(/^[0]{1}|$/g, '');
        sminute = sminute.replace(/^[0]{1}|$/g, '');
        ssecond = ssecond.replace(/^[0]{1}|$/g, '');
    }

    document.getElementById("hour").innerHTML = shour;
    elm = document.getElementById("minute");
    if (elm != null) { elm.innerHTML = sminute; }
    elm = document.getElementById("second");
    if (elm != null) { elm.innerHTML = ":" + ssecond; }
    document.getElementById("month").innerHTML = smonth;
    document.getElementById("day").innerHTML = sday;
    document.getElementById("week").innerHTML = sweek;



    // //every minute, auto_size
    // if (d.getSeconds() == 0) {
    //     auto_size();
    // }

};

function auto_refresh_time(frequency) {
    LessClock.clock_freq = frequency;

    switch (frequency) {
        case "minute":
            var elem_second = document.getElementById("second");
            elem_second.parentElement.removeChild(elem_second)
            break;
        case "hour":
            var elem_second = document.getElementById("second");
            elem_second.parentElement.removeChild(elem_second)
            var elem_minute = document.getElementById("minute");
            elem_minute.parentElement.removeChild(elem_minute)
            break;
        default:
            break;
    }

    update_time();

    function start_timer() {
        update_time();

        switch (frequency) {
            case "second":
                setInterval(update_time, 1000);
                break;
            case "30seconds":
                setInterval(update_time, 30000);
                break;
            case "hour":
                setInterval(update_time, 3600000);
                break;
            default: //minute
                setInterval(update_time, 60000);
                break;
        }
    }

    var delay_of_wait_to_start_timer = 1;
    switch (frequency) {
        case "second":
            delay_of_wait_to_start_timer = 1000 - new Date().getMilliseconds();
            break;
        case "hour":
            delay_of_wait_to_start_timer = ((60 - new Date().getMinutes()) * 60 + (60 - new Date().getSeconds())) * 1000 - new Date().getMilliseconds();
            break;
        default: //minute
            delay_of_wait_to_start_timer = (60 - new Date().getSeconds()) * 1000 - new Date().getMilliseconds();
            break;
    }

    setTimeout(start_timer, delay_of_wait_to_start_timer);
}





if (LessClock.is_kindle) {
    auto_refresh_time("minute");
} else {
    auto_refresh_time("second");
}

