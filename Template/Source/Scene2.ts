namespace Template {
  export async function Scene2(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      narrator: {
        T0000: "",
        T0001: ""
      },
      camille:{
        T0000:"Guten Tag! Bin ich hier richtig bei den Grishams?",
        T0001:"Ich bin Detektivin und habe heute morgen den Auftrag bekommen hier nachzuforschen.",
        T0002:"Darf ich fragen wer sie sind?",
        T0003:"Sehr angenehm Sie kennenzulernen.",
        T0004:"Wissen Sie vielleicht wer mich engagiert haben könnte?",
        T0005:"Ja das stimmt, dennoch wurde ich engagiert und würde mich gerne einmal umsehen wenn es Ihnen Recht ist.",
        T0006:"Sehr gerne, ich warte.",
        T0007:"Guten tag Mrs. Grisham. Mein herzliches Beileid für Ihren Verlust.",
        T0008:"Ja das bin ich.",
        T0009:"Mord? Es wird doch angenommen das es ein Selbstmord war.",
        T0010:"Haben Sie mich dann engagiert?",
      },

      james:{
        T0000:"Guten Tag, ja das sind sie.",
        T0001:"Was kann ich für sie tun?",
        T0002:"Davon weiß ich nichts.",
        T0003:"Ich bin James Taylor, der Verwalter von Mr. Grisham und halte hier alles am Laufen.",
        T0004:"Leider nein, denn es ist ja eigentlich alles klar.",
        T0005:"Mr. Grishams Tod war Selbstmord!",
        T0006:"Von mir aus schon, Ich muss allerdings Mrs. Grisham fragen.",
        T0007:"Sie ist seit dem Tod Ihres Mannes sehr aufgelöst."
      },

      violet:{
        T0000:"Guten Tag, sind Sie die Detektivin?",
        T0001:"Also sind Sie nun die Detektivin?",
        T0002:"Dann kommen Sie schnell mit rein und lösen Sie den Mord an meinem Mann auf.",
        T0003:"Das war KEIN Selbstmord, William würde so etwas nie tun.",
        T0004: "Nein, aber ich bin froh das es jemand getan hat.",
        T0005: "Los kommen Sie ich zeige Ihnen den Tatort."
      },
      
    };

    await ƒS.Location.show(locations.haus);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positions.bottomleft);
    await ƒS.Character.show(characters.james, characters.james.pose.happy, ƒS.positions.bottomright);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.camille, text.camille.T0000);
    await ƒS.Speech.tell(characters.james, text.james.T0000);
    await ƒS.Speech.tell(characters.james, text.james.T0001);
    await ƒS.Speech.tell(characters.camille, text.camille.T0001);
    await ƒS.Speech.tell(characters.james, text.james.T0002);
    await ƒS.Speech.tell(characters.camille, text.camille.T0002);
    await ƒS.Speech.tell(characters.james, text.james.T0003);
    await ƒS.Speech.tell(characters.camille, text.camille.T0003);
    await ƒS.Speech.tell(characters.camille, text.camille.T0004);
    await ƒS.Speech.tell(characters.james, text.james.T0004);
    await ƒS.Speech.tell(characters.james, text.james.T0005);
    await ƒS.Speech.tell(characters.camille, text.camille.T0005);
    await ƒS.Speech.tell(characters.james, text.james.T0006);
    await ƒS.Speech.tell(characters.james, text.james.T0007);
    await ƒS.Speech.tell(characters.camille, text.camille.T0006);
    await ƒS.Character.hide(characters.james);
    await ƒS.update(1);

    await ƒS.Character.show(characters.violet, characters.violet.pose.happy, ƒS.positions.bottomright);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.violet, text.violet.T0000);
    await ƒS.Speech.tell(characters.camille, text.camille.T0007);
    await ƒS.Speech.tell(characters.violet, text.violet.T0001);
    await ƒS.Speech.tell(characters.camille, text.camille.T0008);
    await ƒS.Speech.tell(characters.violet, text.violet.T0002);
    await ƒS.Speech.tell(characters.camille, text.camille.T0009);
    await ƒS.Speech.tell(characters.violet, text.violet.T0003);
    await ƒS.Speech.tell(characters.camille, text.camille.T0010);
    await ƒS.Speech.tell(characters.violet, text.violet.T0004);
    await ƒS.Speech.tell(characters.violet, text.violet.T0005);


  
  }
}