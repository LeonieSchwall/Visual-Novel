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
            alpha: "./Free Transitions/puzzle.png",
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
            background: "./Images/Backgrounds/Bedroom.png"
        }
    };
    Template.characters = {
        narrator: {
            name: "",
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "",
                upset: ""
            }
        },
        kohana: {
            name: "Kohana",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "",
                upset: ""
            }
        }
    };
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "SceneOne" }
        ];
        let uiElement = document.querySelector("type=interface]");
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
            aisaka: {
                T0000: "Hi",
            },
            kohana: {
                T0000: "Hi",
            }
        };
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.aisaka, Template.characters.aisaka.pose.happy, Template.ƒS.positions.bottomleft);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.aisaka.T0000);
        await Template.ƒS.Speech.tell(Template.characters.aisaka, "Hi");
        await Template.ƒS.Character.hide(Template.characters.aisaka);
        let firstDialogueElementOptions = {
            iSayOk: "Ok",
            iSayNo: "No",
            iSayYes: "Yes"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.aisaka, "Hi2.");
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Character.show(Template.characters.kohana, Template.characters.kohana.pose.angry, Template.ƒS.positions.center);
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.kohana, text.kohana.T0000);
                break;
        }
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map