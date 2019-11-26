var test = document.createElement("button");
document.body.appendChild(test);
test.innerHTML = "Start";
test.onclick = kaasRoll

var title = document.getElementById('title');
var text = document.getElementById('description');

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
        "url('css/images/undead-archer-size.png')",
        "url('css/images/blaring-hunter.png')",
        "url('css/images/undead-raptor-size.png')",
        "url('css/images/boss-bear.png')"
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
    title.innerText = 'The quest for Liberty'
    text.innerText = 'you are a warrior looking for a dungeon you have no party members because you do not want to lose them. So you are looking and looking you find a quest to slay a dungeon keeper who terrorises villages by plundering and murdering. His name? Bleeding Meteor noone knows how he looks, they only know that he is dangerous.'+'As you go through the howling forest you see the dungeon, you enter through the stone doorway followed by a long hallway of torches it seems to be endless, but then you see an end, You are now in a room where an undead warrior awaits you'
    test.onclick = entrance
}
function entrance(){
    document.getElementById("title").style.display = "none";
    document.getElementById("description").style.display = "none";
    background(1)
    enemy(true)
}