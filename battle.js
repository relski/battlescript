function battle() {
    var damage = Math.floor(Math.random() * 5 + 1);
    var health = 0;

    health = health + damage;
    console.log(health);
}
battle();