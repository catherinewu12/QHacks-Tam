import { animController } from "./animController";

export class tamController {

   
    /**
     * Happiness & Health start at 100 and go down
     */
    happiness: number = 100;
    health: number = 100;
    poop: number = 0;
    name: string;
    animcntrl: animController;
    
    constructor() {
        this.animController = new animController();
    }
    updateName(s: string){
        this.name = s;
        /**
         * happy animation
         */
    }
    updateHealth(i:number) {
        var heal:number = i + this.health;
        if (heal <= 100){
            this.health = heal;
        }
        if (Math.sign(i) == 1){
            /**
             * Start happy animation?
             */
        }else{
            /**
             * sad animation?
             */
        }
    }

    updateHappiness(i: number){
        var happy:number = i + this.happiness;
        if (happy <= 100){
            this.happiness = happy;
        }
        if (Math.sign(i) == 1){
            /**
             * Start happy animation?
             */
        }else{
            /**
             * sad animation?
             */
        }
       
    }

    updatePoop(time:number){
        if(time%20==0){
            this.poop++;
        }
        if(this.poop > 5){
            this.updateHealth(-4);
            this.updateHappiness(-2);
        }
    }

    idleState(time: number){
        /**
         * Start idle animation?
         */
        if(time%10==0){
            this.updateHealth(-3);
        }
        if(time%5==0){
            this.updateHappiness(-5);
        }
    }

    happyState(time:number){
        /**
         * Start happy animation?
         */
        if(time%10==0){
            this.updateHealth(2);
        }
        if(time%5==0){
            this.updateHappiness(5);
        }
    }

    sadState(time:number){
        /**
         * Start sad/sick animation?
         */
        if(time%10==0){
            this.updateHealth(-5);
        }
        if(time%5==0){
            this.updateHappiness(-8);
        }
    }
}