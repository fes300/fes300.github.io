var titleCenter = window.innerWidth / 2 - 150;

document.addEventListener("DOMContentLoaded", event => {
  let h = screen.height + window.innerHeight;

  document.body.style.height = `${h}px`;
  document.body.style.background =
    "linear-gradient(to bottom, white 30%, rgba(0,0,0,.3)) no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.margin = 0;

  // set moving part
  document.querySelector(".moving-title").style.left = titleCenter + "px";
});

document.querySelectorAll(".menu_item").forEach(e =>
  e.addEventListener("click", e => {
    // add and remove classes
    let siblings = e.target.parentNode.children;
    Array.prototype.forEach.call(siblings, s => {
      s.classList.remove("active");
    });
    e.target.classList.add("active");
    // scroll
    let elPos = document.querySelector(
      `#${e.target.attributes.for.value.toLowerCase()}`
    );
    let scrollPos =
      window.pageYOffset + elPos.getBoundingClientRect().top - 150;
    window.scrollTo(0, scrollPos);
  })
);

window.onscroll = function(e) {
  const menuWidth = Math.min(0, -180 + pageYOffset * 2.6);
  document.querySelector(".menu").style.left = menuWidth + "px";

  const el = document.querySelector(".moving-title");
  left = Math.max(10, this.titleCenter - pageYOffset * 8);
  el.style.top = Math.min(-40 + pageYOffset * 0.5, 15) + "px";
  el.style.left = left + "px";
  const { innerHTML, width } = getText(left);
  el.innerHTML = innerHTML;
  el.style.width = width + "px";
};

function getText(left) {
  const howMuch = left / titleCenter;
  console.log(left, titleCenter, howMuch);

  if (howMuch > 0.7) {
    return { innerHTML: "federico sordillo", width: 300 };
  }
  if (howMuch > 0.5) {
    return { innerHTML: "federi sordill", width: 250 };
  }
  if (howMuch > 0.3) {
    return { innerHTML: "federi sordill", width: 250 };
  }
  return { innerHTML: "fes300", width: 120 };
}
