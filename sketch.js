let rainbowButton = false;
let stepBlack = false;

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

    if(rainbowButton == true) {
        let allDivs = document.querySelectorAll('.mini-div');
        allDivs.forEach(miniDiv => miniDiv.addEventListener('mouseover', (e) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor;
        }));
        
    } else if(rainbowButton == false && stepBlack == true) {
        let stepCounter = 1;
        let allDivs = document.querySelectorAll('.mini-div');
        allDivs.forEach(miniDiv => miniDiv.addEventListener('mouseover', (e) => {
            stepCounter++;
            let randomColor;

            if(stepCounter % 10 == 0) {
                randomColor = '000000';
                console.log(stepBlack);
            } else {
                randomColor = 'A020F0';
            }
            
            e.target.style.backgroundColor = "#" + randomColor;
        }));
    } else {
        let allDivs = document.querySelectorAll('.mini-div');
        allDivs.forEach(miniDiv => miniDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#A020F0';
        }));
    }
    
}

function gridSizeChanger() {
    let sizeBar = document.getElementById('myRange');
    sizeBar.addEventListener('mouseup', (e) => {
        let newSize = e.target.value;
        gridGenerator(newSize);
    })
    
}

let rainbowBtn = document.getElementById('rainbow');
rainbowBtn.addEventListener('click', () => {
    rainbowButton = true;
    let eraseSketcher = document.getElementById('sketcher');
    eraseSketcher.innerHTML = "";
    gridGenerator();
});

let blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', () => {
    rainbowButton = false;
    stepBlack = false;
    let eraseSketcher = document.getElementById('sketcher');
    eraseSketcher.innerHTML = "";
    gridGenerator();console.log(stepBlack);
}
);

let stepblackBtn = document.getElementById('step-black');
stepblackBtn.addEventListener('click', () => {
    rainbowButton = false;
    stepBlack = true;
    let eraseSketcher = document.getElementById('sketcher');
    eraseSketcher.innerHTML = "";
    gridGenerator();
}
);



gridGenerator();
gridSizeChanger();



