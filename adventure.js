var test = document.createElement("button");
document.body.appendChild(test);
test.id = "button";
test.innerHTML = "Start";
test.onclick = kaasRoll;

var title = document.getElementById('title');
var text = document.getElementById('description');
var control = document.createElement('h1');
control.id = "control";
document.getElementById("game-container").appendChild(control);
control = document.getElementById("control");
var info = document.createElement('p');
info.id = "info";
document.getElementById("game-container").appendChild(info);
info = document.getElementById("info");
var b1 = document.getElementById('button1');
b1.onclick = highDamage;
var b2 = document.getElementById('button2');
b2.onclick = mediumDamage;
var b3 = document.getElementById('button3');
b3.onclick = lowDamage;

var enemyInfo = [];

b1.innerText = 'High';
b2.innerText = 'medium';
b3.innerText = 'low';
const maxPlayerHealth = 190;
var playerHealth = maxPlayerHealth;

var maxEnemyHealth;
var enemyHealth = null;
var enemyName;

function createHealthBar(id, locationX, locationY, alignRight) {
    var healthBar = document.createElement("div");
    var healthPart = document.createElement("div");

    healthPart.id = "healthPart" + id;
    healthBar.id = "healthBar" + id;

    healthBar.style.width = "300px";
    healthBar.style.height = "25px";
    healthBar.style.display = "inline-block"
    healthPart.style.width = "100%";
    healthPart.style.height = "25px";

    healthBar.style.position = "absolute";
    if(alignRight) {
        healthBar.style.right = locationX;
    } else {
        healthBar.style.left = locationX;
    }
    healthBar.style.top = locationY;


    healthBar.style.backgroundColor = "#00000080";
    healthPart.style.backgroundColor = "#DC143C";

    healthBar.appendChild(healthPart);
    document.body.appendChild(healthBar);
    
}
createHealthBar("Enemy", "60px", "10px", true);
createHealthBar("Player", "60px", "10px", false);

document.getElementById("healthPartPlayer").width = 100 / maxPlayerHealth * playerHealth
document.getElementById("healthBarPlayer").style.display = 'none';
document.getElementById("healthBarEnemy").style.display = 'none';
function kaasRoll(){
    background(0)
    Text(0)
}
document.getElementById("healthPartPlayer").innerText = playerHealth

function background(backgrOption){
    var ground = [
        "url('css/images/dungeon-entrance-size.png')",
        "url('css/images/dungeon-normal-room-size.png')",
        "url('css/images/dungeon-room-normal-1-size.png')",
        "url('css/images/dungeon-next-level-size.png')",
        "url('css/images/dungeon-room-lvl2-1-size.png')",
        "url('css/images/dungeon-room-lvl2-2-size.png')",
        "url('css/images/dungeon-room-lvl2-3-size.png')",
        "url('css/images/dungeon-room-lvl2-4-size.png')",
        "url('css/images/dungeon-room-lvl2-5-size.png')",
        "url('css/images/dungeon-gate-lvl2-size.png')",
    ];
    document.body.style.background = ground[backgrOption];
}
function enemy(firstBattle){
    var sight = [
        "undead-warrior-size", 160,
        "undead-archer-size", 90,
        "blaring-hunter-size", 110,
        "undead-raptor-size", 80,
        "boss-bear-size", 220
    ];
    var enemy = document.createElement('img');
    enemy.className = "enemy";
    if(firstBattle) {
        enemy.src = "css/images/" + sight[0] + ".png";
        var x = 0;
    } else {
        var x = Math.floor(Math.random() * 3);
        enemy.src = "css/images/" + sight[x * 2] + ".png";
    }
    enemyName = x;
    enemy.id = enemyName;
    enemyInfo[0] = sight[x * 2];
    enemyInfo[1] = sight[x * 2 + 1];

    enemyHealth = enemyInfo[1];
    document.getElementById("healthPartEnemy").innerText = enemyHealth;
    
    enemy.style.top = window.innerHeight / 2;
    enemy.style.left = window.innerWidth / 2;
    document.body.appendChild(enemy);
}
Math.floor(Math.random() * 3)
function Text(){
    document.getElementById("game-buttons").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    title.style.color = 'white';
    text.style.color = 'white';
    control.style.color = 'white';
    info.style.color = 'white';
    title.innerText = 'The quest for Liberty'
    text.innerText = 'you are a warrior looking for a dungeon you have no party members because you do not want to lose them. So you are looking and looking you find a quest to slay a dungeon keeper who terrorises villages by plundering and murdering. His name? Bleeding Meteor noone knows how he looks, they only know that he is dangerous.'+'As you go through the howling forest you see the dungeon, you enter through the stone doorway followed by a long hallway of torches it seems to be endless, but then you see an end, You are now in a room where an undead warrior awaits you'
    control.innerText = 'Game controls and info'
    info.innerText = 'Greetings player! Today I will explain how this game works, let us begin: on the bottom will be your damage buttons: damage buttons have different damage counters such as high doing high damage but with more chance to miss, medium doing medium damage with a lower chance of missing but higher than low, low doing low damage but with the lowest chance of missing. then beside that are your items they display what you have found in the dungeon, top left will be your health, top right will be the enemies health! After each battle you have a chance of getting items. This is all you have to know, goodluck!'
    test.onclick = entrance
}
 var firstRun = true
