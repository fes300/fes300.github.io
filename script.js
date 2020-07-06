var titleCenter = window.innerWidth / 2 - 150;

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.background =
    "linear-gradient(to bottom, white 30%, rgba(0,0,0,.3)) no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.margin = 0;
});


function setActive(section) {
  var htmlCollection = document.getElementsByClassName("section")

  for (var i = 0; i < htmlCollection.length; i++) {
    htmlCollection[i].classList.remove("active")
  }

  document.getElementById(section).classList.add("active")
}
