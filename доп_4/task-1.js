const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    let chance = 0
    for (let key in defenderObject) {
      console.log(key)
    }
  },
  improveArmy() {
    for (let key in this) {
      key += 5
    }
    // this.archer += 5
    // this.footSoldier += 5
    // this.cavalry += 5
    // this.artillery += 5
  },
  attack(defender) {},
}
attacker.improveArmy()

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}
attacker.checkChancesToWin(defender)
console.log()
