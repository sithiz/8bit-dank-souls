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

let createMage = function(x) {
    x.name = 'wizard'
    x.attack = 8
    x.health = 50
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
createMage(hero)
enemyGenerator()


//button selector which starts the game

let mageFireBall = function() {
    if (enemy.health > 0) {
        enemy.health-=hero.attack
        console.log(enemy.health)
    	if (enemy.health <=0){
        	$('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
        	if(enemy.health <= 0 && enemy2.health <= 0){
        		console.log('YOU WINN!!!')
        	}
        } 
    } 
}
let mageFireBall2 = function() {
    if (enemy2.health > 0) {
        enemy2.health-=hero.attack
        console.log(enemy2.health)
        if (enemy2.health <=0){
        	$('.skeleton2').replaceWith('<img src="./fireDeath.gif" class="skeleton2">')
        	if(enemy.health <= 0 && enemy2.health <= 0){
        		console.log('YOU WINN!!!')
        	}
        } 
    }
}

				let mageGameStart = function() {
				    $('body').replaceWith('<body><section class="inside"><h1>Time to do battle</h1><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></section></body>')
				    $('.skeleton').click(mageFireBall)
					$('.skeleton2').click(mageFireBall2)
				}

$('.mage_start').click(mageGameStart)

console.log(hero, enemy, enemy2)
