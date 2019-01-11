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

let multiPlayerGame = false
let roundCounter = 0
let villians = []
let heros = []
let gameSouls = 0

let createMage = function() {
    let mage = new Character
    mage.name = 'wizard'
    mage.attack = 8
    mage.health = 50
    heros.push(mage)
}
let createWarrior = function() {
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

let v1 = villians[0]
let v2 = villians[1]
let b1 = villians[2]

let attack = function(target, hero) {
    if (multiPlayerGame === false) {
        if (target.health > 0) {
            target.health -= h1.attack
            $('.enemyGameStats').remove()
            $('.gameBar').append(`<li class="enemyGameStats">${target.name} has ${target.health}</li>`)
            if (target.health <= 0) {
                $('.enemyGameStats').remove()
                $('.soulsCount').remove()
                h1.souls = h1.souls + target.souls
                $('.gameBar').append(`<li class="soulsCount">${h1.name} has ${h1.souls} souls</li>`)
                $('.soulsCount').replaceWith(`<li class="soulsCount">${h1.name} has ${h1.souls} souls</li>`)
            }
        }

    } else {
        if (target.health > 0) {
            target.health -= hero.attack
            $('.health').remove()
            $('.soulsCount').remove()
            $('.enemyGameStats').remove()
            $('.gameBar').append(`<li class="enemyGameStats">${target.name} has ${target.health}</li>`)
            if (target.health <= 0) {
                $('.enemyGameStats').remove()
                $('.atk').remove()
                $('.heal').remove()
                $('.atk2').remove()
                $('.heal2').remove()
                $('.gameBar').replaceWith(`<h1 style="color:gold;">WINNER IS ${hero.name}</h1><button id="restart">Restart</button>`)
                document.getElementById("restart").onclick = function() {
                        window.location.href = "./index.html"
                    }
            }   
        }
    }
}

let bossHeroAttack = function(target, target2, bigboss) {
    if (target.health <= 0 && target2.health <= 0) {
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
    if (roundCounter === 0 && v1.health <= 0 && v2.health <= 0) {
        $('.gameStats').remove()
        villians.shift()
        villians.shift()
        villians.shift()
        upgradeChoices()
        roundCounter += 1
        enemyGenerator()
        endBoss()


    } else if (h1.health <= 0) {
        setTimeout(function() {
            $('.title').remove()
            $('.hero').remove()
            $('.final').replaceWith('<section class="playerDead"><h1 style="color:red;">You have Died</h1></section></body>')
            $('.playerDead').append('<button id="restart">Restart</button>')
            document.getElementById("restart").onclick = function() {
                window.location.href = "./index.html"
            }
        }, 1000)
    }

}

let heal = function(target) {
    if (multiPlayer = false) {
        if (h1.souls === 2) {
            $('.gameStats').remove()
            if (h1.key === 0) {
                h1.health = 50
            } else {
                h1.health = 75
            }
            $('.gameBar').append(`<li class="gameStats">${h1.name} has been healed back to ${h1.health}</li>`)
            h1.souls -= 1
            $('.soulsCount').remove()
            $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.souls} souls left</li>`)
        } else {
            $('.soulsCount').remove()
            $('.gameBar').append(`<li class="soulsCount">${h1.name} does not have enough souls</li>`)
        }
    } else {
        if (target.souls >= 1) {
            $('.health').remove()
            if (target.key === 0) {
                target.health = 50
            } else {
                target.health = 75
            }
            $('.gameBar').append(`<li class="health">${target.name} has ${target.health}</li>`)
            target.souls -= 1
            $('.soulsCount').remove()
            $('.gameBar').append(`<li class="soulsCount">${target.name} has ${target.souls} souls left</li>`)
        } else {
            $('.soulsCount').remove()
            $('.gameBar').append(`<li class="soulsCount">${target.name} does not have enough souls</li>`)
        }
    }
}




let AttackUpgrade = function() {
    if (h1.souls >= 1) {
        $('.gameStats').remove()
        h1.attack += 4
        $('.gameBar').append(`<li class="gameStats">${h1.name} has increased attack to ${h1.attack}`)
        h1.souls -= 1
        $('.soulsCount').remove()
        $('.gameBar').append(`<li class="gameStats">${h1.name} has ${h1.souls} souls left</li>`)
    } else {
        $('.soulsCount').remove()
        $('.gameBar').append(`<li class="soulsCount">${h1.name} does not have enough souls</li>`)
    }

}



let gameStart = function() {
    if (roundCounter === 0) {
        h1 = heros[0]
        $('body').replaceWith('<body><section class="inside"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"></section></body>')
        if (h1.key === 0) {
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

        $('.inside').replaceWith('<body><section class="final"><h1 class="title">Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul><img src="./skeleton.gif" class="skeleton"><img src="./skeleton.gif" class="skeleton2"><img src="./boss.gif" class="boss"></section></body>')
        if (h1.key === 0) {
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
            bossHeroAttack(v1, v2, b1)
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
            } else {
                bossAttack(b1)
                skeletonAttack(v1, v2)
                roundCheck()

            }
        })
    }

}

let multiPlayer = function() {
    multiPlayerGame = true
    h1 = heros[0]
    h2 = heros[1]
    h1.souls = 1
    h2.souls = 1
    console.log(heros)
    $('body').replaceWith('<body><section class="inside"><h1>Time to do battle</h1><ul class="gameBar"><li class="immune">THIS IS YOUR STATUS BAR</li></ul></section></body>')
    $('.gameBar').after('<button type="button" class="atk">Attack</button>')
            .after('<button type="button" class="heal">heal</button>')
            .after('<button type="button" class="atk2">Attack</button>')
            .after('<button type="button" class="heal2">heal</button>')
            .after('<img src="./wizard.gif" class="hero">')
            .after('<img src="./warrior.gif" class="skeleton">')
    roundButtons()
    $('.atk').click(function() {
        attack(h2, h1)
        roundCounter += 1
        console.log(roundCounter)
        roundButtons()
    })
    $('.heal').click(function() {
        heal(h1)
        roundCounter += 1
        roundButtons()
    })
    $('.atk2').click(function() {
        attack(h1, h2)
        roundCounter -= 1
        roundButtons()
    })
    $('.heal2').click(function() {
        heal(h2)
        roundCounter -= 1
        roundButtons()
    })

}


let roundButtons = function() {
    if (roundCounter === 0) {
        $('.gameStats').remove()
        $('.atk').show()
        $('.heal').show()
        $('.atk2').hide()
        $('.heal2').hide()
        $('.gameBar').append(`<li class="gameStats">${h1.name} has the attack`)
           
    } else {
        $('.gameStats').remove()
        $('.atk2').show()
        $('.heal2').show()
        $('.atk').hide()
        $('.heal').hide()
        $('.gameBar').append(`<li class="gameStats">${h2.name} has the attack`)
    }
}
let upgradeChoices = function() {
    $('.gameBar').after('<button type="button" class="nxt">BOSS FIGHT</button>')
        .after('<button type="button" class="atk">Attack++</button>')
        .after('<button type="button" class="heal">Heal</button>')
    $('.nxt').click(gameStart)
    $('.atk').click(AttackUpgrade)
    $('.heal').click(heal)
}

$('.mage_start').click(function() {
    createMage()
    gameStart()
})
$('.warrior_start').click(function() {
    createWarrior()
    gameStart()
})

$('#multiple').click(function() {
    createMage()
    createWarrior()
    multiPlayer()
})