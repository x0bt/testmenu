const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const group = urlParams.get('group')
const admin = urlParams.get('admin')
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("group").innerHTML = "Целевая группа: " + group;
    document.getElementById("admin").innerHTML = "Админ: " + admin;
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