import "./styles.css";

var board, activePlayer, mark;

if (document.readyState !== "loading") {
  console.log("Document ready. Starting program..");
  initialize();
} else {
  console.log("Document not ready, waiting..");
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after a wait. Starting program..");
    initialize();
  });
}

function markTableCell(cell) {
  console.log(cell);
  var index = cell.id;
  var markNode;

  // Tarkistetaan, onko solu tyhjä
  if (board[index] === undefined) {
    // Lisätään pelaajan merkki valittuun soluun
    board[index] = mark;
    markNode = document.createTextNode(mark);
    document.getElementById(index).appendChild(markNode);
    // Tarkistetaan pelitilanne
    checkBoard();
    // Vaihdetaan pelivuoro
    changePlayer();
  }
}

function generateBoard(rowNum, colNum) {
  var newRow, newCol;
  board = [];
  var table = document.getElementById("board");

  // Lisätään rivit
  for (var i = 0; i < rowNum; i++) {
    newRow = document.createElement("tr");

    // Lisätään sarakkeet/solut
    for (var j = 0; j < colNum; j++) {
      board[i + "-" + j] = undefined;
      newCol = document.createElement("td");
      newCol.setAttribute("id", i + "-" + j);
      newCol.style.border = "thin solid";
      newCol.style.width = (100 / colNum).toString() + "%";
      newCol.style.height = (100 / rowNum).toString() + "%";
      newCol.style.textAlign = "center";
      newCol.onclick = function () {
        markTableCell(this);
      };
      newRow.appendChild(newCol);
    }

    table.appendChild(newRow);
    table.style.borderCollapse = "collapse";
    table.style.width = (colNum * 40).toString() + "px";
    table.style.height = (rowNum * 40).toString() + "px";
  }
}

function checkBoard() {
  /*
  for (var i = 0; i < rowNum; i++) {
    for (var j = 0; j < colNum; j++) {

    }
  }
*/
}

function changePlayer() {
  activePlayer = activePlayer === 1 ? 2 : 1;
  // Valitaan merkki vuorossa olevan pelaajan mukaan
  mark = activePlayer === 1 ? "X" : "O";
}

function initialize() {
  generateBoard(5, 5);
  activePlayer = 1;
  mark = "X";
}
