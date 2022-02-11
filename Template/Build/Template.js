"use strict";
var Template;
(function (Template) {
    async function BadEnding() {
        console.log("FudgeStory Template BadEnding starting");
        let text = {
            smith: {
                T0000: "Guten Morgen Frau Beuford und herzlich Willkommen bei uns im Team.",
                T0001: "Ich habe gerade einen unbekannten Anruf erhalten. Haben Sie ein Paket bekommen?",
                T0002: "Ah, dann gibt das ganze ja einen Sinn. Sie haben Ihren ersten Auftrag erhalten.",
                T0003: "Genau der Auftraggeber hat mir mitgeteilt, ich solle unbedingt Sie auf den Fall ansetzen",
                T0004: "Allerdings, es geht um den Todesfall in der Familie Grisham.",
                T0005: "Denke ich auch, aber wenn es um so viel Geld geht würde ich einfach mal nachforschen.",
                T0006: "Sehr gut, ich wünsche einen erfolgreichen ersten Fall Miss Beuford."
            },
            camille: {
                T0000: "Was ein schöner Tag heute ist, ich bin schon ganz aufgeregt was ich an meinem ersten Tag zu tun bekomme.",
                T0001: "Ich habe ein Paket bekommen, was da wohl drin ist.",
                T0002: "Oha was ist das denn für ein Haufen Geld?",
                T0003: "Moment da ist eine Notiz dabei, was auf Ihr wohl steht?",
                T0004: "Mh das sagt mir jetzt nicht wirklich was!",
                T0005: "Guten Tag, hier Detektivin Beuford am Apparat.",
                T0006: "Vielen Dank Mr. Smith.",
                T0007: "Ja, ich habe ein Paket erhalten, in dem eine Menga Geld lag und eine seltsame Notiz.",
                T0008: "Einen Auftrag, ich habe nur eine Adresse und sonst nichts.",
                T0009: "Und um was es geht es?",
                T0010: "Grisham ,ich dachte das war Selbstmord.",
                T0011: "Alles klar Mr. Smith, ich werde mal vorbeischauen.",
                T0012: "Na dann los zu den Grishams!",
                T0013: "Hm nur eine Adresse, mal sehen wo das ist.",
                T0014: "Das ist ja der Todesfall der Grisham Familie. Das war aber doch ein Selbstmord.",
                T0015: "Schaden wird es wohl nicht mal vorbeizufahren, es scheint jemanden wichtig zu sein bei der Menge Geld."
            },
        };
        await Template.ƒS.Location.show(Template.locations.buero);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
        await Template.ƒS.Character.animate(Template.characters.geld, Template.characters.geld.pose.normal, Template.fromCenterToCenter());
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
        // Novel Page
        Template.ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        Template.ƒS.Text.print("34 Worlington Street");
        Template.ƒS.Inventory.add(Template.items.money);
        //await ƒS.Inventory.open();
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0000);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0001);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0002);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0008);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0003);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0009);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0004);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0010);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0005);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0011);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0006);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0012);
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0013);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0014);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0015);
                break;
        }
        await Template.ƒS.Character.animate(Template.characters.camille, Template.characters.camille.pose.happy, Template.fromLeftToRight());
        //dataForSave.points = 50;
        //console.log(dataForSave.points);
        //await ƒS.Speech.tell(characters.camille, "Helloo");
        //const t = await ƒS.Inventory.open();
        //console.log(t)
        await Template.ƒS.Character.hide(Template.characters.camille);
        await Template.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    Template.BadEnding = BadEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function GoodEnding() {
        console.log("FudgeStory Template GoodEnding starting");
        let text = {
            smith: {
                T0000: "Guten Morgen Frau Beuford und herzlich Willkommen bei uns im Team.",
                T0001: "Ich habe gerade einen unbekannten Anruf erhalten. Haben Sie ein Paket bekommen?",
                T0002: "Ah, dann gibt das ganze ja einen Sinn. Sie haben Ihren ersten Auftrag erhalten.",
                T0003: "Genau der Auftraggeber hat mir mitgeteilt, ich solle unbedingt Sie auf den Fall ansetzen",
                T0004: "Allerdings, es geht um den Todesfall in der Familie Grisham.",
                T0005: "Denke ich auch, aber wenn es um so viel Geld geht würde ich einfach mal nachforschen.",
                T0006: "Sehr gut, ich wünsche einen erfolgreichen ersten Fall Miss Beuford."
            },
            camille: {
                T0000: "Was ein schöner Tag heute ist, ich bin schon ganz aufgeregt was ich an meinem ersten Tag zu tun bekomme.",
                T0001: "Ich habe ein Paket bekommen, was da wohl drin ist.",
                T0002: "Oha was ist das denn für ein Haufen Geld?",
                T0003: "Moment da ist eine Notiz dabei, was auf Ihr wohl steht?",
                T0004: "Mh das sagt mir jetzt nicht wirklich was!",
                T0005: "Guten Tag, hier Detektivin Beuford am Apparat.",
                T0006: "Vielen Dank Mr. Smith.",
                T0007: "Ja, ich habe ein Paket erhalten, in dem eine Menga Geld lag und eine seltsame Notiz.",
                T0008: "Einen Auftrag, ich habe nur eine Adresse und sonst nichts.",
                T0009: "Und um was es geht es?",
                T0010: "Grisham ,ich dachte das war Selbstmord.",
                T0011: "Alles klar Mr. Smith, ich werde mal vorbeischauen.",
                T0012: "Na dann los zu den Grishams!",
                T0013: "Hm nur eine Adresse, mal sehen wo das ist.",
                T0014: "Das ist ja der Todesfall der Grisham Familie. Das war aber doch ein Selbstmord.",
                T0015: "Schaden wird es wohl nicht mal vorbeizufahren, es scheint jemanden wichtig zu sein bei der Menge Geld."
            },
        };
        await Template.ƒS.Location.show(Template.locations.buero);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
        await Template.ƒS.Character.animate(Template.characters.geld, Template.characters.geld.pose.normal, Template.fromCenterToCenter());
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
        // Novel Page
        Template.ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        Template.ƒS.Text.print("34 Worlington Street");
        Template.ƒS.Inventory.add(Template.items.money);
        //await ƒS.Inventory.open();
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0000);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0001);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0002);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0008);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0003);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0009);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0004);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0010);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0005);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0011);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0006);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0012);
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0013);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0014);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0015);
                break;
        }
        await Template.ƒS.Character.animate(Template.characters.camille, Template.characters.camille.pose.happy, Template.fromLeftToRight());
        //dataForSave.points = 50;
        //console.log(dataForSave.points);
        //await ƒS.Speech.tell(characters.camille, "Helloo");
        //const t = await ƒS.Inventory.open();
        //console.log(t)
        await Template.ƒS.Character.hide(Template.characters.camille);
        await Template.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    Template.GoodEnding = GoodEnding;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        console.log("FudgeStory Template Introduction starting");
        let text = {
            narrator: {
                T0000: "Das ist Detektivin Beuford.",
                T0001: "Sie ist gerade fertig geworden mit ihrer Ausbildung.",
                T0002: "Wir werden sie heute bei ihrem ersten Fall begleiten.",
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
        await Template.ƒS.Speech.tell(Template.characters.narrator, Template.data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem Fall beginnen.", true);
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
            description: "Wer hat das Geld geschickt?",
            image: "./Images/Items/Geld.png",
        },
    };
    //Hintergründe
    Template.locations = {
        Startscreen: {
            name: "Startscreen",
            background: "./Images/background/Bibliothek.jpg",
        },
        buero: {
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
        wohnzimmer: {
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
        smith: {
            name: "Mr. Smith",
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
        violet: {
            name: "Violet Grisham: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Nina.png",
                happy: "./Images/Characters/Nina.png",
                upset: "",
            },
        },
        luna: {
            name: "Luna Grisham: ",
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
        marie: {
            name: "Marie: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        schlüssel: {
            name: "schlüssel",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Schluessel.png",
            },
        },
        geld: {
            name: "Geld",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Geld.png",
            },
        },
        buch: {
            name: "Tagebuch",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Tagebuch.png",
            },
        },
        safe: {
            name: "Safe",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Safe.png",
            },
        },
        knife: {
            name: "Messer",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Messer.png",
            },
        },
        poison: {
            name: "Gift",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Gift.png",
            },
        },
        labor: {
            name: "Laborbericht",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Laborbericht.png",
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
    function fromCenterToCenter() {
        return {
            start: { translation: Template.ƒS.positions.center, scaling: new Template.ƒS.Position(0.2, 0.2) },
            end: { translation: Template.ƒS.positions.center, scaling: new Template.ƒS.Position(0.2, 0.2) },
            duration: 2,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToCenter = fromCenterToCenter;
    Template.dataForSave = {
        points: 0,
        gesprochen: {
            marie: false,
            james: false,
            violet: false,
            luna: false
        }
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
            { id: "introduction", scene: Template.Introduction, name: "Introduction", },
            // { id:"scene1",scene: Scene1, name: "Scene1" },
            // { id:"scene2",scene: Scene2, name: "Scene2" },
            // { id:"scene3",scene: Scene3, name: "Scene3" },
            // { id:"scene4",scene: Scene4, name: "Scene4" },
            { id: "scene5", scene: Template.Scene5, name: "Scene5" },
            { id: "scene6", scene: Scene6, name: "Scene6", next: "scene5" },
            { id: "GoodEnding", scene: Template.GoodEnding, name: "GoodEnding" },
            { id: "BadEnding", scene: Template.BadEnding, name: "BadEnding" },
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
            smith: {
                T0000: "Guten Morgen Frau Beuford und herzlich Willkommen bei uns im Team.",
                T0001: "Ich habe gerade einen unbekannten Anruf erhalten. Haben Sie ein Paket bekommen?",
                T0002: "Ah, dann gibt das ganze ja einen Sinn. Sie haben Ihren ersten Auftrag erhalten.",
                T0003: "Genau der Auftraggeber hat mir mitgeteilt, ich solle unbedingt Sie auf den Fall ansetzen",
                T0004: "Allerdings, es geht um den Todesfall in der Familie Grisham.",
                T0005: "Denke ich auch, aber wenn es um so viel Geld geht würde ich einfach mal nachforschen.",
                T0006: "Sehr gut, ich wünsche einen erfolgreichen ersten Fall Miss Beuford."
            },
            camille: {
                T0000: "Was ein schöner Tag heute ist, ich bin schon ganz aufgeregt was ich an meinem ersten Tag zu tun bekomme.",
                T0001: "Ich habe ein Paket bekommen, was da wohl drin ist.",
                T0002: "Oha was ist das denn für ein Haufen Geld?",
                T0003: "Moment da ist eine Notiz dabei, was auf Ihr wohl steht?",
                T0004: "Mh das sagt mir jetzt nicht wirklich was!",
                T0005: "Guten Tag, hier Detektivin Beuford am Apparat.",
                T0006: "Vielen Dank Mr. Smith.",
                T0007: "Ja, ich habe ein Paket erhalten, in dem eine Menga Geld lag und eine seltsame Notiz.",
                T0008: "Einen Auftrag, ich habe nur eine Adresse und sonst nichts.",
                T0009: "Und um was es geht es?",
                T0010: "Grisham ,ich dachte das war Selbstmord.",
                T0011: "Alles klar Mr. Smith, ich werde mal vorbeischauen.",
                T0012: "Na dann los zu den Grishams!",
                T0013: "Hm nur eine Adresse, mal sehen wo das ist.",
                T0014: "Das ist ja der Todesfall der Grisham Familie. Das war aber doch ein Selbstmord.",
                T0015: "Schaden wird es wohl nicht mal vorbeizufahren, es scheint jemanden wichtig zu sein bei der Menge Geld."
            },
        };
        await Template.ƒS.Location.show(Template.locations.buero);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
        await Template.ƒS.Character.animate(Template.characters.geld, Template.characters.geld.pose.normal, Template.fromCenterToCenter());
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
        // Novel Page
        Template.ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        Template.ƒS.Text.print("34 Worlington Street");
        Template.ƒS.Inventory.add(Template.items.money);
        //await ƒS.Inventory.open();
        await Template.ƒS.Character.hide(Template.characters.geld);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0000);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0001);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0002);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0008);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0003);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0009);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0004);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0010);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0005);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0011);
                await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0006);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0012);
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0013);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0014);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0015);
                break;
        }
        await Template.ƒS.Character.animate(Template.characters.camille, Template.characters.camille.pose.happy, Template.fromLeftToRight());
        //dataForSave.points = 50;
        //console.log(dataForSave.points);
        //await ƒS.Speech.tell(characters.camille, "Helloo");
        //const t = await ƒS.Inventory.open();
        //console.log(t)
        await Template.ƒS.Character.hide(Template.characters.camille);
        await Template.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
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
                T0000: "Guten Tag! Bin ich hier richtig bei den Grishams?",
                T0001: "Ich bin Detektivin und habe heute morgen den Auftrag bekommen hier nachzuforschen.",
                T0002: "Darf ich fragen wer sie sind?",
                T0003: "Sehr angenehm Sie kennenzulernen.",
                T0004: "Wissen Sie vielleicht wer mich engagiert haben könnte?",
                T0005: "Ja das stimmt, dennoch wurde ich engagiert und würde mich gerne einmal umsehen wenn es Ihnen Recht ist.",
                T0006: "Sehr gerne, ich warte.",
                T0007: "Guten tag Mrs. Grisham. Mein herzliches Beileid für Ihren Verlust.",
                T0008: "Ja das bin ich.",
                T0009: "Mord? Es wird doch angenommen das es ein Selbstmord war.",
                T0010: "Haben Sie mich dann engagiert?",
            },
            james: {
                T0000: "Guten Tag, ja das sind sie.",
                T0001: "Was kann ich für sie tun?",
                T0002: "Davon weiß ich nichts.",
                T0003: "Ich bin James Taylor, der Verwalter von Mr. Grisham und halte hier alles am Laufen.",
                T0004: "Leider nein, denn es ist ja eigentlich alles klar.",
                T0005: "Mr. Grishams Tod war Selbstmord!",
                T0006: "Von mir aus schon, Ich muss allerdings Mrs. Grisham fragen.",
                T0007: "Sie ist seit dem Tod Ihres Mannes sehr aufgelöst."
            },
            violet: {
                T0000: "Guten Tag, sind Sie die Detektivin?",
                T0001: "Also sind Sie nun die Detektivin?",
                T0002: "Dann kommen Sie schnell mit rein und lösen Sie den Mord an meinem Mann auf.",
                T0003: "Das war KEIN Selbstmord, William würde so etwas nie tun.",
                T0004: "Nein, aber ich bin froh das es jemand getan hat.",
                T0005: "Los kommen Sie ich zeige Ihnen den Tatort."
            },
        };
        await Template.ƒS.Location.show(Template.locations.haus);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positions.bottomleft);
        await Template.ƒS.Character.show(Template.characters.james, Template.characters.james.pose.happy, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0000);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0002);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0003);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0004);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0005);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0006);
        await Template.ƒS.Speech.tell(Template.characters.james, text.james.T0007);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
        await Template.ƒS.Character.hide(Template.characters.james);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.violet, Template.characters.violet.pose.happy, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0008);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0002);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0009);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0003);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0010);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0004);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0005);
    }
    Template.Scene2 = Scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene3() {
        console.log("FudgeStory Template Scene3 starting");
        let text = {
            violet: {
                T0000: "Hier habe ich meinen Mann gefunden.",
                T0001: "Da war überall Blut und es lag ein Messer neben ihm auf dem Boden.",
                T0002: "Es war schrecklich, aber William würde nie so etwas tun, dafür wäre er viel zu ängstlich.",
                T0003: "Er wollte uns nicht alleine lassen mit seiner Firma. ",
                T0004: "Er war ein Workaholic und musste alles selbst machen, damit es perfekt ist.",
                T0005: "Natürlich, wenn Sie noch etwas benötigen rufen Sie nach Maria unserem Hausmädchen.",
                T0006: "Natürlich, was möchten Sie wissen?",
                T0007: "Ja den habe ich, Ich schreibe den Code für Sie auf.",
                T0008: "Nein, den habe ich noch nie gesehen.",
                T0009: "Machen Sie das. Brauchen Sie sonst noch etwas?",
                T0010: "Leider ist derzeit nur meine Tochter da, mein Sohn ist im Internat."
            },
            camille: {
                T0000: "Und was bringt sie zu der Vermutung das er es nicht selbst war?",
                T0001: "Ängstlich? In wie fern?",
                T0002: "Vielen Dank Mrs. Grisham. Darf ich mich ein bisschen hier umsehen?",
                T0003: "Also mal sehen was es hier so zu finden gibt.",
                T0004: "Ein Safe, das ist nicht ungewöhnlich in so einem Haushalt.",
                T0005: "Was da aber drin ist und wer den Code kennt muss ich noch herausfinden.",
                T0006: "Ich sollte mal herausfinden was das Kriminalamt an Beweismitteln aufgenommen hat.",
                T0007: "Guten Tag, hier spricht Detektivin Beuford.",
                T0008: "Ich wurde im Fall Grisham engagiert und würde gerne genaueres wissen.",
                T0009: "Perfekt, könnten Sie mir die Tatortfotos zukommen lassen und den Bericht dazu?",
                T0010: "Dafür wäre ich Ihnen sehr dankbar.",
                T0011: "Wünsche ich Ihnen auch.",
                T0012: "Marie, können Sie bitte Mrs. Grisham für mich suchen?",
                T0013: "Vielen Dank.",
                T0014: "Mrs. Grisham, kann ich Ihnen noch einige Fragen stellen?",
                T0015: "Als erstes haben sie den Code für den Safe?",
                T0016: "Vielen Dank.",
                T0017: "Wissen Sie für was dieser Schlüssel gedacht ist?",
                T0018: "Dann suche ich morgen nach dem passenden Schloss.",
                T0019: "Nein, ich werde morgen noch einmal vorbeikommen und die Belegschaft befragen und am liebsten auch Ihre Familie.",
                T0020: "Kein Problem.",
                T0021: "Bis morgen Mrs. Grisham.",
            },
            narrator: {
                T0000: "Guten Tag, was kann ich für Sie tun?",
                T0001: "Mrs. Grisham hat uns schon informiert, dass sie die Informationen erhalten dürfen.",
                T0002: "Natürlich, ich kann Ihnen auch die Tatwaffe schicken und sobald der Laborbericht da ist, diesen auch.",
                T0003: "Ich schicke Ihnen alles sofort zu.",
                T0004: "Einen schönen Tag noch.",
            },
            marie: {
                T0000: "Natürlich, ich bringe sie zu Ihnen",
            }
        };
        await Template.ƒS.Location.show(Template.locations.bibliothek);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.Character.show(Template.characters.violet, Template.characters.violet.pose.happy, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0000);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0002);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0003);
        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Raum durchsuchen",
            iSayNo: "Violet weiter befragen"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0005);
                await Template.ƒS.Character.hide(Template.characters.violet);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
                await Template.ƒS.Character.animate(Template.characters.safe, Template.characters.safe.pose.normal, Template.fromCenterToCenter());
                Template.ƒS.Inventory.add(Template.items.safe);
                await Template.ƒS.Character.hide(Template.characters.safe);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
                let secondDialogueElementOptions = {
                    iSayYes: "Kriminalamt anrufen",
                    iSayNo: "Violet befragen"
                };
                let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "auswahl");
                switch (secondDialogueElement) {
                    case secondDialogueElementOptions.iSayYes:
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0008);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0009);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0010);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0011);
                        break;
                    case secondDialogueElementOptions.iSayNo:
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0012);
                        await Template.ƒS.Character.show(Template.characters.marie, Template.characters.marie.pose.happy, Template.ƒS.positions.bottomright);
                        await Template.ƒS.update(1);
                        await Template.ƒS.Speech.tell(Template.characters.marie, text.marie.T0000);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0013);
                        await Template.ƒS.Character.hide(Template.characters.marie);
                        await Template.ƒS.update(1);
                        await Template.ƒS.Character.show(Template.characters.violet, Template.characters.violet.pose.happy, Template.ƒS.positions.bottomright);
                        await Template.ƒS.update(1);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0014);
                        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0006);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0015);
                        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0007);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0016);
                        // Novel Page
                        Template.ƒS.Text.setClass("novel-page");
                        Template.ƒS.Text.print("3-5-8-1");
                        await Template.ƒS.Character.animate(Template.characters.schlüssel, Template.characters.schlüssel.pose.normal, Template.fromCenterToCenter());
                        Template.ƒS.Inventory.add(Template.items.key);
                        await Template.ƒS.Character.hide(Template.characters.schlüssel);
                        await Template.ƒS.update(1);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0017);
                        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0008);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0018);
                        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0009);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0019);
                        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0010);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0020);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0021);
                        break;
                }
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0012);
                await Template.ƒS.Character.show(Template.characters.marie, Template.characters.marie.pose.happy, Template.ƒS.positions.bottomright);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.marie, text.marie.T0000);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0013);
                await Template.ƒS.Character.hide(Template.characters.marie);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0014);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0006);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0015);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0007);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0016);
                // Novel Page
                Template.ƒS.Text.setClass("novel-page");
                Template.ƒS.Text.print("3-5-8-1");
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0017);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0008);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0018);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0009);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0019);
                await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0010);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0020);
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0021);
                let thirdDialogueElementOptions = {
                    iSayYes: "Kriminalamt anrufen",
                    iSayNo: "Raum durchsuchen"
                };
                let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementOptions, "auswahl");
                switch (secondDialogueElement) {
                    case secondDialogueElementOptions.iSayYes:
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0006);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0007);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0008);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0009);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0010);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0011);
                        break;
                    case thirdDialogueElementOptions.iSayNo:
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
                        await Template.ƒS.Speech.tell(Template.characters.violet, text.violet.T0005);
                        await Template.ƒS.Character.hide(Template.characters.violet);
                        await Template.ƒS.update(1);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0004);
                        await Template.ƒS.Character.animate(Template.characters.safe, Template.characters.safe.pose.normal, Template.fromCenterToCenter());
                        Template.ƒS.Inventory.add(Template.items.safe);
                        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0005);
                        break;
                        break;
                }
                await Template.ƒS.Character.animate(Template.characters.camille, Template.characters.camille.pose.happy, Template.fromLeftToRight());
                await Template.ƒS.Character.hide(Template.characters.camille);
                await Template.ƒS.update(1);
        }
    }
    Template.Scene3 = Scene3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene4() {
        console.log("FudgeStory Template Scene4 starting");
        let text = {
            camille: {
                T0000: "Als erstes werde ich heute die Personen die Mr. Grisham kannten befragen. ",
                T0001: "Guten Morgen Mr. Smith.",
                T0002: "Was für schreckliche Neuigkeiten, ich werde das Paket sofort in Augenschein nehmen.",
                T0003: "Was soll ich denn als erstes untersuchen?",
                T0004: "",
            },
            smith: {
                T0000: "Guten Morgen Mrs. Beuford, ich habe Ihr Paket entgegen genommen und der Inhalt bestätigt einen Mord.",
                T0001: "Sie haben also tatsächlich einen Fall!",
                T0002: "Machen Sie das, es könnte noch sehr interessant werden.",
            },
        };
        await Template.ƒS.Location.show(Template.locations.buero);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0000);
        await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0001);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0002);
        await Template.ƒS.Speech.tell(Template.characters.smith, text.smith.T0002);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0003);
        let firstDialogueElementOptions = {
            iSayYes: "Messer",
            iSayNo: "Laborbericht",
        };
        // let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        // switch (firstDialogueElement) {
        //   case firstDialogueElementOptions.iSayYes:
        //     await ƒS.Character.animate(characters.knife, characters.knife.pose.normal, fromCenterToCenter());
        //     // Novel Page
        //     ƒS.Text.setClass("novel-page");
        //     //ƒS.Text.addClass("text");
        //     ƒS.Text.print("Das Messer ist nicht die Mordwaffe, die Blutspuren sind Schweineblut.");
        //     ƒS.Inventory.add(items.knife);
        //     await ƒS.Character.hide(characters.knife);
        //     await ƒS.update(1);
        //     break;
        //   case firstDialogueElementOptions.iSayNo:
        // await ƒS.Character.animate(characters.labor, characters.labor.pose.normal, fromCenterToCenter());
        // // Novel Page
        // ƒS.Text.setClass("novel-page");
        // //ƒS.Text.addClass("text");
        // ƒS.Text.print("Das Messer ist nicht die Mordwaffe, die Blutspuren sind Schweineblut.");
        // ƒS.Inventory.add(items.labor);
        // await ƒS.Character.hide(characters.labor);
        // await ƒS.update(1);
        //   break;
        // }
        let delay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(5)]);
        let loopCount = 0;
        while (loopCount < 2) {
            let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
            if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
                await Template.ƒS.Character.animate(Template.characters.knife, Template.characters.knife.pose.normal, Template.fromCenterToCenter());
                // Novel Page
                Template.ƒS.Text.setClass("novel-page");
                //ƒS.Text.addClass("text");
                Template.ƒS.Text.print("Das Messer ist nicht die Mordwaffe, die Blutspuren sind Schweineblut.");
                Template.ƒS.Inventory.add(Template.items.knife);
                await Template.ƒS.Character.hide(Template.characters.knife);
                await Template.ƒS.update(1);
                delete firstDialogueElementOptions.iSayYes;
                await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
                // await delay();
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
                await Template.ƒS.Character.animate(Template.characters.labor, Template.characters.labor.pose.normal, Template.fromCenterToCenter());
                // Novel Page
                Template.ƒS.Text.setClass("novel-page");
                //ƒS.Text.addClass("text");
                Template.ƒS.Text.print("Der Laborbericht ergibt, das Mr. Grisham einen Herzinfarkt hatte und ihm die Pulsadern erst nach seinem Tod aufgeschnitten wurden.");
                Template.ƒS.Inventory.add(Template.items.labor);
                await Template.ƒS.Character.hide(Template.characters.labor);
                await Template.ƒS.update(1);
                delete firstDialogueElementOptions.iSayNo;
                // await delay();
            }
            await delay();
            loopCount++;
        }
        await Template.ƒS.Character.animate(Template.characters.camille, Template.characters.camille.pose.happy, Template.fromLeftToRight());
        await Template.ƒS.Character.hide(Template.characters.camille);
        await Template.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    Template.Scene4 = Scene4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene5() {
        console.log("FudgeStory Template Scene5 starting");
        //   if(wen)
        //     let whlen{}
        let zusprechen = {
            marie: "Marie",
            james: "James",
            luna: "Luna",
            violet: "Violet"
        };
        if (Template.dataForSave.gesprochen.marie) {
            delete zusprechen.marie;
        }
        // if(d)
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await Template.ƒS.Location.show(Template.locations.wohnzimmer);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        if (Object.keys(zusprechen).length > 0) {
            let antwort = await Template.ƒS.Menu.getInput(zusprechen, "auswahl");
            if (antwort === "Marie") {
                return "scene6";
            }
            else {
                return "scene5";
            }
        }
        else {
            return "BadEnding";
        }
    }
    Template.Scene5 = Scene5;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function james() {
        console.log("FudgeStory Template james starting");
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await Template.ƒS.Location.show(Template.locations.wohnzimmer);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        // dataForSave.gesprochen mit x = true
        Template.dataForSave.gesprochen.james = true;
    }
    Template.james = james;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function violet() {
        console.log("FudgeStory Template violet starting");
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await Template.ƒS.Location.show(Template.locations.wohnzimmer);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.camille, Template.characters.camille.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0000);
        await Template.ƒS.Speech.tell(Template.characters.camille, text.camille.T0001);
        // dataForSave.gesprochen mit x = true
        Template.dataForSave.gesprochen.violet = true;
    }
    Template.violet = violet;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map