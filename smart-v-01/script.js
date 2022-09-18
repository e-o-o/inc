var modal = document.getElementById("myModal");
var body = document.getElementsByTagName("body")[0];
var btn = document.getElementById("myBtn");
btn.onclick = function () {
  modal.style.display = "block";
  body.setAttribute("class", "no-backdrp translated");
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
document.querySelector("#main-background").style.backgroundColor = ""+dataStyle.background_color+"";
/* -------------------------------------------------------*/
document.querySelector("#main-text").style.color = dataStyle.heading_color;
document.querySelector("#text").style.color = dataStyle.paragraph_color;

// ************************************************************************************************* //