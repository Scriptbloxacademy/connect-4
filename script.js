const ROWS = 6, COLS = 7;

let board = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(0)
);

const boardDiv = document.getElementById('board');

function render() {
    boardDiv.innerHTML = '';

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {

            const d = document.createElement('div');
            d.className = 'cell';

            if (board[r][c] === 1) d.classList.add('red');
            if (board[r][c] === 2) d.classList.add('yellow');

            d.onclick = () => {
                board[r][c] = (board[r][c] + 1) % 3;
                render();
            };

            boardDiv.appendChild(d);
        }
    }
}

render();

function resetBoard() {
    board = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(0)
    );

    render();

    document.getElementById('result').textContent =
        'Board reset.';
}

function analyze() {

    let best = 4; // center column

    document.getElementById('result').textContent =
        'Suggested move: Column ' +
        best +
        ' (center-control strategy)';
}