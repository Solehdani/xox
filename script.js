const cells = document.querySelectorAll('[data-cell]');
const statusText = document.getElementById('status');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    if (checkWin()) {
      statusText.textContent = `Pemenang: ${currentPlayer}`;
      cells.forEach(c => c.removeEventListener('click', () => {}));
    } else if ([...cells].every(c => c.textContent !== '')) {
      statusText.textContent = 'Seri!';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusText.textContent = `Giliran: ${currentPlayer}`;
    }
  });
});

function checkWin() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winPatterns.some(pattern => {
    const [a,b,c] = pattern;
    return cells[a].textContent === currentPlayer &&
           cells[b].textContent === currentPlayer &&
           cells[c].textContent === currentPlayer;
  });
}
