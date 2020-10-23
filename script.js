var titleCenter = window.innerWidth / 2 - 150;

const sections = ["#whoami", "#whatido", "#contacts"];

function getActiveSection() {
  return sections.includes(document.location.hash)
    ? document.location.hash
    : "#whoami";
}

document.querySelector(`${getActiveSection()}-menu-button`).click();

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.background =
    "linear-gradient(to bottom, white 30%, rgba(0,0,0,.3)) no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.margin = 0;
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

  document.getElementById(`${section}-section`).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  document.location.hash = section;
}
