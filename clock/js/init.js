/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

window.app_name = "LessClock"
window.version_serial = "0.3.2" //2020-10
window.is_kindle = false;

window.time_format_index = 1;
window.time_formats = ['24h', '24h2d', '12h', '12h2d'];

function get_device() {
    var ua = navigator.userAgent;
    if (ua.match(/(macintosh)/mi) != null) {
        window.device = "macOS";
    }
    else if (ua.match(/(iphone)/mi) != null) {
        window.device = "iPhone";
    }
    else if (ua.match(/(ipad)/mi) != null) {
        window.device = "iPad";
    }
    else if ((ua.match(/(x11)/im) != null) && (ua.match(/(linux)/im) != null)) {
        window.device = "Kindle";
        window.is_kindle = true;
    }
    else if (ua.match(/(windows)/mi) != null) {
        window.device = "Windows";
    }
    else {
        window.device = ua;
    }
    //micromessenger 微信

    // var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    return window.device;
}

get_device();

