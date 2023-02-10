function gridGenerator(size = 16) {

    let eraseSketcher = document.getElementById('sketcher');
    eraseSketcher.innerHTML = "";

    for(let i = 0; i < (size * size); i++) {
        let newDiv = document.createElement('div');
        let reshapeGrid = 480 / size;
        newDiv.setAttribute('class', 'mini-div');
        newDiv.style.height = `${reshapeGrid}px`;
        newDiv.style.width = `${reshapeGrid}px`;
        console.log(size);
        
        
        let dashBoard = document.querySelector('#sketcher');
        dashBoard.appendChild(newDiv);
    }
    changeColor();
}

function changeColor() {
    let allDivs = document.querySelectorAll('.mini-div');
    allDivs.forEach(miniDiv => miniDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "purple";
    }));
}

function gridSizeChanger() {
    let sizeBar = document.getElementById('myRange');
    sizeBar.addEventListener('mouseup', (e) => {
        let newSize = e.target.value;
        gridGenerator(newSize);
    })
}


gridGenerator();
gridSizeChanger();