function entrance(){
    document.getElementById("game-buttons").style.display = "block";
    document.getElementById("title").style.display = "none";
    document.getElementById("description").style.display = "none";
    document.getElementById("control").style.display = "none";
    document.getElementById("info").style.display = "none";
    background(1)
    document.getElementById("healthBarPlayer").style.display = 'block';
    document.getElementById("healthBarEnemy").style.display = 'block';
    if(firstRun) {
        firstRun = false
        enemy(true)

    } else {
        enemy(false);
    }
    document.getElementById("button").style.display = "none";
    test.onclick = roomlvl1
}

function roomlvl1(){
    background(2)
    if(firstRun) {
        firstRun = false
        enemy(true)

    } else {
        enemy(false);
    }
    document.getElementById("button").style.display = "none";
    test.onclick = gatelvl1
}

function gatelvl1(){

}
function isEnemyDead() {
    if(enemyHealth <= 0) {
        document.getElementsByClassName("enemy")[0].remove();
        enemyHealth = 0;
        document.getElementById("button").style.display = "block";
    }
}
function highDamage() {
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 55){
        dealDamage("enemy", 130);
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth
    isEnemyDead();
}
function mediumDamage() {
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 35){
        dealDamage("enemy", 70);
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth
    isEnemyDead();

}
function lowDamage() {
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 15){
        dealDamage("enemy", 40);
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth
    isEnemyDead();
}
function rangedDamage() {
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 40){
        dealDamage("player", 80);
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth
    isEnemyDead();
}
function dealDamage(enemy, amount) {
    if(enemy == "player") {
        playerHealth -= amount;
        document.getElementById("healthPartPlayer").style.width = 100 / maxPlayerHealth * playerHealth + "%";
    } else if(enemy == "enemy") {
        if(enemyHealth - amount > 0) {
            enemyHealth -= amount;
            document.getElementById("healthPartEnemy").style.width = 100 / maxPlayerHealth * playerHealth + "%";
        } else {
            enemyHealth = 0;
            document.getElementsByClassName("enemy")[0].remove();
            document.getElementById("button").style.display = "block";
        }
    }
}


function getRandom(from, to){
    return(Math.floor((Math.random() * to) + from))
}



var keyInv = document.createElement("div");
keyInv.id = "keyBag";
document.body.appendChild(keyInv);
keyInv = document.getElementById("keyBag");
document.getElementById("inventoryItem").remove();

var key = ["key-of-summoning-size", "key-of-horror-size", "key-of-your-eternal-reward-size"];
function keys(namekey){
    var newKey = document.createElement("img");
    newKey.className = "key";
    newKey.src = "css/images/" + namekey + ".png";
    document.getElementById("keyBag").appendChild(newKey);
}
keys(key[0]);
keys(key[1]);
keys(key[2]);

















// var items = []

// items.push("key1")


// //door
// for (let index = 0; index < items.length; index++) {
//     if(items[index] == "key1"){

//     }
    
// }



