var test = document.createElement("button");
document.body.appendChild(test);
test.innerHTML = "Start";
test.onclick = kaasRoll

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
var b2 = document.getElementById('button2');
var b3 = document.getElementById('button3');

const maxPlayerHealth = 190;
var playerHealth = maxPlayerHealth;

var maxEnemyHealth;
var enemyHealth;

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
// createHealthBar("Test", "1100px", "200px", false);
// currentHealth -= 20;
// document.getElementById("healthPartTest").style.width = 100 / MaxHealth * currentHealth + "%";

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
        "css/images/undead-warrior-size.png",
        "css/images/undead-archer-size.png",
        "css/images/blaring-hunter.png",
        "css/images/undead-raptor-size.png",
        "css/images/boss-bear-size.png"
    ]
    var enemy = document.createElement('img');
    enemy.className = "enemy";
    if(firstBattle) {
        enemy.src = sight[0];
    } else {
        enemy.src = sight[Math.floor(Math.random() * 4)];
    }
    enemy.style.top = window.innerHeight / 2;
    enemy.style.left = window.innerWidth / 2;
    document.body.appendChild(enemy);
}
Math.floor(Math.random() * 3)
function Text(){
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
    document.getElementById("title").style.display = "none";
    document.getElementById("description").style.display = "none";
    document.getElementById("control").style.display = "none";
    document.getElementById("info").style.display = "none";
    background(1)
    if(firstRun) {
        firstRun = false
        enemy(true)

    } else {
        enemy(false);
    }
}

function highDamage() {
    playerHealth -= 130;
    document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";
}
function mediumDamage() {
    playerHealth -= 70;
    document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";

}
function lowDamage() {
    playerHealth -= 40;
    document.getElementById("healthPartTest").style.width = 100 / maxPlayerHealth * playerHealth + "%";

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