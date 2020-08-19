/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */

function hide_msg() {
    var elem_msg = document.getElementById("msg");
    elem_msg.innerHTML = "";
    elem_msg.style.display = "none";

}
hide_msg();


function show_msg(msg, auto_hide_delay) {
    var auto_hide_delay = (typeof auto_hide_delay !== 'undefined') ? auto_hide_delay : 0;

    var elem_msg = document.getElementById("msg");
    elem_msg.innerHTML = msg;
    elem_msg.style.display = "block";

    if (auto_hide_delay > 0) {
        setTimeout(hide_msg, auto_hide_delay);
    }
}
