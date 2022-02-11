"use strict";
var MurderMystery;
(function (MurderMystery) {
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
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.geld, MurderMystery.characters.geld.pose.normal, MurderMystery.fromCenterToCenter());
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        // Novel Page
        MurderMystery.ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        MurderMystery.ƒS.Text.print("34 Worlington Street");
        MurderMystery.ƒS.Inventory.add(MurderMystery.items.money);
        //await ƒS.Inventory.open();
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren"
        };
        let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0000);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0001);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0002);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0003);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0004);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                break;
            case firstDialogueElementOptions.iSayNo:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                break;
        }
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
        //dataForSave.points = 50;
        //console.log(dataForSave.points);
        //await ƒS.Speech.tell(characters.camille, "Helloo");
        //const t = await ƒS.Inventory.open();
        //console.log(t)
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        await MurderMystery.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    MurderMystery.BadEnding = BadEnding;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.geld, MurderMystery.characters.geld.pose.normal, MurderMystery.fromCenterToCenter());
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        // Novel Page
        MurderMystery.ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        MurderMystery.ƒS.Text.print("34 Worlington Street");
        MurderMystery.ƒS.Inventory.add(MurderMystery.items.money);
        //await ƒS.Inventory.open();
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren"
        };
        let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0000);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0001);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0002);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0003);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0004);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                break;
            case firstDialogueElementOptions.iSayNo:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                break;
        }
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
        //dataForSave.points = 50;
        //console.log(dataForSave.points);
        //await ƒS.Speech.tell(characters.camille, "Helloo");
        //const t = await ƒS.Inventory.open();
        //console.log(t)
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        await MurderMystery.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    MurderMystery.GoodEnding = GoodEnding;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundTheme, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.Startscreen);
        await MurderMystery.ƒS.update(2);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, "Willkommen zur Visual Novel 'Murder Mystery'.");
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positions.bottomcenter);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0003, false);
        MurderMystery.data.protagonist.name = await MurderMystery.ƒS.Speech.getInput();
        await MurderMystery.ƒS.update(1);
        MurderMystery.characters.camille.name = MurderMystery.data.protagonist.name;
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, MurderMystery.data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem Fall beginnen.", true);
        MurderMystery.ƒS.Character.hideAll();
        MurderMystery.ƒS.Speech.clear();
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundTheme, 0, 0.2, true);
        await MurderMystery.ƒS.update(2);
    }
    MurderMystery.Introduction = Introduction;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    MurderMystery.ƒ = FudgeCore;
    MurderMystery.ƒS = FudgeStory;
    console.log("Template");
    //define transition
    MurderMystery.transitions = {
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
    MurderMystery.sound = {
        //music
        backgroundTheme: "./Audio/Fireplace.wav",
        //sound
        clock: "./Audio/Old Clock.wav",
        safe: "./Audio/Safe1.wav",
        safe2: "./Audio/Safe2.wav",
    };
    //Items
    MurderMystery.items = {
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
    MurderMystery.locations = {
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
    MurderMystery.data = {
        protagonist: {
            name: "",
        },
        score: 0,
        state: {
            a: 1,
        },
    };
    // Charaktere
    MurderMystery.characters = {
        narrator: {
            name: "",
        },
        smith: {
            name: "Mr. Smith",
        },
        camille: {
            name: MurderMystery.data.protagonist.name,
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                angry: "",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        violet: {
            name: "Violet Grisham: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Nina.png",
                happy: "./Images/Characters/Nina.png",
                upset: "",
            },
        },
        luna: {
            name: "Luna Grisham: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        james: {
            name: "James Taylor: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        marie: {
            name: "Marie: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Luna.png",
                happy: "./Images/Characters/Luna.png",
                upset: "",
            },
        },
        schlüssel: {
            name: "schlüssel",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Schluessel.png",
            },
        },
        geld: {
            name: "Geld",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Geld.png",
            },
        },
        buch: {
            name: "Tagebuch",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Tagebuch.png",
            },
        },
        safe: {
            name: "Safe",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Safe.png",
            },
        },
        knife: {
            name: "Messer",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Messer.png",
            },
        },
        poison: {
            name: "Gift",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Gift.png",
            },
        },
        labor: {
            name: "Laborbericht",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Laborbericht.png",
            },
        },
    };
    //Animation
    function fromLeftToRight() {
        return {
            start: { translation: MurderMystery.ƒS.positions.bottomleft },
            end: { translation: MurderMystery.ƒS.positions.bottomright },
            duration: 2,
            playmode: MurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MurderMystery.fromLeftToRight = fromLeftToRight;
    function fromleftToCenter() {
        return {
            start: { translation: MurderMystery.ƒS.positions.bottomleft },
            end: { translation: MurderMystery.ƒS.positions.bottomcenter },
            duration: 1.5,
            playmode: MurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MurderMystery.fromleftToCenter = fromleftToCenter;
    function fromlefterToLeft() {
        return {
            start: { translation: MurderMystery.ƒS.positions.bottomleft },
            end: { translation: MurderMystery.ƒS.positionPercent(31, 100) },
            duration: 1,
            playmode: MurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MurderMystery.fromlefterToLeft = fromlefterToLeft;
    function fromCenterToCenter() {
        return {
            start: { translation: MurderMystery.ƒS.positions.center, scaling: new MurderMystery.ƒS.Position(0.2, 0.2) },
            end: { translation: MurderMystery.ƒS.positions.center, scaling: new MurderMystery.ƒS.Position(0.2, 0.2) },
            duration: 2,
            playmode: MurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MurderMystery.fromCenterToCenter = fromCenterToCenter;
    MurderMystery.dataForSave = {
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
        MurderMystery.ƒS.Sound.setMasterVolume(volume);
    }
    MurderMystery.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        MurderMystery.ƒS.Sound.setMasterVolume(volume);
    }
    MurderMystery.decrementSound = decrementSound;
    function showCredits() {
        MurderMystery.ƒS.Text.addClass("credits");
        MurderMystery.ƒS.Text.print("Die Visual Novel wurde mit FudgeStory erstellt." +
            "<br/>" +
            "Von Leonie Schwall" +
            "<br/>" +
            "Die Elemente wurden selbst gezeichnet." +
            "<br/>");
    }
    MurderMystery.showCredits = showCredits;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await MurderMystery.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await MurderMystery.ƒS.Progress.load();
                break;
            case inGameMenu.volumeup:
                incrementSound();
                break;
            case inGameMenu.volumedown:
                decrementSound();
                break;
            case inGameMenu.inventar:
                await MurderMystery.ƒS.Inventory.open();
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
            case MurderMystery.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await MurderMystery.ƒS.Progress.save();
                break;
            case MurderMystery.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await MurderMystery.ƒS.Progress.load();
                break;
            case MurderMystery.ƒ.KEYBOARD_CODE.M:
                if (menu) {
                    console.log("Close");
                    MurderMystery.gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    MurderMystery.gameMenu.open();
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
        MurderMystery.gameMenu = MurderMystery.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        //Szenen aufrufen
        let scenes = [
            { id: "introduction", scene: MurderMystery.Introduction, name: "Introduction", },
            { id: "scene1", scene: MurderMystery.Scene1, name: "Scene1" },
            { id: "scene2", scene: MurderMystery.Scene2, name: "Scene2" },
            { id: "scene3", scene: MurderMystery.Scene3, name: "Scene3" },
            { id: "scene4", scene: MurderMystery.Scene4, name: "Scene4" },
            { id: "scene5", scene: MurderMystery.Scene5, name: "Scene5" },
            { id: "violet", scene: MurderMystery.violet, name: "violet", next: "scene5" },
            { id: "james", scene: MurderMystery.james, name: "james", next: "scene5" },
            { id: "luna", scene: MurderMystery.luna, name: "luna", next: "scene5" },
            { id: "marie", scene: MurderMystery.marie, name: "marie", next: "scene5" },
            { id: "GoodEnding", scene: MurderMystery.GoodEnding, name: "GoodEnding" },
            { id: "BadEnding", scene: MurderMystery.BadEnding, name: "BadEnding" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        MurderMystery.dataForSave = MurderMystery.ƒS.Progress.setData(MurderMystery.dataForSave, uiElement);
        // start the sequence
        // ƒS.Progress.setData(data);
        MurderMystery.ƒS.Progress.go(scenes);
    }
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.geld, MurderMystery.characters.geld.pose.normal, MurderMystery.fromCenterToCenter());
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        // Novel Page
        MurderMystery.ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        MurderMystery.ƒS.Text.print("34 Worlington Street");
        MurderMystery.ƒS.Inventory.add(MurderMystery.items.money);
        //await ƒS.Inventory.open();
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.geld);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Anruf annehmen",
            iSayNo: "Anruf ignorieren"
        };
        let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0000);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0001);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0002);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0003);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0004);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                break;
            case firstDialogueElementOptions.iSayNo:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                break;
        }
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
        //dataForSave.points = 50;
        //console.log(dataForSave.points);
        //await ƒS.Speech.tell(characters.camille, "Helloo");
        //const t = await ƒS.Inventory.open();
        //console.log(t)
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        await MurderMystery.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    MurderMystery.Scene1 = Scene1;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.haus);
        await MurderMystery.ƒS.update(MurderMystery.transitions.clock.duration, MurderMystery.transitions.clock.alpha, MurderMystery.transitions.clock.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positions.bottomleft);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.james, MurderMystery.characters.james.pose.happy, MurderMystery.ƒS.positions.bottomright);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.james);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positions.bottomright);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0005);
    }
    MurderMystery.Scene2 = Scene2;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.bibliothek);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positions.bottomright);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0004);
        let firstDialogueElementOptions = {
            iSayYes: "Raum durchsuchen",
            iSayNo: "Violet weiter befragen"
        };
        let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0005);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.safe, MurderMystery.characters.safe.pose.normal, MurderMystery.fromCenterToCenter());
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.safe);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.safe);
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                let secondDialogueElementOptions = {
                    iSayYes: "Kriminalamt anrufen",
                    iSayNo: "Violet befragen"
                };
                let secondDialogueElement = await MurderMystery.ƒS.Menu.getInput(secondDialogueElementOptions, "auswahl");
                switch (secondDialogueElement) {
                    case secondDialogueElementOptions.iSayYes:
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0000);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0001);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0002);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0003);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0004);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                        break;
                    case secondDialogueElementOptions.iSayNo:
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                        await MurderMystery.ƒS.Character.show(MurderMystery.characters.marie, MurderMystery.characters.marie.pose.happy, MurderMystery.ƒS.positions.bottomright);
                        await MurderMystery.ƒS.update(1);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0000);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.marie);
                        await MurderMystery.ƒS.update(1);
                        await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positions.bottomright);
                        await MurderMystery.ƒS.update(1);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0006);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0007);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0016);
                        // Novel Page
                        MurderMystery.ƒS.Text.setClass("novel-page");
                        MurderMystery.ƒS.Text.print("3-5-8-1");
                        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.schlüssel, MurderMystery.characters.schlüssel.pose.normal, MurderMystery.fromCenterToCenter());
                        MurderMystery.ƒS.Inventory.add(MurderMystery.items.key);
                        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.schlüssel);
                        await MurderMystery.ƒS.update(1);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0017);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0008);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0018);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0009);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0019);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0010);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0020);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0021);
                        break;
                }
            case firstDialogueElementOptions.iSayNo:
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                await MurderMystery.ƒS.Character.show(MurderMystery.characters.marie, MurderMystery.characters.marie.pose.happy, MurderMystery.ƒS.positions.bottomright);
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0000);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.marie);
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0016);
                // Novel Page
                MurderMystery.ƒS.Text.setClass("novel-page");
                MurderMystery.ƒS.Text.print("3-5-8-1");
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0017);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0008);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0018);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0019);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0020);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0021);
                let thirdDialogueElementOptions = {
                    iSayYes: "Kriminalamt anrufen",
                    iSayNo: "Raum durchsuchen"
                };
                let thirdDialogueElement = await MurderMystery.ƒS.Menu.getInput(thirdDialogueElementOptions, "auswahl");
                switch (secondDialogueElement) {
                    case secondDialogueElementOptions.iSayYes:
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0000);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0001);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0002);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0003);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, text.narrator.T0004);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                        break;
                    case thirdDialogueElementOptions.iSayNo:
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0005);
                        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
                        await MurderMystery.ƒS.update(1);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
                        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.safe, MurderMystery.characters.safe.pose.normal, MurderMystery.fromCenterToCenter());
                        MurderMystery.ƒS.Inventory.add(MurderMystery.items.safe);
                        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                        break;
                        break;
                }
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
                await MurderMystery.ƒS.update(1);
        }
    }
    MurderMystery.Scene3 = Scene3;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        let firstDialogueElementOptions = {
            iSayYes: "Messer",
            iSayNo: "Laborbericht",
        };
        let delay = MurderMystery.ƒS.Progress.defineSignal([() => MurderMystery.ƒS.Progress.delay(5)]);
        let loopCount = 0;
        while (loopCount < 2) {
            let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
            if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.knife, MurderMystery.characters.knife.pose.normal, MurderMystery.fromCenterToCenter());
                // Novel Page
                MurderMystery.ƒS.Text.setClass("novel-page");
                //ƒS.Text.addClass("text");
                MurderMystery.ƒS.Text.print("Das Messer ist nicht die Mordwaffe, die Blutspuren sind Schweineblut.");
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.knife);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.knife);
                await MurderMystery.ƒS.update(1);
                delete firstDialogueElementOptions.iSayYes;
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
                // await delay();
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.labor, MurderMystery.characters.labor.pose.normal, MurderMystery.fromCenterToCenter());
                // Novel Page
                MurderMystery.ƒS.Text.setClass("novel-page");
                //ƒS.Text.addClass("text");
                MurderMystery.ƒS.Text.print("Der Laborbericht ergibt, das Mr. Grisham einen Herzinfarkt hatte und ihm die Pulsadern erst nach seinem Tod aufgeschnitten wurden.");
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.labor);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.labor);
                await MurderMystery.ƒS.update(1);
                delete firstDialogueElementOptions.iSayNo;
                // await delay();
            }
            await delay();
            loopCount++;
        }
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        await MurderMystery.ƒS.update(1);
        // return "";
        // if (dataForSave.points === 50) {
        // return "Introduction";
        // return SzenenFunktionsname();
        //}
    }
    MurderMystery.Scene4 = Scene4;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
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
        if (MurderMystery.dataForSave.gesprochen.marie) {
            delete zusprechen.marie;
        }
        if (MurderMystery.dataForSave.gesprochen.violet) {
            delete zusprechen.violet;
        }
        if (MurderMystery.dataForSave.gesprochen.james) {
            delete zusprechen.james;
        }
        if (MurderMystery.dataForSave.gesprochen.luna) {
            delete zusprechen.luna;
        }
        let text = {
            camille: {
                T0000: "Mit wem soll ich denn sprechen?",
            },
        };
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        if (Object.keys(zusprechen).length > 0) {
            let antwort = await MurderMystery.ƒS.Menu.getInput(zusprechen, "auswahl");
            if (antwort === "Violet") {
                return "violet";
            }
            if (antwort === "james") {
                return "james";
            }
            if (antwort === "luna") {
                return "luna";
            }
            if (antwort === "marie") {
                return "marie";
            }
        }
        else {
            return "scene6";
        }
    }
    MurderMystery.Scene5 = Scene5;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function james() {
        console.log("FudgeStory Template james starting");
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        // dataForSave.gesprochen mit x = true
        MurderMystery.dataForSave.gesprochen.james = true;
    }
    MurderMystery.james = james;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function luna() {
        console.log("FudgeStory Template luna starting");
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        // dataForSave.gesprochen mit x = true
        MurderMystery.dataForSave.gesprochen.luna = true;
    }
    MurderMystery.luna = luna;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function marie() {
        console.log("FudgeStory Template marie starting");
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        // dataForSave.gesprochen mit x = true
        MurderMystery.dataForSave.gesprochen.marie = true;
    }
    MurderMystery.marie = marie;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function violet() {
        console.log("FudgeStory Template violet starting");
        let text = {
            camille: {
                T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
                T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
            },
        };
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        // dataForSave.gesprochen mit x = true
        MurderMystery.dataForSave.gesprochen.violet = true;
    }
    MurderMystery.violet = violet;
})(MurderMystery || (MurderMystery = {}));
//# sourceMappingURL=MurderMystery.js.map