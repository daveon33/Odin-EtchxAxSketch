function gridGenerator(size = 16) {
    for(let i = 0; i < (size * size); i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'mini-div');

        let reshapeGrid = size / 480;
        newDiv.setAttribute('height', `${reshapeGrid}`);
        newDiv.setAttribute('width', `${reshapeGrid}`);
        
        let dashBoard = document.querySelector('#sketcher');
        dashBoard.appendChild(newDiv);
    }
}

function changeColor() {
    let allDivs = document.querySelectorAll('.mini-div');
    allDivs.forEach(miniDiv => miniDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "purple";
    }));
}



gridGenerator();
changeColor();
