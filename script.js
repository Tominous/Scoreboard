const panelWidth = 97; //100 - 1.5 - 1.5
var teamCount = 0;

function update() {
    if (teamCount == 0) return;
    $(".score-panel").css("width", (panelWidth / teamCount) + "%")
}

function add(tid, name, color, bgcolor, namecolor) {
    var main_div = document.createElement("div");
    main_div.classList.add("score-panel");
    main_div.id = tid;
    main_div.style.backgroundColor = bgcolor;

    var title_div = document.createElement("div");
    title_div.classList.add("score-title");
    title_div.innerHTML = name;
    title_div.style.color = namecolor;

    var score_div = document.createElement("div");
    score_div.classList.add("score-num");
    score_div.id = tid + "_score";
    score_div.innerHTML = "0";
    score_div.style.color = color;

    var btn_div = document.createElement("div");
    btn_div.classList.add("div-score-button");

    var btn_add = document.createElement("input");
    btn_add.type = "button";
    btn_add.classList.add("score-button");
    btn_add.classList.add("ui-mini");
    btn_add.classList.add("ui-button-inline");
    btn_add.classList.add("ui-button");
    btn_add.classList.add("ui-shadow");
    btn_add.classList.add("ui-corner-all");
    btn_add.classList.add("ui-widget");
    btn_add.classList.add("ui-button-inherit");
    var btn_sub = btn_add.cloneNode();
    var btn_clear = btn_add.cloneNode();
    btn_add.value = "+";
    btn_add.onclick = function () {
        mathAdd(score_div, 1);
    }
    btn_sub.value = "-";
    btn_sub.onclick = function () {
        mathAdd(score_div, -1);
    }
    btn_clear.value = "X";
    btn_clear.onclick = function () {
        score_div.innerHTML = "0";
    }
    btn_div.appendChild(btn_add);
    btn_div.appendChild(btn_sub);
    btn_div.appendChild(btn_clear);

    main_div.appendChild(title_div);
    main_div.appendChild(score_div);
    main_div.appendChild(btn_div);

    document.getElementById("score-zone").appendChild(main_div);
    teamCount += 1;
    update();
}

function reset() {
    document.getElementById("score-zone").innerHTML = "";
    teamCount = 0;
}

function mathAdd(scoredo, addBy) {
    var numin = parseInt(scoredo.innerHTML);
    numin += addBy;
    scoredo.innerHTML = "" + numin;
}

function edit_submit() {
    var teamname = $("#edit-team-name").val();
    var scorecolor = $("#edit-color").val();
    var bgcolor = $("#edit-bg-color").val();
    var teamnamecolor = $("#edit-name-color").val();
    add(teamname, teamname, scorecolor, bgcolor, teamnamecolor);
    $("#edit-team-name").val("");
    showPanel("panel_display");
}

function showAddMenu() {
    showPanel("panel_edit");
}

function showPanel(panel) {
    $(".panel-group").hide();
    $("#" + panel).show();
}

function showDisplay() {
    showPanel("panel_display");
}

function timerstartstop() {
    timer.run = !timer.run;
}

function showAlert(text) {
    $("#alert-div").text(text);
    showPanel("panel_alert");
}