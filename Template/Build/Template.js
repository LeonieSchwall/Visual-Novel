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
//# sourceMappingURL=Template.js.map