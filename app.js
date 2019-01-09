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
//let roundCounter = 0



let villians  = []
let heros = []
let createMage = function() {
    let hero = new Character
    hero.name = 'wizard'
    hero.attack = 8
    hero.health = 50
    heros.push(hero)
}


let skeletonKnight = function() {
    let enemy = new Character
    enemy.attack = 3
    enemy.health = 20
    enemy.name = 'Skeleton Knight'
    enemy.souls = 1
    villians.push(enemy)

}
let enemyGenerator = function() {
    skeletonKnight()
    skeletonKnight()

}
enemyGenerator()




let endBoss = function (){
    let witchBoss = new Character
	witchBoss.attack = 6
	witchBoss.health = 40
	witchBoss.name = 'Ardat Lili'
	witchBoss.souls = 3
    villians.push(witchBoss)			
}
endBoss()
createMage()
console.log(heros,villians)


//button selector which starts the game

let v1 = villians[0]
let v2 = villians[1]
let b1 = villians[2]
let h1 = heros[0]



let mageFireBall = function(target,target2) {
    if (target.health > 0) {
        target.health -= h1.attack
        $('.enemyGameStats').remove()
        $('.gameBar').append(`<li class="enemyGameStats">Skeleton knight 1 has ${target.health}</li>`)
        if (target.health <= 0) {
            $('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
            $('.enemyGameStats').remove()
            h1.souls = h1.souls + target.souls
            $('.gameBar').append(`<li class="soulsCount">You have ${h1.souls} souls</li>`)
            if (target.health <= 0 && target2.health <= 0 && roundCounter === 0) {
                $('.gameStats').remove()
                upgradeChoices()
                roundCounter+=1
            }
        } else {
            skeletonAttack()
            
        }
    }
}



/*

let mageFireBall2 = function() {
    if (enemy2.health > 0) {
        enemy2.health -= hero.attack
        $('.enemyGameStats2').remove()
        $('.gameBar').append(`<li class="enemyGameStats2">Skeleton knight 2 has ${enemy2.health}</li>`)
        if (enemy2.health <= 0) {
            $('.skeleton2').replaceWith('<img src="./fireDeath.gif" class="skeleton2">')
            $('.enemyGameStats2').remove()
            hero.souls = hero.souls + enemy2.souls
            $('.gameBar').append(`<li class="soulsCount">You have ${hero.souls} souls</li>`)
            if (enemy.health <= 0 && enemy2.health <= 0 && roundCounter === 0) {
                $('.gameStats').remove()
                upgradeChoices()
                roundCounter+=1
                

            }
        } else {
            skeletonAttack()
            
        }
    }
}
*/
let bossFireBall = function(target,target2,bigboss){
		if(target.health === 0 && target2.health === 0){
		if (bigboss.health > 0) {
				$('.gameStats3').remove()
		        bigboss.health -= (h1.attack-2)
		        $('.gameBar').append(`<li class="gameStats3">${bigboss.name} has ${bigboss.health}</li>`)
		        if (bigboss.health <= 0) {
		            $('.boss').replaceWith('<img src="./fireDeath.gif" class="boss">')
		            $('.gameStats3').remove()
		            $('.soulsCount').remove()
		            h1.souls = h1.souls + boss.souls
		            $('.gameBar').append(`<li>You have ${h1.souls} souls</li>`)
		            setTimeout(function(){
		            	$('.gameBar').replaceWith('<h1 style="color:gold;">WINNER!!!!!!</h1><button id="restart">Restart</button>')
		            		document.getElementById("restart").onclick = function() {
		            		window.location.href = "./index.html"
		            	}},3000)
		            	
		          }
		         }
             }else if( bigboss.health >0 && target.health >0 || target2.health> 0) {
                    skeletonAttack()
                    bossAttack()
		        } else {
		        	bossAttack()
		        }
		    

}
let bossAttack = function(){
	
	if (witchBoss.health > 0){
		hero.health -= witchBoss.attack 
		$('.gameStats').remove()
		$('.gameBar').append(`<li class="gameStats">${hero.name} has ${hero.health}</li>`)
}
}


let skeletonAttack = function() {
	if(enemy.health >0 && enemy2.health >0){
	$('.gameStats').remove()
	$('.gameStats2').remove()
    hero.health -= enemy.attack
    hero.health -= enemy2.attack
    $('.gameBar').append(`<li class="gameStats">${hero.name} has ${hero.health}</li>`)
    }else if(enemy.health >0 || enemy2.health >0){
    	$('.gameStats').remove()
		$('.gameStats2').remove()
        hero.health -= enemy.attack
        $('.gameBar').append(`<li class="gameStats">${hero.name} has ${hero.health}</li>`)
    } else {
    	$('.gameStats').remove()
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
    $('section').replaceWith('<body><section class="final"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"><img src="./boss.gif" class="boss"></section></body>')
    $('.skeleton').click(mageFireBall)
    $('.skeleton2').click(mageFireBall2)
    $('.boss').click(bossFireBall)
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



console.log(hero, enemy, enemy2,witchBoss)*/