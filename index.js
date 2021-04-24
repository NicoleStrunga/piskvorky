'use strict';

let player = 'circle';

const addSymbol = (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    player = 'cross';
  } else {
    event.target.classList.add('board__field--cross');
    player = 'circle';
  }
};

const fieldElm = document.querySelectorAll('.policko');
for (let i = 0; i < fieldElm.length; i++) {
  fieldElm[i].addEventListener('click', addSymbol);
}
