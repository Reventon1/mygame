document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 100,
    color: 'black'

}

function checkButton(event) {

    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        cube.y -= cube.step;
        renderCube(cube);
    }

    else if (event.keyCode === 39) {
        console.log("ArrowRight");
        cube.y += cube.step;
        renderCube(cube);
    }

    else if (event.keyCode === 38) {
        console.log("ArrowUp");
        cube.x -= cube.step;
        renderCube(cube);
    }

    else if (event.keyCode === 40) {
        console.log("ArrowDown");
        cube.x += cube.step;
        renderCube(cube);
    }
}

function renderCube (cube) {
    document.getElementById("cube").style.top = cube.x + 'px';
    document.getElementById("cube").style.left = cube.y + 'px';
    document.getElementById("cube").style.width = cube.width + 'px';
    document.getElementById("cube").style.height = cube.height + 'px';
    document.getElementById("cube").style.transition = 'ease' + cube.trnstn + 's';
    document.getElementById("cube").style.backgroundColor = cube.color;
}

renderCube(cube);