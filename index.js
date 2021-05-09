'use strict';

let player = 'circle';

const symbolElm = document.querySelector('.icon_symbol');

const addSymbol = (event) => {
  if (player === 'circle') {
    event.target.classList.add('board__field--circle');
    player = 'cross';
    symbolElm.src = 'Piskvorky_rules/cross.svg';
  } else {
    event.target.classList.add('board__field--cross');
    player = 'circle';
    symbolElm.src = 'Piskvorky_rules/circle.svg';
  }
  event.target.disabled = true;

  if (isWinningMove(event.target)) {
    setTimeout(() => {
      if (player === 'cross') {
        confirm('Circle player is winner. New Game?');
        location.reload();
      } else {
        confirm('Cross player is winner. New game?');
        location.reload();
      }
    }, 200);
  }
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
  while (fieldIndex < fields.length && fieldElm !== fields[fieldIndex]) {
    fieldIndex += 1;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const isWinningMove = (fieldElm) => {
  const origin = getPosition(fieldElm);
  const symbol = getSymbol(fieldElm);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow += 1;
    i -= 1;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow += 1;
    i += 1;
  }

  if (inRow >= 5) {
    console.log('winner');
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn += 1;
    i -= 1;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn += 1;
    i += 1;
  }

  if (inColumn >= 5) {
    console.log('winner');
    return true;
  }
  console.log('smůla');
  return false;
};
