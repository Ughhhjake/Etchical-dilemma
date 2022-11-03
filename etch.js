const selectButton = document.querySelector('#btnS');
selectButton.addEventListener('click', () => {
    gridSize = prompt("What size grid would you like to paint?");
    console.log(gridSize);
    createBoxes(gridSize);
});

const rainbowButton = document.querySelector('#btnR');
rainbowButton.addEventListener('click', () => {
    console.log("rainbow Button pushed.");
});

const greyButton = document.querySelector('#btnG');
greyButton.addEventListener('click', () => {
    console.log("greyscale Button pushed.");
});

const blackButton = document.querySelector('#btnB');
blackButton.addEventListener('click', () => {
    console.log("black Button pushed.");
});

const clearButton = document.querySelector('#btnC');
clearButton.addEventListener('click', () => {
    console.log("reset Button pushed.");
});

const container = document.querySelector('#container');

function createBoxes(numBox) {
  for (let i = 0; i < numBox; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < numBox; j++) {
      const square = document.createElement('div');
      square.className = 'box';
      row.appendChild(square);
    }
  }
}



