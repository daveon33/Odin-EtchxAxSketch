for(let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'mini-div');

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    newDiv.setAttribute("style", `background-color: #${randomColor};`);
    
    let dashBoard = document.querySelector('#grid-container');
    dashBoard.appendChild(newDiv);
}