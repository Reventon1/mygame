let map = {
    x: 0,
    y: 0,
    // width: window.innerWidth,
    // height: window.innerHeight,
    width: 720,
    height: 560,
    color: '#f5f5f5'
}

let cube = {
    x: 0,
    y: 0,
    id: 'cube',
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'black',
    oldX: 0,
    oldY: 0 
}

let buffs = [];

let buff = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'green'
}

let scet = {
    x: 670,
    y: 510,
    width: 50,
    height: 50,
    id: 'scet',
    backgroundcolor: 'black'
    
}

// bots.push(bot);
renderMap(map);
renderCube(spawnCube(map, cube));

// renderBots(bots);

let tike = setInterval(timeTike, 3000);
renderScet(scet);