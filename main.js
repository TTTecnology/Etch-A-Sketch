function drawGrid(n){ // n = tamanho da grade
  let grid = document.querySelector('#inner-frame-div');
  
  grid.innerHTML = "";

  for(let i=0;i<n;i++){
    let intergrid = document.createElement('div');
    for(let j=0;j<n;j++){
      let subgrid = document.createElement('div');
      subgrid.className = 'grid-el';
      intergrid.appendChild(subgrid);
    }
    grid.appendChild(intergrid);
  }

}

function activateColorMode(color, rainbow = false){
  if(rainbow) {
    var rainbowColors = ['red','orange','yellow','green','aqua','blue','purple'],
      counter = 0;
  }

  let changeColor = (e) => e.target.style.backgroundColor = color,
    grids = document.querySelectorAll('.grid-el'),
    iterateRainbow = () => {
      color = rainbowColors[counter];
      counter++;
      counter >= 7 ? counter = 0 : counter;
    };

  grids.forEach(n=>{
    n.removeEventListener('mouseenter', changeColor);
    n.addEventListener('mouseenter', changeColor);
    if (rainbow){
      n.removeEventListener('mouseleave', iterateRainbow);
      n.addEventListener('mouseleave', iterateRainbow);
    };
  });

}

function activateEraser(){
  activateColorMode('white');
}

function activateRainbow(){
  activateColorMode('white', true);
}

function clearAll(){
  let grids = document.querySelectorAll('.grid-el');
  grids.forEach(n=>n.style.backgroundColor='white');
}

function activateProgram(){
  let colorPicker = document.querySelector('#color-picker'),
    colorMode = document.querySelector('#color-mode'),
    eraser = document.querySelector('#eraser'),
    rainbow = document.querySelector('#rainbow'),
    clearAllBtn = document.querySelector('#clear-all'),
    newGrid = document.querySelector('#new-grid'),
    grid = document.querySelector('#inner-frame-div'),
    currentColor = "black";

  colorPicker.addEventListener('change', ()=> {
    currentColor = colorPicker.value;
    activateColorMode(currentColor);
  });

  colorMode.addEventListener('click', ()=> activateColorMode(currentColor));

  eraser.addEventListener('click', ()=> activateColorMode('white'));

  rainbow.addEventListener('click', ()=>activateColorMode('white', true));

  clearAllBtn.addEventListener('click', ()=> clearAll());

  newGrid.addEventListener('click', ()=>{
    let n = prompt('Insert the scale of the grid!');
    n = Number(n);
    drawGrid(n);
  })
}
