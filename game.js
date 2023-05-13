class Bronstone extends AdventureScene {
    constructor() {
        super("bronstone", "Bronstone");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('home','Bronstone.png');
        this.load.image('sword','sword.png');
        this.load.image('staff','wizard_staff.png');
        this.load.image('horse','horse.png');
    }


    onEnter() {
        

        var home = this.add.image(710,540, "home")
        home.setScale(1475/home.width,1080/home.height);
        
        let start_text = this.add.text(10,10,'You are a mighty hero who must rid the evil wizard from these lands.\n Your hometown Bronstone is where you begin.\n Choose your weapon',{color: '0x000000',setFontSize: 0.5})
            .setFontSize(this.s * 1.75);

        let sword = this.add.image(240,540,'sword')
            sword.setScale(400/sword.height,400/sword.width)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("It's a steel sword.")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the sword.");
            this.gainItem('sword');
            this.tweens.add({
                targets: sword,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => {staff.destroy() , sword.destroy()}
            });
        })

        let staff = this.add.image(1100,540,'staff')
            staff.setScale(400/staff.height,400/staff.width)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("It's a magical staff.")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the staff.");
            this.gainItem('staff');
            this.tweens.add({
                targets: staff,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => {staff.destroy() , sword.destroy()}
            });
        })

        let horse = this.add.image(600,540,'horse')
            horse.setScale(400/horse.height,400/horse.width)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("staff") || this.hasItem("sword")) {
                    this.showMessage("Your are ready to leave");
                } else {
                    this.showMessage("Choose your weapon first before you ride out");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("staff") || this.hasItem("sword")) {
                    this.loseItem("staff");
                    this.loseItem("sword");
                    this.showMessage("*neigh*");
                    this.tweens.add({
                        targets: horse,
                        x:600,
                        y:1280,
                        duration: 1000,
                        ease: 'cubic.out',
                        onComplete: () => {this.gotoScene('goblinCamp')}
                    });
                    //horse.setText("ready horse");
                    //this.gotoScene('goblinCamp');
                }
            })
       /* let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('goblinCamp');
                }
            })*/

    }
    
}

class GoblinCamp extends AdventureScene {
    constructor() {
        super("goblinCamp", "Goblin Camp");
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('gobCamp','goblin_camp.png');
        this.load.image('key','key.png');
        this.load.image('map','map.png');
        this.load.image('prisoner','prisoner.png');
        this.load.image('hero','herov2.jpg');
    }
    onEnter() {

        var gobCamp = this.add.image(710,540, "gobCamp")
        gobCamp.setScale(1475/gobCamp.width,1080/gobCamp.height)

        let gob_text = this.add.text(10,10,'Oh no you lost your horse \n and now need to find directions to the wizards tower. \n Maybe this goblin camp has some?',{color: '0x000000',setFontSize: 0.5})
        .setFontSize(this.s * 1.75);

        let key = this.add.image(415,400,'key')
            key.setScale(75/key.height,75/key.width)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("A key for the jail cell.")
    })
    .on('pointerdown', () => {
        this.showMessage("You pick up the key.");
        this.gainItem('key');
        this.tweens.add({
            targets: key,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: () => key.destroy()
        });
    })

        let prisoner = this.add.image(875,235,'prisoner')
            prisoner.setScale(100/prisoner.height,100/prisoner.width)
            .setInteractive()
            .on('pointerover', () => {
            if (this.hasItem("key")) {
                this.showMessage("You use the key to free the prisoner");
            } else {
                this.showMessage("You need the key to release the prisoner");
            }
            
    })
    .on('pointerdown', () => {
        if (this.hasItem("key")){
        this.showMessage("You free the prisoner! He can help you get the directions now.");
        this.gainItem('prisoner');
        this.tweens.add({
            targets: prisoner,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: () => prisoner.destroy()
        });
    }
    })

        let map = this.add.image(670,300,'map')
        map.setScale(100/map.height,100/map.width)
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("prisoner")) {
                this.showMessage("You can now get the directions to the wizard with the help of the prisoner");
            } else {
                this.showMessage("You will need help if you want these directions");
            }
            
    })
    .on('pointerdown', () => {
        if (this.hasItem("prisoner")){
        this.showMessage("With the directions to the wizard you can now leave the goblin camp");
        this.gainItem('map');
        this.tweens.add({
            targets: map,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: () => map.destroy()
        });
    }
    })

        let hero = this.add.image(800,1000,'hero')
        hero.setScale(150/hero.height,150/hero.width)
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("map")) {
                this.showMessage("Your are ready to leave");
            } else {
                this.showMessage("You need directions before you can leave");
            }
    })
    .on('pointerdown', () => {
        if (this.hasItem("map")) {
            this.loseItem("map");
            this.loseItem("key");
            this.loseItem("prisoner");
            this.showMessage("You are back on track now to defeat the wizard");
            this.tweens.add({
                targets: hero,
                alpha: 0,
                x:1600,
                y:1000,
                duration: 1000,
                ease: 'cubic.out',
                onComplete: () => {this.gotoScene('oldBridge')}
            });
        }
    })    

    }
}

