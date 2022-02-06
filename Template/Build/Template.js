"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Template");
    //define transition//
    Template.transitions = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/puzzle.png",
            edge: 1
        }
    };
    Template.sound = {
        //music
        backgroundTheme: "",
        //sound
        click: "",
    };
    Template.items = {
        pen: {
            name: "Roter Stift",
            description: "A red pen.",
            image: "",
        }
    };
    Template.locations = {
        lagerfeuer: {
            name: "Lagerfeuer",
            background: "./Images/background/lagerfeuer.webp"
        }
    };
    Template.characters = {
        narrator: {
            name: "",
        },
        boy: {
            name: "Jakob: ",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                angry: "",
                happy: "./Images/Characters/Boy_.png",
                upset: ""
            }
        },
        girl2: {
            name: "Nina: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Nina.png",
                happy: "",
                upset: ""
            }
        },
        luna: {
            name: "Luna: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: ""
            }
        },
    };
    //Animation//
    function fromLeftToRight() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, },
            end: { translation: Template.ƒS.positions.bottomright, },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    Template.dataForSave = {};
    //Menü
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        open: "Open"
    };
    let gameMenu;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                break;
            case inGameMenu.open:
                gameMenu.open();
                break;
        }
    }
    let menu = true;
    //Shortcuts fürs Menu
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menu = true;
                }
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        //Menu
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen
        let scenes = [
            { scene: Template.Scene, name: "SceneOne" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            boy: {
                T0000: "Hey, woher hast du denn die Marshmallows?",
                T0001: "Danke, möchtest du auch noch welche?",
                T0002: "Alles klar, dann lass uns los gehen.",
                T0003: "Ja, sonst erfrieren wir ja noch hier in der Kälte",
                T0004: "Nein, ich gehe gleich zu meinen Freunden.",
                T0005: "Ähm ich bin Jakob und wer bist du?",
                T0006: "Hi Nina, ich unterhalte mich doch nur mit Luna.",
                T0007: "Wer ist dir denn über die Leber gelaufen?",
            },
            luna: {
                T0000: "Die gibt es da drüben.",
                T0001: "Ja sehr gerne, ich komme einfach kurz mit.",
                T0002: "Wollen wir uns danach ans Feuer setzen?",
                T0003: "Dann lass uns eine Decke holen und uns zusammenkuscheln.",
                T0004: "Schade, viel Spaß dir noch."
            },
            girl2: {
                T0000: "Wer bist du und was willst du von meiner Freundin?",
                T0001: "Nina",
                T0002: "Lass sie bloß in Ruhe du Idiot!",
            }
        };
        await Template.ƒS.Location.show(Template.locations.lagerfeuer);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.luna, Template.characters.luna.pose.happy, Template.ƒS.positions.bottomleft);
        await Template.ƒS.Character.show(Template.characters.boy, Template.characters.boy.pose.happy, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0000);
        await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0000);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0001);
        await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0001);
        await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0002);
        await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0002);
        //await ƒS.Character.animate(characters.girl3, characters.girl3.pose.happy, fromLeftToRight());
        //await ƒS.Character.hide(characters.girl3);
        Template.ƒS.Inventory.add(Template.items.pen);
        await Template.ƒS.Inventory.open();
        let firstDialogueElementOptions = {
            iSayNo: "Nein",
            iSayOk: "Okay",
            iSayYes: "Ja"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0004);
                await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0004);
                break;
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Character.show(Template.characters.girl2, Template.characters.girl2.pose.angry, Template.ƒS.positions.bottomleft);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.girl2, text.girl2.T0000);
                await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0005);
                await Template.ƒS.Speech.tell(Template.characters.girl2, text.girl2.T0001);
                await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0006);
                await Template.ƒS.Speech.tell(Template.characters.girl2, text.girl2.T0002);
                await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0007);
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.boy, text.boy.T0003);
                await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0003);
                break;
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene1() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            aisaka: {
                T0000: "HEY",
                T0001: ""
            },
            kohana: {
                T0000: "HII"
            }
        };
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        // Novel Page
        Template.ƒS.Text.setClass("text");
        Template.ƒS.Text.print("Lies mich.");
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.aisaka.T0000);
        Template.dataForSave.points += 10;
        console.log(Template.dataForSave.points);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, "Helloo");
        await Template.ƒS.Character.hide(Template.characters.aisaka);
        await Template.ƒS.update(1);
        // return "";
        // if (dataForSave.points == 50) {
        //   return "";
        // return SzenenFunktionsname();
        // }
    }
    Template.Scene1 = Scene1;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map