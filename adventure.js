var test = document.createElement("button");
document.body.appendChild(test);
test.innerHTML = "Start";
test.onclick = kaasRoll;

var inventory ={"key1" : false, "key2" : false};

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
function background(backgrOption){
    var ground = [
        "url('css/images/dungeon-entrance-size.png')",
        "url('css/images/dungeon-normal-room-size.png')"
    ];
    document.body.style.background = ground[backgrOption];
}
function enemy(firstBattle){
    var sight = [
        "undead-warrior-size",
        "undead-archer-size",
        "blaring-hunter",
        "undead-raptor-size",
        "boss-bear-size"
    ]
    var enemy = document.createElement('img');
    enemy.className = "enemy";
    if(firstBattle) {
        enemy.src = "css/images/" + sight[0] + ".png";
        var x = 0;
    } else {
        var x = Math.floor(Math.random() * 3);
        enemy.src = "css/images/" + sight[x] + ".png";
    }
    enemyName = x;
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
    info.innerText = 'Greetings player! Today I will explain how this game works, let us begin: on the mid left side of your screen will be your damage log, it will say how much damage was done to you and the enemy, on the bottom will be your damage buttons: damage buttons have different damage counters such as high doing high damage but with more chance to miss, medium doing medium damage with a lower chance of missing but higher than low, low doing low damage but with almost no chance of missing. then beside that are your items they display what you have found in the dungeon, top left will be your health, top right will be the enemies health! After each battle you have a chance of getting items. This is all you have to know, goodluck!'
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
}

function highDamage() {
    // document.getElementById("healthPartenemy).style.width = 100 / maxPlayerHealth * playerHealth + "%";
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 55){
        enemyHealth-=130;
    }else{
        enemyHealth-=0;
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth
}
function mediumDamage() {
    // document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 35){
        enemyHealth-=70;
    }else{
        enemyHealth-=0;
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth

}
function lowDamage() {
    // document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";
    var chanceToHit = getRandom(1,100)
    if(chanceToHit > 15){
        enemyHealth-=40;
    }else{
        enemyHealth-=0;
    }
    document.getElementById("healthPartEnemy").innerHTML = enemyHealth
}
function rangedDamage() {
    playerHealth -= 80;
    document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";
}
function dealDamage(enemy, amount) {
    if(enemy == "player") {
        playerHealth -= amount;
        document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";
    } else if(enemy == "enemy") {
        enemyHealth -= amount;
        document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";
    }
}


function getRandom(from, to){
    return(Math.floor((Math.random() * to) + from))
}