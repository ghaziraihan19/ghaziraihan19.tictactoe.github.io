// Variabel untuk menentukan giliran pemain (X atau O)
let currentPlayer = 'X';

// Variabel untuk menyimpan status papan permainan
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Fungsi untuk membuat langkah pemain pada papan permainan dengan animasi
function makeMove(row, col) {
    // Cek apakah sel sudah terisi atau tidak
    if (board[row][col] === '') {
        // Jika belum terisi, tambahkan simbol pemain ke sel tersebut
        board[row][col] = currentPlayer;
        // Tampilkan simbol pemain di sel tersebut dengan animasi
        let cell = document.getElementsByClassName('cell')[row * 3 + col];
        cell.innerText = currentPlayer;
        // Tambahkan kelas animasi
        cell.classList.add('animated');
        // Hapus kelas animasi setelah beberapa detik
        setTimeout(function() {
            cell.classList.remove('animated');
        }, 500);
        // Cek apakah pemain tersebut menang
        if (checkWinner(currentPlayer)) {
            // Jika menang, tampilkan pesan pemenang
            document.getElementById('winnerInfo').innerText = 'Player ' + currentPlayer + ' wins!';
            // Tandai sel-sel yang membentuk kemenangan
            markWinningCells(currentPlayer);
        } else if (checkDraw()) {
            // Cek apakah permainan seri
            document.getElementById('winnerInfo').innerText = 'Draw!';
        } else {
            // Jika belum, ganti giliran pemain
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            // Tampilkan giliran pemain yang sekarang
            document.getElementById('turnInfo').innerText = 'Player ' + currentPlayer + "'s turn";
        }
    }
}

// Fungsi untuk menandai sel-sel yang membentuk kemenangan
function markWinningCells(player) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === player) {
                document.getElementsByClassName('cell')[i * 3 + j].classList.add('winner');
            }
        }
    }
}

// Fungsi untuk mengecek apakah ada pemenang
function checkWinner(player) {
    // Mengecek baris
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }
    // Mengecek kolom
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }
    // Mengecek diagonal
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        return true;
    }
    return false;
}

// Fungsi untuk mengecek apakah permainan seri
function checkDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

// Fungsi untuk mereset permainan
function resetGame() {
    // Menghapus semua simbol dari papan permainan
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    // Mengatur ulang variabel dan informasi permainan
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.getElementById('winnerInfo').innerText = '';
    document.getElementById('turnInfo').innerText = 'Player X\'s turn';
}

// Fungsi untuk menghapus papan permainan
function clearBoard() {
    // Hapus semua simbol dari papan permainan
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    // Mengatur ulang variabel dan informasi permainan
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.getElementById('winnerInfo').innerText = '';
    document.getElementById('turnInfo').innerText = 'Player X\'s turn';
}

// Fungsi untuk kembali ke halaman utama
function returnToMain() {
    window.location.href = "game_info.html"; // Ubah "index.html" dengan nama file halaman utama Anda
}
