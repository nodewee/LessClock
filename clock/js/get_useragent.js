//Author: NodeWee (https://nodewee.github.io)
//Source Code: https://github.com/NodeWee/LessClock

function get_useragent() {
    var agent = navigator.userAgent;
    var ua = navigator.userAgent;
    if (ua.match(/(macintosh)/mi) != null) {
        agent = "macOS";
    }
    else if (ua.match(/(iphone)/mi) != null) {
        agent = "iPhone";
    }
    else if (ua.match(/(ipad)/mi) != null) {
        agent = "iPad";
    }
    else if ((ua.match(/(x11)/im) != null) && (ua.match(/(linux)/im) != null)) {
        agent = "Kindle";
    }
    else {
        agent = "Normal";
    }
    //micromessenger 微信

    // var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    return agent;
}