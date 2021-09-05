class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("The ninja's name is " + this.name);
    }

    showStats() {
        this.sayName();
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
    }

    showStats() {
        super.showStats();
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Ninja("Shikamaru");
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

console.log("-------------------------");

const superSensei = new Sensei("Kakashi Sensei");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Kakashi Sensei, Health: 210, Speed: 10, Strength: 10"