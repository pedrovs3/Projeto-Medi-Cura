const targetScroll = 2200;
const backToTop = document.querySelector('.back-to-top')
console.log(backToTop)

window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  console.log(currentScroll)
  if (currentScroll >= targetScroll || currentScroll <= 1000) {
    backToTop.style.display = 'none';
  } else {
    backToTop.style.display = 'flex'
  }
}