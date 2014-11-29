var damage = 5;
var health = 0;
var alive = true;

function battleInit() {
    health += damage;
    console.log("Current health is " + health);
    
}

function combat() {
    while (alive) {
        if (health < 20) {
            battleInit();
        } else if (health >= 20) {
            alive = false;
            console.log("You're DEAD!");
        }
          
    }
}

combat();