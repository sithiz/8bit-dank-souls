// Dank souls game 
// Starting with classes 
class Character {
    constructor() {
        this.name = " "
        this.attack = 0 //attack()
        this.health = 0 //defence()
        this.souls = 0
    }

}
let roundCounter = 0
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
    x.souls = 1
}
let enemyGenerator = function() {
    skeletonKnight(enemy)
    skeletonKnight(enemy2)

}
createMage(hero)
enemyGenerator()
let witchBoss = new Character

let endBoss = function (){
	witchBoss.attack = 6
	witchBoss.health = 40
	witchBoss.name = 'Ardat Lili'
	witchBoss.souls = 3
			
}


//button selector which starts the game

let mageFireBall = function() {
    if (enemy.health > 0) {
        enemy.health -= hero.attack
        $('.gameBar').append(`<li class="gameStats">Skeleton knight 1 has ${enemy.health}</li>`)
        if (enemy.health <= 0) {
            $('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
            $('.gameStats').remove()
            hero.souls = hero.souls + enemy.souls
            $('.gameBar').append(`<li>You have ${hero.souls} souls</li>`)
            if (enemy.health <= 0 && enemy2.health <= 0 && roundCounter === 0) {
                upgradeChoices()
                roundCounter+=1
            }
        } else {
            skeletonAttack()
            skeletonAttack()
        }
    }
}




let mageFireBall2 = function() {
    if (enemy2.health > 0) {
        enemy2.health -= hero.attack
        $('.gameBar').append(`<li class="gameStats2">Skeleton knight 2 has ${enemy2.health}</li>`)
        if (enemy2.health <= 0) {
            $('.skeleton2').replaceWith('<img src="./fireDeath.gif" class="skeleton2">')
            $('.gameStats2').remove()
            hero.souls = hero.souls + enemy2.souls
            $('.gameBar').append(`<li>You have ${hero.souls} souls</li>`)
            if (enemy.health <= 0 && enemy2.health <= 0 && roundCounter === 0) {
                upgradeChoices()
            }
        } else {
            skeletonAttack()
            skeletonAttack()
        }
    }
}

let skeletonAttack = function() {
    if (enemy.health > 0) {
        hero.health -= enemy.attack
        $('.gameBar').append(`<li class="gameStats">${hero.name} has ${hero.health}</li>`)
    }
}
let mageheal = function() {
    hero.health = 50
    console.log(hero.health)
}
let mageAttackUpgrade = function() {
    hero.attack = hero.attack + 2
    console.log(hero.attack)

}


let boss = function() {
    $('section').replaceWith('<body><section class="final"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></section></body>')
    $('.skeleton').click(mageFireBall)
    $('.skeleton2').click(mageFireBall2)
    enemyGenerator()

}

let mageGameStart = function() {
    $('body').replaceWith('<body><section class="inside"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></section></body>')
    $('.skeleton').click(mageFireBall)
    $('.skeleton2').click(mageFireBall2)
}

let upgradeChoices = function() {
    $('.gameBar').after('<button type="button" class="nxt">BOSS FIGHT</button>')
    $('.gameBar').after('<button type="button" class="atk">Attack++</button>')
    $('.gameBar').after('<button type="button" class="heal">Heal</button>')
    $('.nxt').click(boss)
    $('.atk').click(mageAttackUpgrade)
    $('.heal').click(mageheal)
}

$('.mage_start').click(mageGameStart)



console.log(hero, enemy, enemy2)