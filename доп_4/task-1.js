const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin: function (defenderObject) {
    let chance = 0
    const keysDefender = Object.getOwnPropertyNames(defenderObject)
    keysDefender.forEach((elem) => {
      if (defenderObject[elem] < this[elem]) chance++
    })
    return [chance, keysDefender.length]
  },

  improveArmy: function () {
    const keysAttacker = Object.getOwnPropertyNames(this)
    keysAttacker.forEach((elem) => {
      this[elem] += 5
    })
  },

  attack: function (defender) {
    const countChance = this.checkChancesToWin(defender)
    if ((countChance[0] * 100) / countChance[1] > 70) {
      console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    } else {
      console.log(
        `Наши шансы равны ${countChance[0]}/${countChance[1]}. Необходимо укрепление!`
      )
      this.improveArmy()
    }
  },
}
attacker.attack(defender)
attacker.attack(defender)

attacker.attack(defender)
// attacker.attack(defender) // Наши шансы равны 1/4. Необходимо укрепление!
// attacker.attack(defender) // Наши шансы равны 2/4. Необходимо укрепление!
// attacker.attack(defender) // Мы усилились! Мы несомненно победим! Наши шансы высоки!
