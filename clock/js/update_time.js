

function zfill(num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}

function update_time() {
    var d = new Date();
    var smonth = d.getMonth() + 1;
    var sday = d.getDate();
    var shour = d.getHours();
    var sminute = zfill(d.getMinutes(), 2);
    var ssecond = zfill(d.getSeconds(), 2);

    var lang = navigator.language;
    var sweek = new Date().getDay();
    // console.log(lang.slice(0,3));
    if (lang.slice(0, 3) == "zh-") {
        switch (sweek) {
            case 1: sweek = "周一"; break;
            case 2: sweek = "周二"; break;
            case 3: sweek = "周三"; break;
            case 4: sweek = "周四"; break;
            case 5: sweek = "周五"; break;
            case 6: sweek = "周六"; break;
            case 0: sweek = "周日"; break;
            default: sweek = ""; break;
        }
    }
    else {
        switch (sweek) {
            case 1: sweek = "Monday"; break;
            case 2: sweek = "Tuesday"; break;
            case 3: sweek = "Wednesday"; break;
            case 4: sweek = "Thursday"; break;
            case 5: sweek = "Friday"; break;
            case 6: sweek = "Saturday"; break;
            case 0: sweek = "Sunday"; break;
            default: sweek = ""; break;
        }
    }



    document.getElementById("hour").innerHTML = shour;
    elm = document.getElementById("minute");
    if (elm!=null) { elm.innerHTML = sminute; }
    elm = document.getElementById("second");
    if (elm!=null) { elm.innerHTML = ":" + ssecond; }
    document.getElementById("month").innerHTML = smonth;
    document.getElementById("day").innerHTML = sday;
    document.getElementById("week").innerHTML = sweek;

};

function auto_refresh_time(frequency) {
    switch (frequency) {
        case "minute":
            var elem_second= document.getElementById("second");
            elem_second.parentElement.removeChild(elem_second)
            break;
        case "hour":
            var elem_second= document.getElementById("second");
            elem_second.parentElement.removeChild(elem_second)
            var elem_minute= document.getElementById("minute");
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