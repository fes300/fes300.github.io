var titleCenter = window.innerWidth / 2 - 150;

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.background =
    "linear-gradient(to bottom, white 30%, rgba(0,0,0,.3)) no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.margin = 0;

  // set first section active after one second
  setTimeout(() => document.querySelector(".section-button").click(), 1000);
});

function setActive(section, button) {
  var htmlSectionButtonsCollection = document.getElementsByClassName(
    "section-button"
  );

  for (var i = 0; i < htmlSectionButtonsCollection.length; i++) {
    htmlSectionButtonsCollection[i].classList.remove("active");
  }

  button.classList.add("active");

  var htmlSectionsCollection = document.getElementsByClassName("section");

  for (var i = 0; i < htmlSectionsCollection.length; i++) {
    htmlSectionsCollection[i].classList.remove("active");
  }

  document.getElementById(section).classList.add("active");
}
