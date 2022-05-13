const list = document.querySelector('#cards');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let count = 2;
list.children[count - 1].classList.add('maior');

prev.addEventListener('click', function () {
  console.log(count)
  count = count - 1 ;
  list.children[count].classList.add('cards-visiveis');

  if (count < 2) {
    list.children[count].classList.remove('cards-visiveis');
  }
});

next.addEventListener('click', function () {
  count = count + 1;
  // console.log(count)
  // console.log(list.children[count]);
  list.children[count].classList.add('cards-visiveis');
  list.children[count - 1].classList.add('maior');

  if (count > 2) {  
    list.children[count - 2].classList.remove('maior');
    list.children[count - 3].classList.remove('cards-visiveis');
  }
});


