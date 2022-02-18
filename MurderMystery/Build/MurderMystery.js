"use strict";
var MurderMystery;
(function (MurderMystery) {
    async function BadEnding() {
        console.log("FudgeStory Template BadEnding starting");
        let text = {
            marie: {
                T0000: "Was wie bitte, ich habe das nicht getan.",
                T0001: "Was soll ich beweisen? Ich war es ja nicht.",
                T0002: "Verdächtig? Was habe ich denn getan?",
                T0003: "Was denn für Spuren? Ich wollte dort putzen und habe ihn schon tot aufgefunden.",
                T0004: "Welchen Grund hätte ich denn das zu täuschen?",
                T0005: "Ja ich liebe James, aber ich habe Mr. Grisham nicht umgebracht, das müssen Sie mir glauben.",
            },
            smith: {
                T0000: "Ms. Beuford ich habe schlechte Nachrichten für Sie.",
                T0001: "Heute morgen wurde Mrs. Grisham tot aufgefunden, ich befürchte wir haben den falschen Täter verhaftet.",
                T0002: "Leider ja, er ist allerdings untergetaucht.",
                T0003: "Nein das lagen Sie nicht, Marie hat zugegeben James geschützt zu haben, Sie lagen bei allem richtig.",
                T0004: "Keine Sorge, wir werden das schon wieder hinbekommen.",
            },
            camille: {
                T0000: "Marie, ich verdächtige Sie des Mordes an Mr. Grisham.",
                T0001: "Können Sie das denn beweisen, denn die Indizien zeigen alle auf Sie.",
                T0002: "Leider haben Sie kein Alibi und haben sich äußerst verdächtig verhalten.",
                T0003: "Sie haben zweimal geschrien an dem Morgen, ich vermute beim ersten Mal haben Sie Mr. Grisham gefunden.",
                T0004: "Und beim zweiten Mal, welches erst 3 Stunden später war erst James als Hilfe geholt.",
                T0005: "In diesen 3 Stunden hatten Sie genug Zeit den Mord als Selbstmord zu inszenieren und Ihre Spuren für den Mord zu verwischen.",
                T0006: "Ja das mag stimmen, aber nicht so wie später die Polizei aufgefunden hat.",
                T0007: "Das Blut an der Waffe war nämlich nicht von Mr. Grisham, sondern von einem Tier.",
                T0008: "Das ist die Frage hier.",
                T0009: "Ich vermute Sie sind in James verliebt und haben herausgefunden, dass Mr. Grisham sein Vater war.",
                T0010: "Da dieser ihn nicht anerkennen wollte haben Sie sich an Ihrem Chef gerächt um so James zu helfen.",
                T0011: "Nur leider erbt dieser nichts, da seine Familie in seinem Testament bestimmt an erster Stelle steht.",
                T0012: "Leider tue ich das nicht und werde Sie nun verhaften lassen.",
                T0013: "Was gibt es Mr. Smith?",
                T0014: "Oh nein, dann war es etwa doch James Taylor?",
                T0015: "Dann müssen wir Ihn finden.",
                T0016: "Lag ich etwa so daneben?",
                T0017: "Bei allem bis auf wer es tatsächlich war.",
                T0018: "Das hoffe ich, so kann ich meine Karriere nicht starten."
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundHaus, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.haus);
        await MurderMystery.ƒS.update(MurderMystery.transition.wipe.duration, MurderMystery.transition.wipe.alpha, MurderMystery.transition.wipe.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.marie, MurderMystery.characters.marie.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.marie);
        await MurderMystery.ƒS.update(1);
        // Novel Page
        MurderMystery.ƒS.Text.setClass("novel-page");
        MurderMystery.ƒS.Text.print("Einige Wochen später ...");
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(MurderMystery.transition.puzzle.duration, MurderMystery.transition.puzzle.alpha, MurderMystery.transition.puzzle.edge);
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.play(MurderMystery.sound.handy, 0.5, false);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0016);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0017);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0018);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        MurderMystery.ƒS.Speech.clear();
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundHaus, 0, 0.2, true);
    }
    MurderMystery.BadEnding = BadEnding;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function End() {
        console.log("FudgeStory End starting");
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.Startscreen);
        await MurderMystery.ƒS.update(2);
        MurderMystery.ƒS.Text.setClass("novel-page");
        MurderMystery.ƒS.Text.print("Ende");
        MurderMystery.ƒS.Speech.clear();
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0, 0.2, true);
        await MurderMystery.ƒS.update(2);
    }
    MurderMystery.End = End;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function GoodEnding() {
        console.log("FudgeStory Template GoodEnding starting");
        let text = {
            james: {
                T0000: "Wie bitte, das soll doch wohl ein Witz sein.",
                T0001: "Ach ja, Sie können mich gerne verhören so viel Sie wollen, ich sage nichts.",
                T0002: "Ja das ist wahr, aber das hat ja nichts mit dem Mord an ihm zu tun.",
                T0003: "Natürlich stehe ich nicht im Testament, schließlich wusste er bis vor ein paar Wochen nichts von mir.",
                T0004: "Er hat mich nicht gefeuert, aber es stimmt er wollte mich nicht hier haben.",
                T0005: "Ich habe ihn nicht vergiftet, er hat schließlich Selbstmord begangen.",
                T0006: "Natürlich, das war ja gefakt, aber vergiftet habe ich ihn nicht.",
                T0007: "Nein habe ich nicht, das haben Sie doch erzählt.",
                T0008: "Scheiße, na gut es stimmt ich habe ihn vergiftet.",
                T0009: "Umbringen wollte ich Ihn aber nicht, die Dosis war einfach zu hoch.",
                T0010: "Ich wollte Ihm einen Schreck einjagen und ihm zeigen das er auf mich zählen kann.",
                T0011: "Das habe ich gar nicht, ich glaube das war Marie."
            },
            camille: {
                T0000: "James Taylor ich verdächtige Sie dem Mordes an Mr. Grisham.",
                T0001: "Tun Sie nicht so, es gibt genügend Beweise die Sie überführen.",
                T0002: "Die Polizei ist schon auf dem Weg hierher.",
                T0003: "Da wäre ich mir nicht so sicher, ich weiß das Mr. Grisham Ihr Vater war und er sie nicht sehen wollte.",
                T0004: "Deshalb haben Sie eine Stelle hier angenommen, um ihn besser kennenzulernen.",
                T0005: "Ja, als Sie ihn aber zur Rede stellten haben Sie sich bestimmt gestritten, da er Sie nicht hier haben wollte.",
                T0006: "Er wollte Sie auch nicht in das Testament aufnehmen und das hat Ihnen gar nicht gepasst.",
                T0007: "Genau und als er es herusgefunden hatte, wollte er Sie feuern.",
                T0008: "Und dann haben Sie ihn vergiftet. Ihn loszuwerden hätte Ihnen zumindest nicht den Job gekostet und sie konnten hier weiterleben.",
                T0009: "Das er das nicht getan hat, müssten Sie eigentlich wissen.",
                T0010: "Woher wissen sie das es gefakt war? Haben Sie es etwa so aussehen lassen?",
                T0011: "Nein habe ich nicht Mr. Taylor.",
                T0012: "Ok, was wollten Sie dann damit bewirken?",
                T0013: "Nur ist dies gescheitert, aber warum haben sie dann Selbstmord vorgestäuscht?",
                T0014: "Das könnte sein, aber das muss nicht mehr Ihr Problem sein. Hiermit sind Sie verhaftet.",
                T0015: "Marie werde ich auch mitnehmen, das war mindestens Beihilfe zur Mordvertuschung."
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundHaus, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.haus);
        await MurderMystery.ƒS.update(MurderMystery.transition.wipe.duration, MurderMystery.transition.wipe.alpha, MurderMystery.transition.wipe.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.james, MurderMystery.characters.james.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
        MurderMystery.ƒS.Character.hideAll();
        MurderMystery.ƒS.Speech.clear();
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundHaus, 0, 0.2, true);
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
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.Startscreen);
        await MurderMystery.ƒS.update(2);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.narrator, "Willkommen zur Visual Novel 'Murder Mystery'.");
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(30, 100));
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
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0, 0.2, true);
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
    MurderMystery.transition = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/circle.jpg",
            edge: 1,
        },
        puzzle: {
            duration: 1,
            alpha: "./FreeTransitions/puzzle.png",
            edge: 1,
        },
        wipe: {
            duration: 1,
            alpha: "./FreeTransitions/2.jpg",
            edge: 1,
        },
        circle: {
            duration: 1,
            alpha: "./FreeTransitions/1.jpg",
            edge: 1,
        },
        wipe2: {
            duration: 1,
            alpha: "./FreeTransitions/3.png",
            edge: 1,
        },
    };
    MurderMystery.sound = {
        //music 
        backgroundBibliothek: "./Audio/backgroundBibliothek.wav",
        backgroundBuero: "./Audio/backgroundBuero.wav",
        backgroundEnde: "./Audio/backgroundEnde.wav",
        backgroundHaus: "./Audio/backgroundHaus.wav",
        backgroundKammer: "./Audio/backgroundKammer.wav",
        backgroundWohnzimmer: "./Audio/backgroundWohnzimmer.wav",
        //sound
        paper: "./Audio/paper1.wav",
        paper2: "./Audio/paper2.wav",
        safe: "./Audio/Safe1.wav",
        magie: "./Audio/magie.wav",
        handy: "./Audio/handy.wav",
        money: "./Audio/money.wav",
        anruf: "./Audio/call.wav",
        knife: "./Audio/knife.wav"
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
            description: "Todesursache Herzstillstand.",
            image: "./Images/Items/Laborbericht.png",
        },
        safe: {
            name: "Safe",
            description: "Safeinhalt ist unklar.",
            image: "./Images/Items/Safe.png",
        },
        book: {
            name: "Tagebuch",
            description: "James Taylor ist Grishams Sohn.",
            image: "./Images/Items/Tagebuch.png",
        },
        knife: {
            name: "Küchenmesser",
            description: "Keine Mordwaffe, denn das war Schweineblut.",
            image: "./Images/Items/Messer.png",
        },
        paper: {
            name: "Notizzettel",
            description: "James ist mein S",
            image: "./Images/Items/Notiz.png",
        },
        poison: {
            name: "Gift",
            description: "Mordwaffe",
            image: "./Images/Items/Gift.png",
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
            background: "./Images/background/Startscreen.jpg",
        },
        buero: {
            name: "Büro",
            background: "./Images/background/Buero.jpg",
        },
        bibliothek: {
            name: "Bibliothek/Tatort",
            background: "./Images/background/Bibliothek.jpg",
        },
        haus: {
            name: "Wohnsitz der Familie",
            background: "./Images/background/Haus.jpg",
        },
        kammer: {
            name: "Dienstbotenzimmer",
            background: "./Images/background/Kammer.jpg",
        },
        wohnzimmer: {
            name: "Wohnzimmer",
            background: "./Images/background/Wohnzimmer.jpg",
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
        kriminalamt: {
            name: "Kriminalamt",
        },
        smith: {
            name: "Mr. Smith",
        },
        camille: {
            name: MurderMystery.data.protagonist.name,
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                happy: "./Images/Characters/Camille.png",
            },
        },
        violet: {
            name: "Violet Grisham: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Violet.png",
            },
        },
        luna: {
            name: "Luna Grisham: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Luna.png",
            },
        },
        james: {
            name: "James Taylor: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/James.png",
            },
        },
        marie: {
            name: "Marie: ",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "./Images/Characters/Marie.png",
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
        notiz: {
            name: "Notiz",
            origin: MurderMystery.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Items/Notiz.png",
            },
        },
    };
    //Animation
    function fromLeftToRight() {
        return {
            start: { translation: MurderMystery.ƒS.positionPercent(15, 100) },
            end: { translation: MurderMystery.ƒS.positions.bottomright },
            duration: 2,
            playmode: MurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MurderMystery.fromLeftToRight = fromLeftToRight;
    function fromlefterToLeft() {
        return {
            start: { translation: MurderMystery.ƒS.positionPercent(75, 100) },
            end: { translation: MurderMystery.ƒS.positionPercent(100, 100) },
            duration: 1,
            playmode: MurderMystery.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    MurderMystery.fromlefterToLeft = fromlefterToLeft;
    function fromCenterToCenter() {
        return {
            start: { translation: MurderMystery.ƒS.positions.center, scaling: new MurderMystery.ƒS.Position(0.5, 0.5) },
            end: { translation: MurderMystery.ƒS.positions.center, scaling: new MurderMystery.ƒS.Position(0.5, 0.5) },
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
            "Die Hintergründe, Charaktere und Items wurden selbst gezeichnet." +
            "<br/>" +
            "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurrde." +
            "<br/>" +
            "Die Soundelemente wurden mit einer Envato Elements Lizenz lizensiert heruntergeladen" +
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
                const selectedItems = await MurderMystery.ƒS.Inventory.open();
                if (selectedItems && selectedItems.length > 0) {
                    selectedItems.forEach((s) => {
                        Object.keys(MurderMystery.items).forEach((i) => {
                            const item = MurderMystery.items[i];
                            if (item.name === s) {
                                MurderMystery.ƒS.Inventory.add(item);
                            }
                        });
                    });
                }
                break;
            case inGameMenu.credits:
                showCredits();
                break;
        }
    }
    let menu = true;
    MurderMystery.delay = MurderMystery.ƒS.Progress.defineSignal([() => MurderMystery.ƒS.Progress.delay(2)]);
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
            { id: "scene6", scene: MurderMystery.Scene6, name: "Scene6" },
            { id: "scene7", scene: MurderMystery.Scene7, name: "Scene7" },
            { id: "GoodEnding", scene: MurderMystery.GoodEnding, name: "GoodEnding", next: "End" },
            { id: "BadEnding", scene: MurderMystery.BadEnding, name: "BadEnding", next: "End" },
            { id: "End", scene: MurderMystery.End, name: "End" },
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
                T0000: "Guten Morgen Frau Beuford und Herzlich Willkommen bei uns im Team.",
                T0001: "Ich habe gerade einen unbekannten Anruf erhalten. Haben Sie ein Paket bekommen?",
                T0002: "Ah, dann gibt das ganze ja einen Sinn. Sie haben Ihren ersten Auftrag erhalten.",
                T0003: "Genau der Auftraggeber hat mir mitgeteilt, ich solle unbedingt Sie auf den Fall ansetzen",
                T0004: "Es geht um den Todesfall in der Familie Grisham.",
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
                T0007: "Ja, ich habe ein Paket erhalten, in dem eine Menge Geld lag und eine seltsame Notiz.",
                T0008: "Einen Auftrag? Ich habe nur eine Adresse und sonst nichts.",
                T0009: "Und um was es geht es?",
                T0010: "Grisham ,ich dachte das war Selbstmord.",
                T0011: "Alles klar Mr. Smith, ich werde mal vorbeischauen.",
                T0012: "Na dann los zu den Grishams!",
                T0013: "Hm nur eine Adresse, mal sehen wo das ist.",
                T0014: "Das ist ja der Todesfall der Grisham Familie. Das war aber doch ein Selbstmord.",
                T0015: "Schaden wird es wohl nicht mal vorbeizufahren, es scheint jemanden wichtig zu sein bei der Menge Geld."
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(MurderMystery.transition.puzzle.duration, MurderMystery.transition.puzzle.alpha, MurderMystery.transition.puzzle.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        MurderMystery.ƒS.Sound.play(MurderMystery.sound.money, 0.3, false);
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.geld, MurderMystery.characters.geld.pose.normal, MurderMystery.fromCenterToCenter());
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        // Novel Page
        MurderMystery.ƒS.Text.setClass("novel-page");
        MurderMystery.ƒS.Text.print("34 Worlington Street");
        MurderMystery.ƒS.Inventory.add(MurderMystery.items.money);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.geld);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        MurderMystery.ƒS.Sound.play(MurderMystery.sound.handy, 0.5, false);
        await MurderMystery.delay();
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
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0, 0.2, true);
        await MurderMystery.ƒS.update(1);
    }
    MurderMystery.Scene1 = Scene1;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function Scene2() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            camille: {
                T0000: "Guten Tag! Bin ich hier richtig bei den Grishams?",
                T0001: "Ich bin Detektivin und habe heute morgen den Auftrag bekommen hier nachzuforschen.",
                T0002: "Darf ich fragen wer Sie sind?",
                T0003: "Sehr angenehm Sie kennenzulernen.",
                T0004: "Wissen Sie vielleicht wer mich engagiert haben könnte?",
                T0005: "Ja das stimmt, dennoch wurde ich engagiert und würde mich gerne einmal umsehen wenn es Ihnen Recht ist.",
                T0006: "Sehr gerne, ich warte.",
                T0007: "Guten Tag Mrs. Grisham. Mein herzliches Beileid für Ihren Verlust.",
                T0008: "Ja das bin ich.",
                T0009: "Mord? Es wird doch angenommen das es ein Selbstmord war.",
                T0010: "Haben Sie mich dann engagiert?",
            },
            james: {
                T0000: "Guten Tag, ja das sind sie.",
                T0001: "Was kann ich für Sie tun?",
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
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundHaus, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.haus);
        await MurderMystery.ƒS.update(MurderMystery.transition.wipe.duration, MurderMystery.transition.wipe.alpha, MurderMystery.transition.wipe.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.james, MurderMystery.characters.james.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
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
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.james, MurderMystery.characters.james.pose.happy, MurderMystery.fromlefterToLeft());
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.james);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
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
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.fromlefterToLeft());
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundHaus, 0, 0.2, true);
    }
    MurderMystery.Scene2 = Scene2;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function Scene3() {
        console.log("FudgeStory Template Scene3 starting");
        let text = {
            violet: {
                T0000: "Hier wurde mein Mann gefunden.",
                T0001: "Da war überall Blut und es lag ein Messer neben ihm auf dem Boden.",
                T0002: "Es war schrecklich, aber William würde nie so etwas tun, dafür wäre er viel zu ängstlich.",
                T0003: "Er wollte uns nicht alleine lassen mit seiner Firma. ",
                T0004: "Er war ein Workaholic und musste alles selbst machen, damit es perfekt ist.",
                T0005: "Natürlich, was möchten Sie wissen?",
                T0006: "Das war Marie unser Hausmädchen.",
                T0007: "Ich denke die arme hat einen schlimmen Schock davon bekommen.",
                T0008: "Laut den Sanitätern war er schon in der Nacht gestorben und er ist am Morgen gefunden worden.",
                T0009: "Brauchen Sie sonst noch etwas?",
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
                T0012: "Mrs. Grisham, kann ich Ihnen noch einige Fragen stellen?",
                T0013: "Wer hat Ihren Mann gefunden nach seinem Tod?",
                T0014: "Das kann ich mir vorstellen.",
                T0015: "War Ihr Mann da schon Tot?",
                T0016: "Vielen Dank, das hat mir schon geholfen.",
                T0017: "Nein, ich werde morgen noch einmal vorbeikommen und die Belegschaft befragen und am liebsten auch Ihre Familie.",
                T0018: "Kein Problem.",
            },
            Kriminalamt: {
                T0000: "Guten Tag, was kann ich für Sie tun?",
                T0001: "Mrs. Grisham hat uns schon informiert, dass sie die Informationen erhalten dürfen.",
                T0002: "Natürlich, ich kann Ihnen auch die Tatwaffe schicken und sobald der Laborbericht da ist, diesen auch.",
                T0003: "Ich schicke Ihnen alles sofort zu.",
                T0004: "Einen schönen Tag noch.",
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBibliothek, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.bibliothek);
        await MurderMystery.ƒS.update(MurderMystery.transition.circle.duration, MurderMystery.transition.circle.alpha, MurderMystery.transition.circle.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
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
            iSayNo: "Kriminalamt anrufen",
            iSayOk: "Violet befragen"
        };
        let loopCount = 0;
        while (loopCount < 3) {
            let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
            if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.safe, MurderMystery.characters.safe.pose.normal, MurderMystery.fromCenterToCenter());
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.safe);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.safe);
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                delete firstDialogueElementOptions.iSayYes;
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
                await MurderMystery.ƒS.update(1);
                MurderMystery.ƒS.Sound.play(MurderMystery.sound.anruf, 0.5, false);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.kriminalamt, text.Kriminalamt.T0000);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.kriminalamt, text.Kriminalamt.T0001);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.kriminalamt, text.Kriminalamt.T0002);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.kriminalamt, text.Kriminalamt.T0003);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.kriminalamt, text.Kriminalamt.T0004);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                delete firstDialogueElementOptions.iSayNo;
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayOk"]) {
                await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
                await MurderMystery.ƒS.update(1);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0005);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0008);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0016);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0017);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0018);
                delete firstDialogueElementOptions.iSayOk;
            }
            loopCount++;
        }
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.fromLeftToRight());
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.camille);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBibliothek, 0, 0.2, true);
        await MurderMystery.ƒS.update(1);
    }
    MurderMystery.Scene3 = Scene3;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function Scene4() {
        console.log("FudgeStory Template Scene4 starting");
        let text = {
            camille: {
                //T0000: "Als erstes werde ich heute die Personen die Mr. Grisham kannten befragen. ",
                T0001: "Guten Morgen Mr. Smith.",
                T0002: "Was für schreckliche Neuigkeiten, ich werde das Paket sofort in Augenschein nehmen.",
                T0003: "Was soll ich denn untersuchen?",
            },
            smith: {
                T0000: "Guten Morgen Mrs. Beuford, ich habe Ihr Paket entgegen genommen und der Inhalt bestätigt einen Mord.",
                T0001: "Sie haben also tatsächlich einen Fall!",
                T0002: "Machen Sie das, es könnte noch sehr interessant werden.",
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(MurderMystery.transition.puzzle.duration, MurderMystery.transition.puzzle.alpha, MurderMystery.transition.puzzle.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.update(1);
        //await ƒS.Speech.tell(characters.camille, text.camille.T0000);
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
                MurderMystery.ƒS.Sound.play(MurderMystery.sound.knife, 0.5, false);
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.knife, MurderMystery.characters.knife.pose.normal, MurderMystery.fromCenterToCenter());
                // Novel Page
                MurderMystery.ƒS.Text.setClass("novel-page");
                MurderMystery.ƒS.Text.print("Das Messer ist nicht die Mordwaffe, die Blutspuren sind Schweineblut.");
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.knife);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.knife);
                await MurderMystery.ƒS.update(1);
                delete firstDialogueElementOptions.iSayYes;
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
                MurderMystery.ƒS.Sound.play(MurderMystery.sound.paper2, 0.5, false);
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
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0, 0.2, true);
        await MurderMystery.ƒS.update(1);
    }
    MurderMystery.Scene4 = Scene4;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function Scene5() {
        console.log("FudgeStory Template Scene5 starting");
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
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        if (Object.keys(zusprechen).length > 0) {
            let antwort = await MurderMystery.ƒS.Menu.getInput(zusprechen, "auswahl");
            console.log(antwort);
            if (antwort === "Violet") {
                return "violet";
            }
            if (antwort === "James") {
                return "james";
            }
            if (antwort === "Luna") {
                return "luna";
            }
            if (antwort === "Marie") {
                return "marie";
            }
        }
        else {
            return "scene6";
        }
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0, 0.2, true);
    }
    MurderMystery.Scene5 = Scene5;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function Scene6() {
        console.log("FudgeStory Template Scene6 starting");
        let text = {
            camille: {
                T0000: "Vielen Dank für Ihre Mitarbeit.",
                T0001: "Ich würde mich nun gerne noch einmal in den Räumen umsehen.",
                T0002: "Hoffentlich finde ich hier einen Hinweis, der es eindeutig macht wer der Täter ist.",
                T0003: "Tatsächlich, hinter den Büchern im Regal sieht es aus als wäre  hier etwas versteckt.",
                T0004: "Ist das etwa Gift?",
                T0005: "Ich schaue mal im Internet nach was das sein könnte.",
                T0006: "Das muss eine flüssige Version davon sein ",
                T0007: "Das würde ja bedeuten Mr. Grisham wurde vergiftet.",
                T0008: "Aber warum hat er sich dann noch die Pulsadern aufgeschnitten?",
                T0009: "Mal sehen ob die beiden Angestellten etwas in Ihren Räumen haben das mir weiterhilft.",
                T0010: "Hm hier liegt nichts auffälliges herum.",
                T0011: "Nur ein Tagebuch, da sollte ich schon mal hereinsehen, hoffentlich steht da nichts allzu privates drin.",
                T0012: "Das ist ja gar nicht von Marie, aber wem gehört es?",
                T0013: "Oh hier ist ein interessanter Eintrag.",
                T0014: "Das bedeutet James Taylor ist eigentlich Mr. Grishams Sohn.",
                T0015: "Mr. Grisham wusste das er einen Sohn hatte, aber nicht wer es war.",
                T0016: "James wusste das er sein Vater war.",
                T0017: "War er wütend deswegen, wollte er vielleicht sogar sein Erbe haben?",
                T0018: "Mh schade, hier im Wohnzimmer ist nichts ungewöhnliches zu finden.",
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        let firstDialogueElementOptions = {
            iSayYes: "Bibliothek",
            iSayNo: "Dienstbotenkammer",
            iSayOk: "Wohnzimmer"
        };
        let loopCount = 0;
        while (loopCount < 3) {
            let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
            if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
                await MurderMystery.ƒS.Location.show(MurderMystery.locations.bibliothek);
                await MurderMystery.ƒS.update(MurderMystery.transition.circle.duration, MurderMystery.transition.circle.alpha, MurderMystery.transition.circle.edge);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
                MurderMystery.ƒS.Sound.play(MurderMystery.sound.magie, 0.5, false);
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.poison, MurderMystery.characters.poison.pose.normal, MurderMystery.fromCenterToCenter());
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.poison);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.poison);
                await MurderMystery.ƒS.update(1);
                // Novel Page
                MurderMystery.ƒS.Text.setClass("novel-page");
                MurderMystery.ƒS.Text.print("Die lila Pflanze Wolfswurz ist hochgradig giftig und löst innerhalb von 15 Minuten Herzrythmusstörungen aus.");
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
                delete firstDialogueElementOptions.iSayYes;
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
                await MurderMystery.ƒS.Location.show(MurderMystery.locations.kammer);
                await MurderMystery.ƒS.update(MurderMystery.transition.wipe2.duration, MurderMystery.transition.wipe2.alpha, MurderMystery.transition.wipe2.edge);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
                MurderMystery.ƒS.Sound.play(MurderMystery.sound.paper2, 0.5, false);
                await MurderMystery.ƒS.Character.animate(MurderMystery.characters.buch, MurderMystery.characters.buch.pose.normal, MurderMystery.fromCenterToCenter());
                MurderMystery.ƒS.Sound.play(MurderMystery.sound.paper, 0.5, false);
                MurderMystery.ƒS.Inventory.add(MurderMystery.items.book);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
                await MurderMystery.ƒS.Character.hide(MurderMystery.characters.buch);
                await MurderMystery.ƒS.update(1);
                MurderMystery.ƒS.Text.setClass("novel-page");
                MurderMystery.ƒS.Text.print("Es ist so schade das Grisham James nicht als seinen Sohn annehmen möchte, so muss der arme Junge ohne Vater aufwachsen.");
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0016);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0017);
                delete firstDialogueElementOptions.iSayNo;
            }
            if (firstDialogueElement === firstDialogueElementOptions["iSayOk"]) {
                MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
                await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
                await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
                await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0018);
                delete firstDialogueElementOptions.iSayOk;
            }
            loopCount++;
        }
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0, 0.2, true);
    }
    MurderMystery.Scene6 = Scene6;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function Scene7() {
        console.log("FudgeStory Template Scene7 starting");
        let text = {
            smith: {
                T0000: "Guten Tag Ms. Beuford, haben Sie den Fall mittlerweile gelöst?",
                T0001: "Wir können den Fall gerne durchegehen, vielleicht kommt Ihnen dann eine Idee.",
                T0002: "Wie widersprechen sich die beiden?",
                T0003: "Seltsam, aber vielleicht war sie ja diejenige mit dem Messer.",
                T0004: "Haben sie ein Motiv von Ihr?",
                T0005: "Das ist allerdings ein sehr schwaches Motiv.",
                T0006: "Bleibt noch der Verwalter. Hätte er ein Motiv?",
                T0007: "Hm, aber das ist noch kein Grund für einen Mord. Vielleicht hatten sie einen Streit?",
                T0008: "Dann vielleicht einfach wegen dem Erbe? Oder es hat etwas mit der Mutter zu tun.",
                T0009: "Wie meinen Sie das?",
                T0010: "Ja aber das ist ja noch kein Motiv für Luna.",
                T0011: "Wäre möglich, Sie müssen wissen ob Sie weiter ermitteln wollen oder den Fall als abgeschlossen sehen und jemanden verdächtigen."
            },
            camille: {
                T0000: "Hallo Mr. Smith.",
                T0001: "Leider nicht, ich habe einige Motive und Indizien gesammelt, kann Sie aber nicht zusammensetzen.",
                T0002: "Sehr gerne, ich zähle auf was ich gefunden habe.",
                T0003: "Mr. Grisham wurde morgens von Marie dem Hausmädchen gefunden.",
                T0004: "Wann genau, da wiedersprechen sich Marie und James der Verwalter.",
                T0005: "Marie sagt Sie hätte Mr. Grisham gegen sieben gefunden und dann geschrien.",
                T0006: "James Taylor behauptet allerdings sie zweimal schreien gehört zu haben, einmal um sechs und dann drei Stunden später als sie ihn geholt hat.",
                T0007: "Was sie in der Zeit gemacht hat weiß ich nicht genau.",
                T0008: "Das könnte sein, aber warum sollte sie das postmortem tun?",
                T0009: "Naja sie konnte Mr. Grisham wohl nicht sonderlich leiden, da er streng war.",
                T0010: "Genau, die Tochter Luna war zum Todeszeitpunkt zwar Zuhause, allerdings hat sie kein Motiv und wirkt auch nicht wie ein Täter.",
                T0011: "Sie würde ich ausschließen, genauso wie Mrs. Grisham, die erst nach dem Todeszeitpunkt zurückkam.",
                T0012: "Ich vermute er ist der uneheliche Sohn von Mr. Grisham und hegte daher einen Groll.",
                T0013: "Mr. Grisham wusste von einem Sohn allerdings bezweifle ich das er wusste das James sein Sohn ist.",
                T0014: "Das könnte sein, allerdings kam ja heraus das Mr. Grisham vergiftet wurde und das ist keine Tat im Affekt.",
                T0015: "Ja über die weiß ich nichts.",
                T0016: "Denken Sie es könnte einen Tat aus Eifersucht sein?",
                T0017: "Marie ist wohl in James verliebt, das behauptet Luna. Was wenn Mr. Grisham ebenfalls in Marie verliebt war.",
                T0018: "Nein aber für James, der vielleicht nicht will das noch ein uneheliches Kind leiden muss.",
                T0019: "Ich habe zwei Verdächtige, aber welcher ist der Mörder?",
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.buero);
        await MurderMystery.ƒS.update(MurderMystery.transition.puzzle.duration, MurderMystery.transition.puzzle.alpha, MurderMystery.transition.puzzle.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.play(MurderMystery.sound.handy, 0.5, false);
        await MurderMystery.delay();
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0013);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0014);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0015);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0016);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0017);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0018);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.smith, text.smith.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0019);
        let firstDialogueElementOptions = {
            iSayYes: "Marie",
            iSayNo: "James"
        };
        let firstDialogueElement = await MurderMystery.ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayYes:
                MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0, 0.2, true);
                return "BadEnding";
            case firstDialogueElementOptions.iSayNo:
                MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundBuero, 0, 0.2, true);
                return "GoodEnding";
        }
    }
    MurderMystery.Scene7 = Scene7;
})(MurderMystery || (MurderMystery = {}));
var MurderMystery;
(function (MurderMystery) {
    async function james() {
        console.log("FudgeStory Template james starting");
        let text = {
            camille: {
                T0000: "Können Sie mir bitte aus Ihrer Sicht erzählen was passiert ist?",
                T0001: "Also hat Marie zweimal geschrien in einem Abstand von 3 Stunden?",
                T0002: "Alles klar, erzählen Sie weiter.",
                T0003: "Und er war zu diesem Zeitpunkt sicher schon Tod?",
                T0004: "Wieso überraschend?",
                T0005: "Ok und als der Krankenwagen kam und sie Mr. Grisham fortgebracht haben?",
                T0006: "Stehen Sie und Marie sich nahe?",
            },
            james: {
                T0000: "Natürlich werde ich das.",
                T0001: "Ich habe Marie so gegen 6 Uhr schreien hören und mir nichts dabei gedacht.",
                T0002: "Sie ist sehr schreckhaft und schreit des öfteren auf.",
                T0003: "Ich habe zu diesem Zeitpunkt noch geschlafen und bin daraufhin erst aufgestanden.",
                T0004: "So gegen 9 habe ich Sie noch einmal schreien hören, diesmal kam sie in die Küche gerannt und hat mich geholt.",
                T0005: "Ja genau, keine Ahnung was beim ersten Mal passiert ist. Wahrscheinlich ist ihr etwas heruntergefallen.",
                T0006: "Wir sind dann zusammen in die Bibliothek gegangen und da lag Mr. Grisham tot.",
                T0007: "Marie hat geheult und in der Zeit habe ich einen Krankenwagen gerufen und seinen Puls gefühlt.",
                T0008: "Ja er hatte keinen Puls und da war eine überraschend große Menge an Blut.",
                T0009: "Ja weil in Filmen das nie so schlimm ausssieht, es war sehr viel Blut",
                T0010: "Danach habe ich erstmal Marie getröstet und dann Ms. Grisham informiert, die von einer Freundin heimkam.",
                T0011: "Nicht unbedingt nahe, wir arbeiten zusammen und sehen uns jeden Tag, ich denke sie mag mich."
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.james, MurderMystery.characters.james.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.james, text.james.T0011);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.james);
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0, 0.2, true);
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
                T0000: "Hallo Luna, wie geht es dir?",
                T0001: "Das kann ich verstehen, kannst du mir vielleicht sagen wie du vom Tod deines Vaters erfahren hast?",
                T0002: "Was ist dann geschehen?",
                T0004: "Warum konnte Marie ihn nicht leiden?",
                T0005: "Inwiefern faul?",
                T0006: "Also ist sie verliebt?",
                T0007: "Hast du sonst noch was gefunden oder gesehen?",
                T0008: "Was ist es?",
                T0009: "Was steht da denn drauf, das ist keine Sprache die ich kenne.",
                T0010: "Kannst du es mir entschlüsseln?",
                T0011: " Was soll das denn bedeuten?",
                T0012: "Das werde ich versuchen. Vielen Dank Luna."
            },
            luna: {
                T0000: "Hallo, den Umständen entsprechend.",
                T0001: "Ich vermisse meinen Vater.",
                T0002: "Keiner hat mich beachtet, ich bin aufgewacht von den Sirenen des Krankenwagens und dann nach unten gelaufen.",
                T0003: "Alle standen in der Bibliothek um meinen Vater herum.",
                T0004: "Marie hat übertrieben geheult, was komisch war, denn sie konnte Vater nicht sonderlich leiden und James hat alles organisiert.",
                T0005: "Weil sie faul ist und oft Ärger von meinem Vater bekommen hat.",
                T0006: "Sie hat schon Ihre Arbeit gemacht, aber wohl nicht so gründlich und James hat sie auch immer angehimmelt.",
                T0007: "Genau, das ist schon nervig, aber James sieht schon gut aus.",
                T0008: "Ja das habe ich tatsächlich. Ich dachte es ist für mich und habe es mitgenommen.",
                T0009: "Es ist dieser Zettel hier, er lag auf seinem Schreibtisch herum.",
                T0010: "Das ist die Geheimsprache von meinem Vater und uns Kindern.",
                T0011: "Auf dem Zettel steht - James ist mein S -, den Rest kann man nicht mehr lesen.",
                T0012: "Keine Ahnung, aber vielleicht finden Sie es ja heraus."
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.luna, MurderMystery.characters.luna.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0009);
        MurderMystery.ƒS.Sound.play(MurderMystery.sound.paper, 0.5, false);
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.notiz, MurderMystery.characters.notiz.pose.normal, MurderMystery.fromCenterToCenter());
        MurderMystery.ƒS.Inventory.add(MurderMystery.items.paper);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.notiz);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.luna, text.luna.T0012);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0012);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.luna);
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0, 0.2, true);
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
                T0000: "Guten Morgen, ich möchte Ihnen ein paar Fragen stellen.",
                T0001: "Sie haben Mr. Grisham gefunden.",
                T0002: "Beschreiben Sie bitte genau was passiert ist.",
                T0003: "Darf ich fragen was genau Sie gesehen haben?",
                T0004: "Haben Sie einen Krankenwagen gerufen?",
                T0005: "Woher wussten Sie das er tot war?",
                T0006: "Er hätte ja auch noch leben können.",
                T0007: "Und wie lange soll das gewesen sein?",
                T0008: "Na weil Sie das gerade erwähnt haben.",
                T0009: "Nicht so wichtig, was haben Sie dann gemacht?",
                T0010: "Vielen Dank, das wäre es erstmal.",
                T0011: "Die hat sich ja seltsam Verhalten."
            },
            marie: {
                T0000: "Guten Tag Mrs. Beuford.",
                T0001: "Ja unglücklicherweise habe ich das.",
                T0002: "Ich habe früh morgens angefangen, da schlafen meist alle noch und ich kann ungestört in den Räumen putzen.",
                T0003: "Als ich bei der Bibliothek angekommen bin so gegen sieben, habe ich Mr. Grisham gefunden.",
                T0004: "Mr. Grisham lag auf dem Boden und erst dachte ich er ist von der Leiter gefallen.",
                T0005: "Aber als ich näher kam sah ich das er ganz blass war und sich nicht gerührt hat. ",
                T0006: "Da habe ich geschrien und Hilfe von James geholt.",
                T0007: "Nein warum denn, er war ja tot.",
                T0008: "Ja an dem ganzen Blut und dem Messer.",
                T0009: "Ja aber das ist ja unwahrscheinlich, so lange wie er da schon lag.",
                T0010: "Keine Ahnung woher soll ich das wissen?",
                T0011: "Was soll ich erwähnt haben?",
                T0012: "Na ich bin herausgerannt und habe geschrien, James kam dann und hat sich um alles gekümmert.",
                T0013: "Ok"
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.marie, MurderMystery.characters.marie.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0011);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0012);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.marie, text.marie.T0013);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.marie);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0011);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0, 0.2, true);
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
                T0001: "Ich habe heute morgen die Bestätigung für den Mord an Mr Grisham bekommen.",
                T0002: "Es tut mir leid, aber Ihre Vermutungen haben sich bestätigt.",
                T0003: "So wie es aussieht hatte Mr. Grisham einen Herzinfarkt und er hat keinen Selbstmord begangen.",
                T0004: "Das stimmt, allerdings bedeutet es das jemad ihm postmortem die Pulsadern aufgeschnitten hat.",
                T0005: "Um das heruaszufinden bin ich hier.",
                T0006: "Als erstes haben sie vielleicht den Code für den Safe in der Bibliothek?",
                T0007: "Vielen Dank.",
                T0008: "Wissen Sie für was dieser Schlüssel gedacht ist?",
                T0009: "Dann suche ich nach dem passenden Schloss.",
                T0010: "Fürs erste nicht, Danke für Ihre Hilfe.",
            },
            violet: {
                T0000: "Guten Morgen.",
                T0001: "Was! Tatsächlich?",
                T0002: "Was ist passiert?",
                T0003: "Aber das ist ja dann kein Mord?",
                T0004: "Das ist ja schrecklich.",
                T0005: "Wer würde so etwas tun?",
                T0007: "Ja den habe ich, Ich schreibe den Code für Sie auf.",
                T0008: "Nein, den habe ich noch nie gesehen.",
                T0009: "Machen Sie das. Brauchen Sie sonst noch etwas?",
            },
        };
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0.07, 0.1, true);
        await MurderMystery.ƒS.Location.show(MurderMystery.locations.wohnzimmer);
        await MurderMystery.ƒS.update(MurderMystery.transition.clock.duration, MurderMystery.transition.clock.alpha, MurderMystery.transition.clock.edge);
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.camille, MurderMystery.characters.camille.pose.happy, MurderMystery.ƒS.positionPercent(15, 100));
        await MurderMystery.ƒS.Character.show(MurderMystery.characters.violet, MurderMystery.characters.violet.pose.happy, MurderMystery.ƒS.positionPercent(75, 100));
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0000);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0001);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0002);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0003);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0004);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0005);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0006);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0007);
        // Novel Page
        MurderMystery.ƒS.Text.setClass("novel-page");
        MurderMystery.ƒS.Text.print("3-5-8-1");
        MurderMystery.ƒS.Sound.play(MurderMystery.sound.safe, 0.5, false);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0007);
        await MurderMystery.delay();
        await MurderMystery.ƒS.Character.animate(MurderMystery.characters.schlüssel, MurderMystery.characters.schlüssel.pose.normal, MurderMystery.fromCenterToCenter());
        MurderMystery.ƒS.Inventory.add(MurderMystery.items.key);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0008);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0008);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.schlüssel);
        await MurderMystery.ƒS.update(1);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.violet, text.violet.T0009);
        await MurderMystery.ƒS.Speech.tell(MurderMystery.characters.camille, text.camille.T0010);
        await MurderMystery.ƒS.Character.hide(MurderMystery.characters.violet);
        await MurderMystery.ƒS.update(1);
        MurderMystery.ƒS.Sound.fade(MurderMystery.sound.backgroundWohnzimmer, 0, 0.2, true);
        MurderMystery.dataForSave.gesprochen.violet = true;
    }
    MurderMystery.violet = violet;
})(MurderMystery || (MurderMystery = {}));
//# sourceMappingURL=MurderMystery.js.map