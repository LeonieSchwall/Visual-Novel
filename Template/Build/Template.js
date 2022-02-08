"use strict";
var Template;
(function (Template) {
    async function Introduction() {
        console.log("FudgeStory Template Introduction starting");
        let text = {
            narrator: {
                T0000: "Das ist Detektivin Beuford.",
                T0001: "Sie ist gerade fertig geworden mit ihrer Ausbildung.",
                T0002: "Wir werden sie heute bei ihrem ertsen Fall begleiten.",
                T0003: "Als erstes braucht Sie allerdings einen Vornamen. ",
            },
        };
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.07, 0.1, true);
        await Template.ƒS.Location.show(Template.locations.Startscreen);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Willkommen zur Visual Novel 'Murder Mystery'.");
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003, false);
        Template.data.protagonist.name = await Template.ƒS.Speech.getInput();
        await Template.ƒS.update(1);
        Template.characters.camille.name = Template.data.protagonist.name;
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem ersten Fall beginnen.", true);
        Template.ƒS.Character.hideAll();
        Template.ƒS.Speech.clear();
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 0.2, true);
        await Template.ƒS.update(2);
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
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
            edge: 1,
        },
        puzzle: {
            duration: 1,
            alpha: "./FreeTransitions/puzzle.png",
            edge: 1,
        },
        wipe: {
            duration: 1,
            alpha: "./FreeTransitions/puzzle.png",
            edge: 1,
        },
    };
    Template.sound = {
        //music
        backgroundTheme: "./Audio/Fireplace.wav",
        //sound
        clock: "./Audio/Old Clock.wav",
        safe: "./Audio/Safe1.wav",
        safe2: "./Audio/Safe2.wav",
    };
    //Items
    Template.items = {
        key: {
            name: "Schlüssel",
            description: "Ein alter Schlüssel.",
            image: "./Images/Items/Schluessel.png",
        },
        labor: {
            name: "Laborbericht",
            description: "Der Bericht enthält die Todesursache.",
            image: "./Images/Items/Laborbericht.png",
        },
        safe: {
            name: "Safe",
            description: "Was wohl in diesem Safe ist?",
            image: "./Images/Items/Safe.png",
        },
        book: {
            name: "Tagebuch",
            description: "Bild gehört wohl zu diesem Eintrag.",
            image: "./Images/Items/Tagebuch.png",
        },
        knife: {
            name: "Küchenmesser",
            description: "Hier ist also das fehlende Messer und die Mordwaffe.",
            image: "./Images/Items/Messer.png",
        },
        paper: {
            name: "Notizzettel",
            description: "Was soll das Kauderwelsch denn bedeuten?",
            image: "./Images/Items/Gift.png",
        },
        poison: {
            name: "Gift",
            description: "Mordwaffe?",
            image: "./Images/Items/Gift.png",
        },
        safecode: {
            name: "Zahlencode",
            description: "Das ist bestimmt der Cade für den Safe.",
            image: "./Images/Items/Geld.png",
        },
        money: {
            name: "Geldstapel",
            description: "Warum hatte das Opfer so viel Bargeld?",
            image: "./Images/Items/Geld.png",
        },
    };
    //Hintergründe
    Template.locations = {
        Startscreen: {
            name: "Startscreen",
            background: "./Images/background/Bibliothek.jpg",
        },
        büro: {
            name: "Büro",
            background: "./Images/background/Bibliothek.png",
        },
        bibliothek: {
            name: "Bibliothek/Tatort",
            background: "./Images/background/Bibliothek.png",
        },
        haus: {
            name: "Wohnsitz der Familie",
            background: "./Images/background/Bibliothek.png",
        },
        kammer: {
            name: "Dienstbotenzimmer",
            background: "./Images/background/Bibliothek.png",
        },
        tatort: {
            name: "Wohnzimmer",
            background: "./Images/background/Bibliothek.png",
        },
    };
    //Charakter benennen
    Template.data = {
        protagonist: {
            name: "",
        },
        score: 0,
        state: {
            a: 1,
        },
    };
    // Charaktere
    Template.characters = {
        narrator: {
            name: "",
        },
        camille: {
            name: Template.data.protagonist.name,
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                angry: "",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        schlüssel: {
            name: "schlüssel",
            origin: Template.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                angry: "",
                happy: "./Images/Items/Schluessel.png",
                upset: "",
            },
        },
        violet: {
            name: "Violet Lakefield: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Nina.png",
                happy: "",
                upset: "",
            },
        },
        luna: {
            name: "Luna Lakefield: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        james: {
            name: "James Taylor: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        maria: {
            name: "Maria: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
    };
    //Animation//
    function fromLeftToRight() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positions.bottomright },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    function fromleftToCenter() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positions.bottomcenter },
            duration: 1.5,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromleftToCenter = fromleftToCenter;
    function fromlefterToLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft },
            end: { translation: Template.ƒS.positionPercent(31, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromlefterToLeft = fromlefterToLeft;
    Template.dataForSave = {
        points: 0
    };
    //Menü
    let inGameMenu = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-",
        inventar: "Inventar",
    };
    let volume = 5.0;
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("Die Visual Novel wurde mit FudgeStory erstellt." +
            "<br/>" +
            "Von Leonie Schwall" +
            "<br/>" +
            "Die Elemente wurden selbst gezeichnet." +
            "<br/>");
    }
    Template.showCredits = showCredits;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.volumeup:
                incrementSound();
                break;
            case inGameMenu.volumedown:
                decrementSound();
                break;
            case inGameMenu.inventar:
                await Template.ƒS.Inventory.open();
                break;
            case inGameMenu.credits:
                showCredits();
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
                    Template.gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    menu = true;
                }
                break;
        }
    }
    console.log(1);
    window.addEventListener("load", start);
    function start(_event) {
        console.log(2);
        //Menu
        Template.gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen aufrufen
        let scenes = [
            { scene: Template.Introduction, name: "Introduction" },
            { scene: Template.Scene1, name: "Scene1" },
            { scene: Template.Scene2, name: "Scene2" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        // ƒS.Progress.setData(data);
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene1() {
        console.log("FudgeStory Template Scene1 starting");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            camille: {
                T0000: "HEY",
                T0001: ""
            },
        };
        await Template.ƒS.Location.show(Template.locations.bibliothek);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.animate(Template.characters.schlüssel, Template.characters.schlüssel.pose.happy, Template.fromleftToCenter());
        // Novel Page
        Template.ƒS.Text.setClass("text");
        Template.ƒS.Text.print("Lies mich.");
        Template.ƒS.Inventory.add(Template.items.key);
        //await ƒS.Inventory.open();
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        Template.dataForSave.points = 50;
        //console.log(dataForSave.points);
        await Template.ƒS.Speech.tell(Template.characters.camille, "Helloo");
        const t = await Template.ƒS.Inventory.open();
        console.log(t);
        await Template.ƒS.Character.hide(Template.characters.camille);
        await Template.ƒS.update(1);
        // return "";
        if (Template.dataForSave.points === 50) {
            return "Introduction";
            // return SzenenFunktionsname();
        }
    }
    Template.Scene1 = Scene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene2() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            narrator: {
                T0000: "",
                T0001: ""
            },
            camille: {
                T0000: "Hey, woher hast du denn die Marshmallows?",
                T0001: "Danke, möchtest du auch noch welche?",
                T0002: "Alles klar, dann lass uns los gehen.",
                T0003: "Ja, sonst erfrieren wir ja noch hier in der Kälte",
                T0004: "Nein, ich gehe gleich zu meinen Freunden.",
                T0005: "Ähm ich bin Jakob und wer bist du?",
                T0006: "Hi Nina, ich unterhalte mich doch nur mit Luna.",
                T0007: "Wer ist dir denn über die Leber gelaufen?",
            },
            violet: {
                T0000: "Die gibt es da drüben.",
                T0001: "Ja sehr gerne, ich komme einfach kurz mit.",
                T0002: "Wollen wir uns danach ans Feuer setzen?",
                T0003: "Dann lass uns eine Decke holen und uns zusammenkuscheln.",
                T0004: "Schade, viel Spaß dir noch."
            },
            luna: {
                T0000: "Wer bist du und was willst du von meiner Freundin?",
                T0001: "Nina",
                T0002: "Lass sie bloß in Ruhe du Idiot!",
                T0003: "...",
            }
        };
        await Template.ƒS.Location.show(Template.locations.kammer);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.luna, Template.characters.luna.pose.happy, Template.ƒS.positions.bottomleft);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
        await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0002);
        //await ƒS.Character.animate(characters.girl3, characters.girl3.pose.happy, fromLeftToRight());
        //await ƒS.Character.hide(characters.girl3);
        // ƒS.Inventory.add(items.key);
        // await ƒS.Inventory.open();
        let firstDialogueElementOptions = {
            iSayNo: "Nein",
            iSayOk: "Okay",
            iSayYes: "Ja"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
                await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0003);
                break;
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Character.show(Template.characters.violet, Template.characters.violet.pose.angry, Template.ƒS.positions.bottomleft);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0000);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0001);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0002);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
                await Template.ƒS.Speech.tell(Template.characters.luna, text.luna.T0003);
                break;
        }
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map