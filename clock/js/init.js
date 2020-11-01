/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */
window.LessClock = {};
var LessClock = window.LessClock;

LessClock.app_name = "LessClock"
LessClock.version_serial = "0.3.3" //2020-11
LessClock.is_kindle = false;

LessClock.time_format_index = 1;
LessClock.time_formats = ['24h', '24h2d', '12h', '12h2d'];
LessClock.time_offset = 8;

LessClock.lang = navigator.language || navigator.userLanguage;

function get_device() {
    var ua = navigator.userAgent;
    if (ua.match(/(macintosh)/mi) != null) {
        LessClock.device = "macOS";
    }
    else if (ua.match(/(iphone)/mi) != null) {
        LessClock.device = "iPhone";
    }
    else if (ua.match(/(ipad)/mi) != null) {
        LessClock.device = "iPad";
    }
    else if ((ua.match(/(x11)/im) != null) && (ua.match(/(linux)/im) != null)) {
        LessClock.device = "Kindle";
        LessClock.is_kindle = true;
    }
    else if (ua.match(/(windows)/mi) != null) {
        LessClock.device = "Windows";
    }
    else {
        LessClock.device = ua;
    }
    //micromessenger 微信

    // var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    return LessClock.device;
}

get_device();

