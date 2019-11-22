var test = document.createElement("button");
document.body.appendChild(test);
test.innerHTML = "start?";
test.onclick = kaasRoll

function kaasRoll(){
    background(0)
}
function background(backgrOption){
    var ground = [
        "url('css/images/dungeon-entrance.jpg')"
    ];
    document.body.style.background = ground[backgrOption];
}