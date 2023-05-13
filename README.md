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

- [Hero.png](https://www.pinterest.com/pin/609323024554518768/)


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
