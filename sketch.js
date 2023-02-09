function gridGenerator() {
    for(let i = 0; i < 256; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'mini-div');
        
        let dashBoard = document.querySelector('#grid-container');
        dashBoard.appendChild(newDiv);
    }
}

gridGenerator();

let allDivs = document.querySelectorAll('.mini-div');
allDivs.forEach(miniDiv => miniDiv.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "purple";
}));
