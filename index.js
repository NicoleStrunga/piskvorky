'use strict';

let player = 'circle';

const symbol = document.querySelector('.icon_symbol');

const addSymbol = (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    player = 'cross';
    symbol.src = 'Piskvorky_rules/cross.svg';
  } else {
    event.target.classList.add('board__field--cross');
    player = 'circle';
    symbol.src = 'Piskvorky_rules/circle.svg';
  }
  event.target.disabled = true;
};

const fieldElm = document.querySelectorAll('.policko');
for (let i = 0; i < fieldElm.length; i++) {
  fieldElm[i].addEventListener('click', addSymbol);
}
