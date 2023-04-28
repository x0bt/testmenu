const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const group = urlParams.get('group')
const admin = urlParams.get('admin')
const slow_mode = urlParams.get('sm')
const warn_limit = urlParams.get('wl')
const warn_period = urlParams.get('wp')
const warn_restriction = urlParams.get('wr')
const autokick_muted = urlParams.get('am')
const min_reg_time = urlParams.get('mrt')
const bots_enabled = urlParams.get('be')
const link_enabled = urlParams.get('le')
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("group").innerHTML = "Целевая группа: " + group;
    document.getElementById("admin").innerHTML = "Админ: " + admin;
    document.getElementById("slowmode").innerHTML = "· медленный режим: " + slow_mode;
    document.getElementById("warnlimit").innerHTML = "· варн-лимит: " + warn_limit;
    document.getElementById("warnperiod").innerHTML = "· варн-период: " + warn_period;
    document.getElementById("warnrestriction").innerHTML = "· варн-наказание: " + warn_restriction;
    document.getElementById("autokickmuted").innerHTML = "· автокик замученных: " + autokick_muted;
    document.getElementById("minregtime").innerHTML = "· минрег: " + min_reg_time;
    document.getElementById("botsenabled").innerHTML = "· боты: " + bots_enabled;
    document.getElementById("linkenabled").innerHTML = "· ссылки: " + link_enabled;
  });


function changeTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("nav-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 