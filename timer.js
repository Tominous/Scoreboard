var timer = {};
timer.time = 0;
timer.break = 0;
timer.fontsize = 120;
timer.run = false;

timer.increaseFontSize = function (addBy) {
    timer.fontsize += addBy;
    $("#clock_display").css("font-size", timer.fontsize + "px");
}

setInterval(function () { //TICK WORKER
    if (!timer.run) return
    if (timer.time <= 0) {
        timer.run = false;
        showAlert($("#game_end_msg").val());
        return;
    }
    if (timer.break > 0) {
        if (timer.time == timer.break) {
            timer.run = false;
            timer.break = 0;
            showAlert($("#timer_break_msg").val());
            $("#timer_break").val("0:00:0");
            return;
        }
    }
    timer.time -= 1;
    timer.updateDisplay();
}, 100);

timer.updateDisplay = function () {
    var min = parseInt(timer.time / 600);
    var sec = parseInt((timer.time % 600) / 10);
    var mil = timer.time % 10;
    $("#clock_display").text(min + ":" + ("00" + sec).slice(-2) + "." + ("00" + mil).slice(-1));
}

function parseTime(min, sec, mil) {
    return (600 * min) + (10 * sec) + mil;
}

timer.update = function () {
    var timeinput = $("#timer_time").val().split(":");
    timer.time = parseTime(parseInt(timeinput[0]), parseInt(timeinput[1]), parseInt(timeinput[2]));
    var txtbk = $("#timer_break").val();
    if (txtbk.indexOf(":") != 0) {
        timeinput = txtbk.split(":");
        timer.break = parseTime(parseInt(timeinput[0]), parseInt(timeinput[1]), parseInt(timeinput[2]))
    }
    timer.updateDisplay()
    timer.run = false;
    showPanel("panel_display");
}

timer.ui = function () {
    showPanel("panel_timer");
}