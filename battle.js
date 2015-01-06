var damage = 5;
var health = 20;
var alive = true;

function battleInit() {
    health -= damage;
    console.log("Current health is " + health);
    
}

function combat() {
    while (alive) {
        if (health > 0) {
            battleInit();
        } else if (health <= 0) {
            alive = false;
            console.log("You're DEAD!");
        }    
    }
}

combat();