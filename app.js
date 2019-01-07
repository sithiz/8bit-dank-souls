// Dank souls game 
// Starting with classes 
class Character{
	constructor(){
		this.name = " "
		this.attack = 0//attack()
		this.health = 0//defence()
	}

}

let hero = new Character

let nameingFunction = function(){
	hero.name = prompt('hero name here')
}
let mageAttack = function(){
	hero.attack = 8
}
let mageDefence = function(){
	hero.defence = 50
}

nameingFunction()
mageAttack()
mageDefence()
console.log(hero.name,hero.attack,hero.defence)



























