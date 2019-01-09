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
let villians = []
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




let endBoss = function() {
    let witchBoss = new Character
    witchBoss.attack = 6
    witchBoss.health = 40
    witchBoss.name = 'Ardat Lili'
    witchBoss.souls = 3
    villians.push(witchBoss)
}
endBoss()
createMage()
console.log(heros, villians)




let v1 = villians[0]
let v2 = villians[1]
let b1 = villians[2]
let h1 = heros[0]



let mageFireBall = function(target) {
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

let bossFireBall = function(target, target2, bigboss) {
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
    console.log('here')
    console.log(v1.health, v2.health, roundCounter)
    if (roundCounter === 0 && v1.health < 0 && v2.health < 0) {
        console.log('there')
        $('.gameStats').remove()
        villians.shift()
        villians.shift()
        villians.shift()
        upgradeChoices()
        roundCounter += 1
        enemyGenerator()
        endBoss()
        console.log(villians)

    }
}

let mageheal = function() {
    h1.health = 50
    console.log(h1.health)
}
let mageAttackUpgrade = function() {
    h1.attack = h1.attack + 2
    console.log(h1.attack)

}




let mageGameStart = function() {
        if (roundCounter === 0) {
            $('body').replaceWith('<body><section class="inside"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></section></body>')
            $('.skeleton').click(function() {
                mageFireBall(v1)
                if (v1.health <= 0) {
                    $('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
                } else {
                    skeletonAttack(v1, v2)
                }
                roundCheck()
            })
            $('.skeleton2').click(function() {
                mageFireBall(v2)
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
            $('section').replaceWith('<body><section class="final"><h1 class="title">Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./wizard.gif" class="wizard"><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"><img src="./boss.gif" class="boss"></section></body>')
            $('.skeleton').click(function() {
                mageFireBall(v1)
                if (v1.health <= 0) {
                    $('.skeleton').replaceWith('<img src="./fireDeath.gif" class="skeleton">')
                } else {
                    skeletonAttack(v1, v2)
                }
            })
            $('.skeleton2').click(function() {
                mageFireBall(v2)
                if (v2.health <= 0) {
                    $('.skeleton2').replaceWith('<img src="./fireDeath.gif" class="skeleton2">')
                } else {
                    skeletonAttack(v2, v1)
                }
            })

            $('.boss').click(function() {
                    bossFireBall(v1, v1, b1)
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

                    }
                })
            }

        }
    
            let upgradeChoices = function() {
                $('.gameBar').after('<button type="button" class="nxt">BOSS FIGHT</button>')
                $('.gameBar').after('<button type="button" class="atk">Attack++</button>')
                $('.gameBar').after('<button type="button" class="heal">Heal</button>')
                $('.nxt').click(mageGameStart)
                $('.atk').click(mageAttackUpgrade)
                $('.heal').click(mageheal)
            }

            $('.mage_start').click(mageGameStart)

            console.log(villians)
            console.log(roundCounter)