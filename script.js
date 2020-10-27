var titleCenter = window.innerWidth / 2 - 150;

const sections = ["#whoami", "#whatido", "#contacts"];

function getActiveSection() {
  return sections.includes(document.location.hash)
    ? document.location.hash
    : "#whoami";
}

document.querySelector(`${getActiveSection()}-menu-button`).click();

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

const title = document.getElementById("title")
const subtitle = document.getElementById("subtitle")

window.onscroll = () => {
  const top = window.pageYOffset
  const speed = 12
  const scrollPercentage = Math.max(0, top/innerHeight)
  const titleSize = Math.round(Math.max(0, 1 - scrollPercentage * speed) * 100) / 100

  title.style.fontSize = titleSize * 2 + "em"
  title.style.lineHeight = titleSize * 180 + "%"
  subtitle.style.fontSize = titleSize * 1.17 + "em"
  subtitle.style.lineHeight = titleSize * 180 + "%"
}
