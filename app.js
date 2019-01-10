// Dank souls game 
// Starting with classes 
class Character {
    constructor() {
        this.name = " "
        this.attack = 0 //attack()
        this.health = 0 //defence()
        this.souls = 0
        this.key = 0
    }

}


let roundCounter = 0
let villians = []
let heros = []
let createMage = function() {
    let mage = new Character
    mage.name = 'wizard'
    mage.attack = 8
    mage.health = 50
    heros.push(mage)
}
let createWarrior = function(){
    let warrior = new Character
    warrior.name = 'Champion'
    warrior.attack = 5
    warrior.health = 75
    warrior.key = 1
    heros.push(warrior)
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




let endBoss = function() {
    let witchBoss = new Character
    witchBoss.attack = 6
    witchBoss.health = 40
    witchBoss.name = 'Ardat Lili'
    witchBoss.souls = 3
    villians.push(witchBoss)
}
endBoss()

console.log(heros, villians)




let v1 = villians[0]
let v2 = villians[1]
let b1 = villians[2]




let attack = function(target) {
    if (target.health > 0) {
        target.health -= h1.attack
        $('.enemyGameStats').remove()
        $('.gameBar').append(`<li class="enemyGameStats">${target.name} has ${target.health}</li>`)
        if (target.health <= 0) {
            $('.enemyGameStats').remove()
            $('.soulsCount').remove()
            h1.souls = h1.souls + target.souls
            $('.gameBar').append(`<li class="soulsCount">You have ${h1.souls} souls</li>`)
            $('.soulsCount').replaceWith(`<li class="soulsCount">You have ${h1.souls} souls</li>`)
        }
    }
}

let bossHeroAttack = function(target, target2, bigboss) {
    if (target.health === 0 && target2.health === 0) {
        if (bigboss.health > 0) {
            $('.gameStats3').remove()
            bigboss.health -= (h1.attack - 2)
            $('.gameBar').append(`<li class="gameStats3">${bigboss.name} has ${bigboss.health}</li>`)


        }
    }

}
let bossAttack = function(bigboss) {
    if (bigboss.health > 0) {
        h1.health -= bigboss.attack
        $('.gameStats').remove()
        $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.health}</li>`)
    }
}


let skeletonAttack = function(target, target2) {
    if (target.health > 0 && target2.health > 0) {
        $('.gameStats').remove()
        h1.health -= target.attack
        h1.health -= target2.attack
        $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.health}</li>`)
    } else if (target.health > 0 || target2.health > 0) {
        $('.gameStats').remove()
        h1.health -= target.attack
        $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.health}</li>`)
    }
}

let roundCheck = function() {
    console.log(v1.health, v2.health, roundCounter)
    if (roundCounter === 0 && v1.health <= 0 && v2.health <= 0) {
        $('.gameStats').remove()
        villians.shift()
        villians.shift()
        villians.shift()
        upgradeChoices()
        console.log(villians)
        roundCounter += 1
        enemyGenerator()
        endBoss()
       

    }else if(h1.health <= 0){
        console.log('hello')
                setTimeout(function() {
                            $('.title').remove()
                            $('.hero').remove()
                            $('.final').replaceWith('<section class="playerDead"><h1 style="color:red;">You have Died</h1></section></body>')
                            $('.playerDead').append('<button id="restart">Restart</button>')
                            document.getElementById("restart").onclick = function() {
                                window.location.href = "./index.html"
                            }
                        }, 1000)}

}

let heal = function() {
    if(h1.souls ===2){
        $('.gameStats').remove()
        if(h1.key === 0){
            h1.health = 50
        } else {
            h1.health = 75
        }
        $('.gameBar').append(`<li class="gameStats">${h1.name} has been healed back to ${h1.health}`)
        h1.souls -=1
        $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.souls} souls left</li>`)
    } else {
        $('.soulsCount').remove()
        $('.gameBar').append(`<li class="soulsCount">${h1.name} does not have enough souls</li>`)    }
}

