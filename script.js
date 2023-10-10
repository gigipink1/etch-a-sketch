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
}

generateDivs();