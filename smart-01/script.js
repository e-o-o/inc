var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function () {
  modal.style.display = "block";
};

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function () {
  modal.style.display = "block";
};

// ************************************************************************************************* //
/* ----------------main items -------------------------*/
document.title = dataStyle.page_title;
/* ----------------Images -----------------------------*/
document.querySelector("#main-logo").src = dataStyle.logo;
document.querySelector("#main-img").src = dataStyle.img;
/* ----------------texts -----------------------------*/
document.querySelector("#main-text").innerHTML = dataStyle.heading;
document.querySelector("#text").innerHTML = dataStyle.paragraph;
/* -----------------------------------------------------*/
document.querySelector("#main-background").style.backgroundImage = "url('"+dataStyle.background+"')";
document.querySelector("#main-background").style.backgroundColor = ""+dataStyle.background+"";
/* -------------------------------------------------------*/
document.querySelector("#main-text").color = dataStyle.heading_color;
document.querySelector("#text").color = dataStyle.paragraph_color;

// ************************************************************************************************* //