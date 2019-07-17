class Unit {
    constructor(name) {
        this.name = name
    }
}

class Hero extends Unit {
    constructor(name, healthPoints, attackPower, classType) {
    super(name)
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.classType = classType;
    }
    battle() {
        return `${this.name} attacks with ${this.attackPower} damage.`
    }
}

//Init
const hero1 = new Hero('Gwyn', 10, 2, 'hero')

console.log(hero1.battle())
