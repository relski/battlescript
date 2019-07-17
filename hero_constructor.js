// Hero Constructor
class Unit {
    constructor(name, healthPoints, attackPower) {
        this.name = name
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
    }
}

class Hero extends Unit {
    constructor(name, healthPoints, attackPower) {
        super(name, healthPoints, attackPower)
    }
}

class Enemy extends Unit {
    constructor(name, healthPoints, attackPower) {
        super(name, healthPoints, attackPower)
    }
}

// Hero Creation
const hero1 = new Hero('Gwyn', 10, 2)

// Init

const battleInit = () => {
    return hero1.name + " attacks with " + hero1.attackPower + " points of damage!";
};
console.log(battleInit())
