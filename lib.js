document.onkeydown = checkButton;

function checkButton(event) {

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;

    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;

    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (map.x < cube.x) {
            if ((cube.x - map.x) < cube.step) {
                cube.x -= cube.x - map.x;
            }

            else {
                cube.x -= cube.step;
            }
        }
    }

    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (map.y < cube.y) {
            if ((cube.y - map.y) < cube.step) {
                cube.y -= cube.y - map.y;
            }

            else {
                cube.y -= cube.step;
            }
        }
    }

    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cubeRight < mapRight) {
            if ((mapRight - cubeRight) < cube.step) {
                cube.x += mapRight - cubeRight;
        }

        else {
            cube.x += cube.step;
        }
    }
}

    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cubeBottom < mapBottom) {
            if ((mapBottom - cubeBottom) < cube.step) {
                cube.y += mapBottom - cubeBottom;
            }

            else {
                cube.y += cube.step;
                
            }
        }
    }


    renderCube(cube);
}



function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}



function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
    document.getElementById('map').style.border = '2px solid ' + map.border;
}



function mapSize(map) {

    let mapSizeHeightMin = 200;
    let mapSizeHeightMax = 964;

    let mapSizeWidthMin = 200;
    let mapSizeWidthMax = 1366;

    map.height = Math.round( Math.random() * (mapSizeHeightMax - mapSizeHeightMin)) + mapSizeHeightMin;
    map.width = Math.round( Math.random() * (mapSizeWidthMax - mapSizeWidthMin)) + mapSizeWidthMin;

    renderMap(map)
}

function spawnCube(map, cube) {

    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cube.height;


    cube.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cube.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cube;
}

function renderAmogus(cubeAmogus) {
    document.getElementById(cubeAmogus.id).style.top = cubeAmogus.y + 'px';
    document.getElementById(cubeAmogus.id).style.left = cubeAmogus.x + 'px';
    document.getElementById(cubeAmogus.id).style.width = cubeAmogus.width + 'px';
    document.getElementById(cubeAmogus.id).style.height = cubeAmogus.height + 'px';
    document.getElementById(cubeAmogus.id).style.transition = 'ease ' + cubeAmogus.trnstn + 's';
    document.getElementById(cubeAmogus.id).style.backgroundColor = cubeAmogus.color;
}

function spawnAmogus(map, cubeAmogus) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cubeAmogus.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cubeAmogus.height;


    cubeAmogus.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cubeAmogus.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cubeAmogus;
}

function renderSUS(cubeSUS) {
    document.getElementById(cubeSUS.id).style.top = cubeSUS.y + 'px';
    document.getElementById(cubeSUS.id).style.left = cubeSUS.x + 'px';
    document.getElementById(cubeSUS.id).style.width = cubeSUS.width + 'px';
    document.getElementById(cubeSUS.id).style.height = cubeSUS.height + 'px';
    document.getElementById(cubeSUS.id).style.transition = 'ease ' + cubeSUS.trnstn + 's';
    document.getElementById(cubeSUS.id).style.backgroundColor = cubeSUS.color;
}

function spawnSUS(map, cubeSUS) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cubeSUS.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cubeSUS.height;


    cubeSUS.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cubeSUS.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cubeSUS;
}

function renderKazahi(cubeKazahi) {
    document.getElementById(cubeKazahi.id).style.top = cubeKazahi.y + 'px';
    document.getElementById(cubeKazahi.id).style.left = cubeKazahi.x + 'px';
    document.getElementById(cubeKazahi.id).style.width = cubeKazahi.width + 'px';
    document.getElementById(cubeKazahi.id).style.height = cubeKazahi.height + 'px';
    document.getElementById(cubeKazahi.id).style.transition = 'ease ' + cubeKazahi.trnstn + 's';
    document.getElementById(cubeKazahi.id).style.backgroundColor = cubeKazahi.color;
}

function spawnKazahi(map, cubeKazahi) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cubeKazahi.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cubeKazahi.height;


    cubeKazahi.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cubeKazahi.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cubeKazahi;
}

function renderAzerbaidjan(cubeAzerbaidjan) {
    document.getElementById(cubeAzerbaidjan.id).style.top = cubeAzerbaidjan.y + 'px';
    document.getElementById(cubeAzerbaidjan.id).style.left = cubeAzerbaidjan.x + 'px';
    document.getElementById(cubeAzerbaidjan.id).style.width = cubeAzerbaidjan.width + 'px';
    document.getElementById(cubeAzerbaidjan.id).style.height = cubeAzerbaidjan.height + 'px';
    document.getElementById(cubeAzerbaidjan.id).style.transition = 'ease ' + cubeAzerbaidjan.trnstn + 's';
    document.getElementById(cubeAzerbaidjan.id).style.backgroundColor = cubeAzerbaidjan.color;
}

function spawnAzerbaidjan(map, cubeAzerbaidjan) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cubeAzerbaidjan.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cubeAzerbaidjan.height;


    cubeAzerbaidjan.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cubeAzerbaidjan.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cubeAzerbaidjan;
}

function renderOmerika(cubeOmerika) {
    document.getElementById(cubeOmerika.id).style.top = cubeOmerika.y + 'px';
    document.getElementById(cubeOmerika.id).style.left = cubeOmerika.x + 'px';
    document.getElementById(cubeOmerika.id).style.width = cubeOmerika.width + 'px';
    document.getElementById(cubeOmerika.id).style.height = cubeOmerika.height + 'px';
    document.getElementById(cubeOmerika.id).style.transition = 'ease ' + cubeOmerika.trnstn + 's';
    document.getElementById(cubeOmerika.id).style.backgroundColor = cubeOmerika.color;
}

function spawnOmerika(map, cubeOmerika) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cubeOmerika.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cubeOmerika.height;


    cubeOmerika.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cubeOmerika.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cubeOmerika;
}

function renderJadernijaBomba(cubeJadernijaBomba) {
    document.getElementById(cubeJadernijaBomba.id).style.top = cubeJadernijaBomba.y + 'px';
    document.getElementById(cubeJadernijaBomba.id).style.left = cubeJadernijaBomba.x + 'px';
    document.getElementById(cubeJadernijaBomba.id).style.width = cubeJadernijaBomba.width + 'px';
    document.getElementById(cubeJadernijaBomba.id).style.height = cubeJadernijaBomba.height + 'px';
    document.getElementById(cubeJadernijaBomba.id).style.transition = 'ease ' + cubeJadernijaBomba.trnstn + 's';
    document.getElementById(cubeJadernijaBomba.id).style.backgroundColor = cubeJadernijaBomba.color;
}

function spawnJadernijaBomba(map, cubeJadernijaBomba) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cubeJadernijaBomba.width;


    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cubeJadernijaBomba.height;


    cubeJadernijaBomba.x = Math.round(mapMinX + Math.random() * (mapMaxX - mapMinX));
    cubeJadernijaBomba.y = Math.round(mapMinY + Math.random() * (mapMaxY - mapMinY));


    return cubeJadernijaBomba;
}