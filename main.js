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

// let score = 0;

let tablo = {
    x: 720,
    y: 0,
    id: 'tablo',
    width: 50,
    height: 50,
    color: 'grey'
}

let score = 0;
    


// bots.push(bot);
renderMap(map);
renderCube(spawnCube(map, cube));
renderTablo(tablo);

// renderBots(bots);

let tike = setInterval(timeTike, 3000);
