// Dank souls game 
// Starting with classes 
class Character {
    constructor() {
        this.name = " "
        this.attack = 0 //attack()
        this.health = 0 //defence()
    }

}

let hero = new Character

let createMage = function() {
    hero.name = prompt('hero name here')
    hero.attack = 8
    hero.health = 50
}

let enemy = new Character
let enemy2 = new Character

let skeletonKnight = function(x) {
    x.attack = 3
    x.health = 20
    x.name = 'Skeleton Knight'
}
let enemyGenerator = function() {
	skeletonKnight(enemy)
	skeletonKnight(enemy2)

}


//button selector which starts the game

let mageFireBall = function() {
    if (enemy.health > 0) {
        enemy.health = enemy.health - hero.attack
        console.log(enemy.health)
    }
}


let mageGameStart = function() {
    createMage()
    enemyGenerator()
    $('body').replaceWith('<body><section class="inside"><h1>Time to do battle<button type="button" id="attack">Attack</button><button type="button" id="retreat">Retreat</button></h1><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></body>')
}

$('.mage_start').click(mageGameStart)
console.log(hero, enemy, enemy2)
$('#attack').click(mageFireBall)