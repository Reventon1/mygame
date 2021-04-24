let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let cubeAmogus = {
    id: 'cubeAmogus',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'yellow'
}

let cubeSUS = {
    id: 'cubeSUS',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'white'
}

let cubeKazahi = {
    id: 'cubeKazahi',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'brown'
}

let cubeAzerbaidjan = {
    id: 'cubeAzerbaidjan',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'blue'
}

let cubeOmerika = {
    id: 'cubeOmerika',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: '#3a75c4'
}

let cubeJadernijaBomba = {
    id: 'cubeJadernijaBomba',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'red'
}

let game = new Game();

game.initMap();


renderMap(game.getMap());
renderCube(spawnCube(game.getMap(), cube));
renderBots(game.getBots());
renderBuffs(game.getBuffs());

game.pushBot();
game.pushBuff();

mapSize(map);

renderAmogus(spawnAmogus(map, cubeAmogus));

renderSUS(spawnSUS(map, cubeSUS));

renderKazahi(spawnKazahi(map, cubeKazahi));

renderAzerbaidjan(spawnAzerbaidjan(map, cubeAzerbaidjan));

renderOmerika(spawnOmerika(map, cubeOmerika));

renderJadernijaBomba(spawnJadernijaBomba(map, cubeJadernijaBomba));

let tick = setInterval(timeTick, 1000);

console.log(window);