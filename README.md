A simple adventure game by {Connor Lynch} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).
    - GoblinCamp
    - OldBridge
    - SecertGrove
    - Bronstone
    - TheTower
    - TopOfTower
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
    - Defeat
    - Victory
    - Intro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: unsatisfied (name the method and explain the use of it).
        - shakeObj: Was used to shake images on certain screens to tell the user that an item is currently not usable
    - Enhancement 2: unsatisfied (name the method and explain the use of it).
        - setBackgroundSize: Was used for my own sake in simplifying set the scale of a background image each time I made a new adventure scene.

Experience requirements:
- **4+ locations in the game world**: unsatisfied (name at least 4 of the classes).
    - GoblinCamp
    - OldBridge
    - SecertGrove
    - Bronstone
    - TheTower
    - TopOfTower
- **2+ interactive objects in most scenes**: unsatisfied (describe two examples)
    - PowerfulSword: Was used to let the player access the good ending. With the sword the player would recieve the bad ending
    - key: Was used to unlock the jail cell of the prisoner so you could then get the directions to the next area
- **Many objects have `pointerover` messages**: unsatisfied (describe two examples)
    - Sword: The sword in the beginning says that "its a steel sword" when hovered over by a cursor
    - Staff: The staff in the beginning says that "its a magical staff" when hovered over by a cursor
- **Many objects have `pointerdown` effects**: unsatisfied (describe two examples)
    - Horse: When clicked on by a user texts pops up saying "*neighs*" and then an animation plays
    - Map: When clicked on the map will dissappear and show up in users inventory 
- **Some objects are themselves animated**: unsatisfied (describe two examples)
    - Horse: When clicked on the horse runs to the bottom of the screen
    - Hero: Can be clicked on in multiple scenes where the hero image runs off the scene

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

- [Hero.png](https://www.pinterest.com/pin/609323024554518768/) Had to resize the image to fit dimensions of game
- [Portal.png](https://pixelartmaker.com/art/48890ee8a13e3f6) Had to resize the image to fit dimensions of game
- [Sword.png](https://www.vecteezy.com/png/19527033-an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-sword) Had to resize the image to fit dimensions of game
- [Staff.png](https://www.pixilart.com/art/magic-staff-b92e096cc8ef11b) Had to resize the image to fit dimensions of game
- [Defeat.png](https://www.artstation.com/artwork/86leR)  Had to resize the image to fit dimensions of game
- [Victory.png](https://www.pinterest.com/pin/348254983675543687/) Had to resize the image to fit dimensions of game
- [Wizard_tower.png](https://www.artstation.com/artwork/G8Zz6W)  Had to resize the image to fit dimensions of game
- [Secert_grove.png](https://rare-gallery.com/459066-sword-fantasy-art-stone-weapon-artwork-forest-excalibur.html)  Had to resize the image to fit dimensions of game
- [Top_of_tower.png](https://www.youtube.com/watch?v=UJLSyeytuvY&t=16s&ab_channel=Marel) For this image I took the thumbnail of the video and resized it to fit in one of my game scenes
- [powerful_sword.png](https://dinopixel.com/pixel-art/enchanted-sword/24627) Had to resize the image to fit dimensions of game
- [bridge.png](https://www.artstation.com/artwork/2VwPK) Had to resize the image to fit dimensions of game
- [goblin_camp.png](https://www.reddit.com/r/DungeonsAndDragons/comments/v5sddy/goblin_camp_let_me_know_what_you_think/)  Had to resize the image to fit dimensions of game
- [bronstone.png](https://www.fantasytowngenerator.com/temporary-settlement) For this image I used a settlement generator where you can put in the name of the town, how many people would live in it, what the lifestyle is, does the town have rivers, forests, etc... The tool would then generate a random settlement based on the users inputs and thats how Bronstone was made. 
- [evil_wizard.png](https://luizmelo.itch.io/evil-wizard-2) This image started as gif but I soon realized through some light research that gifs are not supported in phaser or there was just to many hoops to jump through that I didn't want to bother to get a gif in. Thus from the gif I was able to get the first frame of the animation and resize it to fit my game
- [prisoner.png](https://pixelartmaker.com/art/db2658e98982ade) Had to resize the image to fit dimensions of game
- [key.png](https://www.pixilart.com/art/key-c0274e0785c3672) Had to resize the image to fit dimensions of game
- [map.png] (https://pixelartmaker.com/art/31dd12bd6caccb1) Had to resize the image to fit dimensions of game


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
