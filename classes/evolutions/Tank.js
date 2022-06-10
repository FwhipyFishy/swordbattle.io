const Evolution = require("./Evolution");
class Tank extends Evolution {
    constructor() {
        super();
        this.name = "tank";
        this.abilityDuration = 5000;
        this.abilityCooldown = 100000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 1.6,
            health: 1.6,
            speed: 0.75,
            scale: 1.25,
            power: 1.5,
            resistance: 2,
            damage: 1.25,
            damageCooldown: 1.1,
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 4,
            scale: 1.75,
            damageCooldown: 0.5,
            damage: 2,
            resistance: 0
        };
    }
}
module.exports = Tank;