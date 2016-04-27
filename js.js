'use strict';

let menu_items = document.querySelectorAll('.menu-item');

Array.prototype.forEach.call(menu_items, mi=>{
  mi.addEventListener('click', (e)=>{
    Array.prototype.forEach.call(menu_items, mi=>{
      mi.classList.remove('active');
    });
    e.target.classList.add('active');
    let item = document.querySelector(`#${e.target.getAttribute('target')}`),
    children = item.parentNode.children;
    Array.prototype.forEach.call(children, i=>{
      i.classList.remove('show-item');
      i.classList.remove('first-item');
    });
    item.classList.add('show-item');
  })
})


document.addEventListener("DOMContentLoaded", function(event) { 
  let h = screen.height + window.innerHeight;
  console.log(h);
  document.body.style.height = `${h}px`;
  document.body.style.background = 'linear-gradient(to bottom, white, black) no-repeat';
  document.body.style.backgroundAttachment = 'fixed'; 
  document.body.style.margin = 0;
});