function generateDivs(num = 16) {

   for (i=0 ; i < num; i++) {
        const gridContainer = document.querySelector('.grid-container');
        const row = document.createElement('div');
        const cell = document.createElement('div');
        gridContainer.appendChild(row);
        row.classList.add('row');
        cell.classList.add('cell');
        for (t=0; t < num; t++) {
           row.appendChild(cell.cloneNode(1));
           console.log("cell made");
        }

        
        console.log('div made')
   }

   const hoveredCell = document.querySelectorAll('.cell');

hoveredCell.forEach((cell) => {
  cell.addEventListener('mouseenter', (cell) => {
   cell.target.style.backgroundColor = "#453f3d";
});
});
}
generateDivs();


const canvasSize = document.querySelector("#canvas");

canvasSize.addEventListener('input', replaceCanvas )

function replaceCanvas() {
   const gridContainer = document.querySelector('.grid-container')
   while (gridContainer.firstChild) {
      gridContainer.firstChild.remove();
   }
   generateDivs(canvasSize.value)

}
