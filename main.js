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

let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#287233',
    border: '#000000'
}

let bots = [];

let bot = {
    id: 1,
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'orange'
}

bots.push(bot);

let buffs = [];

let buff = {
    id: 1,
    x: 220,
    y: 220,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'purple'
}

buffs.push(buff);

mapSize(map);

renderMap(map);

renderCube(spawnCube(map, cube));

renderBots(bots);

renderBuffs(buffs);

renderAmogus(spawnAmogus(map, cubeAmogus));

renderSUS(spawnSUS(map, cubeSUS));

renderKazahi(spawnKazahi(map, cubeKazahi));

renderAzerbaidjan(spawnAzerbaidjan(map, cubeAzerbaidjan));

renderOmerika(spawnOmerika(map, cubeOmerika));

renderJadernijaBomba(spawnJadernijaBomba(map, cubeJadernijaBomba));

let tick = setInterval(timeTick, 1000);

console.log(window);