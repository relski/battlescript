var Unit = function (name, healthPoints, attackPower, unitType) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPower = attackPower;
    this.unitType = unitType;
};

var hero1 = new Unit ('Gwyn', 60, 3, 'hero');
var enemy1 = new Unit ('Ogre', 70, 4, 'monster');

alert(hero1.healthPoints);
