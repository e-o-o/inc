var modal = document.getElementById("myModal");
var body = document.getElementsByTagName("body")[0];
var btn = document.getElementById("myBtn");
btn.onclick = function () {
  modal.style.display = "block";
  body.setAttribute("style", "-webkit-backdrop-filter:none;backdrop-filter: none");

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