class OldBridge extends AdventureScene {
    constructor() {
        super("oldBridge", "Old Bridge");
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('portal','portal.png');
        this.load.image('hero','herov2.jpg');
        this.load.image('oldBridge','old_bridge.jpg');
        this.load.image('arrow','arrowv3.png');

    }
    onEnter() {

        var bridge = this.add.image(710,540, "oldBridge")
        bridge.setScale(1475/bridge.width,1080/bridge.height)

        var hero = this.add.image(250,700,"hero")
        hero.setScale(150/hero.width,150/hero.height)


        let bridge_text = this.add.text(10,10,'You come to an old bridge that continues onwards. \n The map is saying to go through the portal to reach the wizard. \n You have two options',{color: '0x000000',setFontSize: 0.5})
        .setFontSize(this.s * 1.75);

        let portal = this.add.image(215,500,'portal')
            portal.setScale(150/portal.height)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("A portal to the Wizard's tower")
    })
    .on('pointerdown', () => {
        this.showMessage("You go through the portal");
        this.tweens.add({
            targets: hero,
            alpha: 0,
            duration: 500,
            onComplete: () => this.gotoScene('theTower')
        });
    })

        let arrow = this.add.image(1200,300,'arrow')
            arrow.setScale(100/arrow.height,100/arrow.width)
            .setInteractive()
            .on('pointerover', () => {
            this.showMessage("Cross to the other side of the bridge?")      
    })
    .on('pointerdown', () => {
        this.showMessage("You cross the bridge");
        this.tweens.add({
            targets: hero,
            y: 0,
            x : 1600,
            alpha:0,
            duration: 2000,
            ease: 'cubic.out',
            onComplete: () => this.gotoScene('swordInStone')
        });
    }
    )
        
    }
}

class SwordInStone extends AdventureScene {
    constructor() {
        super("swordInStone", "Secert Grove");
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('grove','sword_in_stone.jpg');
        this.load.image('powerfulSword','powerful_sword.png');
        this.load.image('arrow','arrowv3.png');


    }
    onEnter() {

        
        var grove = this.add.image(710,540,"grove")
        grove.setScale(1475/grove.width,1080/grove.height)


        let grove_text = this.add.text(10,10,'You found a secert grove with a powerful sword! \n This will probably be useful for your \n fight aganist the wizard',{color: '0x000000',setFontSize: 0.5})
        .setFontSize(this.s * 1.75);

        let powerSword = this.add.image(215,500,'powerfulSword')
        powerSword.setScale(200/powerfulSword.width,150/powerfulSword.height)
        .setInteractive()
        .on('pointerover', () => {
        this.showMessage("Pickup the sword")
})
.on('pointerdown', () => {
    this.gainItem('powerfulSword');
    this.showMessage("You now have the powerful sword!");
    this.tweens.add({
        targets: powerSword,
        y: `-=${2 * this.s}`,
        alpha: { from: 1, to: 0 },
        duration: 500,
        onComplete: () => powerSword.destroy()
    });
})

    let arrow = this.add.image(1000,800,'arrow')
        arrow.setScale(100/arrow.height,100/arrow.width)
        .setInteractive()
        .on('pointerover', () => {
        this.showMessage("Go back?")      
})
.on('pointerdown', () => {
    this.showMessage("You go back to the bridge");
    this.gotoScene('oldBridge');
}
    )
    }
}

class TheTower extends AdventureScene {
    constructor() {
        super("theTower", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class TopOfTower extends AdventureScene {
    constructor() {
        super("topOfTower", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}




class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('evilWizard', 'evil_wizard.gif')
        
    }
    create() {
        var wizard = this.add.image(910, 640, 'evilWizard');
        wizard.setScale(500/wizard.height,500/wizard.width);
        this.add.text(610,50, "To the Top").setFontSize(100);
        this.add.text(750,150, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('bronstone'));
        });
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Defeat extends Phaser.Scene {
    constructor() {
        super('defeat');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}



const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Bronstone, GoblinCamp, OldBridge, SwordInStone, TheTower, TopOfTower, Victory, Defeat],
    title: "Adventure Game",
});

