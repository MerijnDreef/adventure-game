var test = document.createElement("button");
document.body.appendChild(test);
test.innerHTML = "Start";
test.onclick = kaasRoll

function kaasRoll(){
    background(0)
    Text(0)
}
function background(backgrOption){
    var ground = [
        "url('css/images/dungeon-entrance-size.png')"
    ];
    document.body.style.background = ground[backgrOption];
}
function Text(){
    var writing = document.createElement('h1');
    var written = document.createElement('p');
    
    writing.innerText = 'The quest for Liberty';
    writing.style.color = 'white';
    document.body.appendChild(writing);

    written.innerText = 'you are a warrior looking for a dungeon you have no party members because you do not want to lose them. So you are looking and looking you find a quest to slay a dungeon keeper who terrorises villages by plundering and murdering. His name? Bleeding Meteor noone knows how he looks, they only know that he is dangerous. As you go through the howling forest you see the dungeon, you enter through the stone doorway followed by a long hallway of torches it seems to be endless, but then you see an end,' + ' You are now in a room where an undead warrior awaits you, (you now go in to combat with the undead warrior - garuanteed drop key to next room)';
    written.style.color = 'white';
    document.body.appendChild(written);
}