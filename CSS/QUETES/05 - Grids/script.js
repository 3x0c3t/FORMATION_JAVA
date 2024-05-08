// Function to generate the grid display and CSS code
function generateGrid() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const gap = parseInt(document.getElementById('gap').value);
    
    const gridDisplay = document.getElementById('gridDisplay');
    gridDisplay.innerHTML = '';
  
    // Generate rows
    for (let i = 0; i < rows; i++) {
      // Create a row element
      const row = document.createElement('div');
      row.className = 'grid-row';
      
      // Generate columns for each row
      for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div');
        gridItem.textContent = `${i + 1}, ${j + 1}`;
        gridItem.style.backgroundColor = randomColor();
        row.appendChild(gridItem);
      }
  
      // Add the row to the grid display
      gridDisplay.appendChild(row);
    }
  
    // Generate and display the CSS code
    const codeDisplay = document.getElementById('codeDisplay');
    codeDisplay.textContent = generateCSS(rows, columns, gap);
  }
  
  // Function to generate the CSS code for the grid
  function generateCSS(rows, columns, gap) {
    return `
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${rows}, 1fr);
      gap: ${gap}px;
    `;
  }
  
  // Function to generate a random color
  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Event listener for input changes
  document.getElementById('rows').addEventListener('input', generateGrid);
  document.getElementById('columns').addEventListener('input', generateGrid);
  document.getElementById('gap').addEventListener('input', generateGrid);
  
  // Initial grid generation on page load
  generateGrid();
  