let AttackUpgrade = function() {
    if(h1.souls >=1){
        $('.gameStats').remove()
        h1.attack+= 2
        $('.gameBar').append(`<li class="gameStats">${h1.name} has increased attack to ${h1.attack}`)
        h1.souls -=1
        $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.souls} souls left</li>`)
    }else{
        $('.soulsCount').remove()
        $('.gameBar').append(`<li class="soulsCount">${h1.name} does not have enough souls</li>`)
    }

}



let gameStart = function() {
        if (roundCounter === 0) {
            h1 = heros[0]
            $('body').replaceWith('<body><section class="inside"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></section></body>')
                if(h1.key === 0){
                   $('.gameBar').after('<img src="./wizard.gif" class="hero">')
                } else {
                   $('.gameBar').after('<img src="./warrior.gif" class="hero">') 
                }
            $('.skeleton').click(function() {
                attack(v1)
                if (v1.health <= 0) {
                    $('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
                } else {
                    skeletonAttack(v1, v2)
                }
                roundCheck()
            })
            $('.skeleton2').click(function() {
                attack(v2)
                if (v2.health <= 0) {
                    $('.skeleton2').replaceWith('<img src="./fireDeath.gif" class="skeleton2">')
                } else {
                    skeletonAttack(v2, v1)
                }
                roundCheck()
            })
        } else {
            v1 = villians[0]
            v2 = villians[1]
            b1 = villians[2]
            h1 = heros[0]
            
            console.log($('.inside'))
            $('.inside').replaceWith('<body><section class="final"><h1 class="title">Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"><img src="./boss.gif" class="boss"></section></body>')
            if(h1.key === 0){
                   $('.final').after('<img src="./wizard.gif" class="hero">')
                } else {
                   $('.final').after('<img src="./warrior.gif" class="hero">') 
                }
            $('.skeleton').click(function() {
                attack(v1)
                if (v1.health <= 0) {
                    $('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
                } else {
                    bossAttack(b1)
                    skeletonAttack(v1, v2)
                    roundCheck()
                }
            })
            $('.skeleton2').click(function() {
                attack(v2)
                if (v2.health <= 0) {
                    $('.skeleton2').replaceWith('<img src="./fireDeath.gif" class="skeleton2">')
                } else {
                    bossAttack(b1)
                    skeletonAttack(v2, v1)
                    roundCheck()
                }
            })

            $('.boss').click(function() {
                    bossHeroAttack(v1, v1, b1)
                    if (b1.health <= 0) {
                        $('.boss').replaceWith('<img src="./fireDeath.gif" class="boss">')
                        $('.gameStats3').remove()
                        $('.soulsCount').remove()
                        h1.souls = h1.souls + b1.souls
                        $('.gameBar').append(`<li>You have ${h1.souls} souls</li>`)
                        setTimeout(function() {
                            $('.title').remove()
                            $('.gameBar').replaceWith('<h1 style="color:gold;">WINNER!!!!!!</h1><button id="restart">Restart</button>')
                            document.getElementById("restart").onclick = function() {
                                window.location.href = "./index.html"
                            }
                        }, 3000)
                        }else {
                        bossAttack(b1)
                        skeletonAttack(v1, v2)
                        roundCheck()

                    }
                })
            }

        }
    
            let upgradeChoices = function() {
                $('.gameBar').after('<button type="button" class="nxt">BOSS FIGHT</button>')
                $('.gameBar').after('<button type="button" class="atk">Attack++</button>')
                $('.gameBar').after('<button type="button" class="heal">Heal</button>')
                $('.nxt').click(gameStart)
                $('.atk').click(AttackUpgrade)
                $('.heal').click(heal)
            }

            $('.mage_start').click(function(){
                createMage()
                gameStart()
                })
            $('.warrior_start').click(function(){
                createWarrior()
                gameStart()
            })

            console.log(villians)
            console.log(roundCounter)
            