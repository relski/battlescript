var damage = 5;
var health = 20;
var alive = true;

function battleInit() {
    health -= damage;
    document.write("<p>Current health is " + health + "<br></p>");
    
}

function combat() {
    while (alive) {
        if (health > 0) {
            battleInit();
        } else if (health <= 0) {
            alive = false;
            document.write("<p>You're DEAD!</p>");
        }    
    }
}

function attackFunction() {
    battleInit();
}

// combat();