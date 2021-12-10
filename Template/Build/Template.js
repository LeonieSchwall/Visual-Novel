"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Tutorial_WS21 starting");
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
    Template.locations = {
        bedroom: {
            name: "Bedroom",
            background: "./Images/background/zimmer.jpg"
        }
    };
    Template.characters = {
        narrator: {
            name: "",
        },
        boy: {
            name: "Alex",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "./Images/Characters/Boy.png",
                upset: ""
            }
        },
        girl: {
            name: "Nina",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "./Images/Characters/aisaka.png",
                upset: ""
            }
        },
        girl2: {
            name: "Lena",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Girl.png",
                happy: "",
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
    window.addEventListener("load", start);
    function start(_event) {
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
                T0000: "Hi",
            },
            girl: {
                T0000: "Wer bist du?",
            },
            girl2: {
                T0000: "Ich heiße Lena.",
            }
        };
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.girl, Template.characters.girl.pose.happy, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.girl, text.boy.T0000);
        await Template.ƒS.Speech.tell(Template.characters.girl, "Hi");
        await Template.ƒS.Character.animate(Template.characters.girl, Template.characters.girl.pose.happy, Template.fromLeftToRight());
        await Template.ƒS.Character.hide(Template.characters.girl);
        let firstDialogueElementOptions = {
            iSayOk: "Ok",
            iSayNo: "No",
            iSayYes: "Yes"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.girl, "Hi2.");
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Character.show(Template.characters.girl2, Template.characters.girl2.pose.angry, Template.ƒS.positions.center);
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.girl2, text.girl2.T0000);
                break;
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map