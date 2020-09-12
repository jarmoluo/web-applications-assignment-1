import "./styles.css";

var board, activePlayer;

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
  // Tarkistetaan, onko solu tyhjä
  // Tarkistetaan, kumman pelaajan vuoro
  // Lisätään soluun vuorossa olevan pelaajan merkki
  // Tarkistetaan, voitettiinko
}

function generateBoard() {
  var newRow, newCol;
  board = [];
  var table = document.getElementById("board");

  for (var i = 0; i < 5; i++) {
    board[i] = [];
    newRow = document.createElement("tr");

    for (var j = 0; j < 5; j++) {
      board[i][j] = undefined;
      newCol = document.createElement("td");
      newCol.setAttribute("id", i + "-" + j);
      newCol.style.border = "thin solid";
      newCol.style.textAlign = "center";
      newCol.onclick = function () {
        markTableCell(this);
      };
      newRow.appendChild(newCol);
    }

    table.appendChild(newRow);
    table.style.borderCollapse = "collapse";
    table.style.width = "200px";
    table.style.height = "200px";
  }
}

function initialize() {
  generateBoard();
  /*  
  if(table != null) {
    for(var i = 0; i < table.rows.length; i++) {
      for(var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function() {
          markTableCell(this);
        };
    }
  }
*/
}
