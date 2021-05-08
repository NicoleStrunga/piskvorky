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
  isWinningMove(event.target);
};

const fieldElm = document.querySelectorAll('.policko');
for (let i = 0; i < fieldElm.length; i++) {
  fieldElm[i].addEventListener('click', addSymbol);
}

const getSymbol = (fieldElm) => {
  if (fieldElm.classList.contains('board__field--circle')) {
    return 'circle';
  } else if (fieldElm.classList.contains('board__field--cross')) {
    return 'cross';
  }
};

const boardSize = 10;
const fields = document.querySelectorAll('.policko');

const getField = (row, column) => fieldElm[row * boardSize + column];

const getPosition = (fieldElm) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && btnsElm !== fields[fieldIndex]) {
    fieldIndex += 1;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
