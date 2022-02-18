namespace MurderMystery {
    export async function luna(): ƒS.SceneReturn {
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
  
    
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.wohnzimmer);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.luna, characters.luna.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.luna, text.luna.T0000);
      await ƒS.Speech.tell(characters.luna, text.luna.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.luna, text.luna.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.luna, text.luna.T0003);
      await ƒS.Speech.tell(characters.luna, text.luna.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.luna, text.luna.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      await ƒS.Speech.tell(characters.luna, text.luna.T0006);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.luna, text.luna.T0007);
      await ƒS.Speech.tell(characters.camille, text.camille.T0007);
      await ƒS.Speech.tell(characters.luna, text.luna.T0008);
      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
      await ƒS.Speech.tell(characters.luna, text.luna.T0009);
      ƒS.Sound.play(sound.paper, 0.5, false);
      await ƒS.Character.animate(characters.notiz, characters.notiz.pose.normal, fromCenterToCenter());
      ƒS.Inventory.add(items.paper);
      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
      await ƒS.Speech.tell(characters.luna, text.luna.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
      await ƒS.Character.hide(characters.notiz);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.luna, text.luna.T0011);
      await ƒS.Speech.tell(characters.camille, text.camille.T0011);
      await ƒS.Speech.tell(characters.luna, text.luna.T0012);
      await ƒS.Speech.tell(characters.camille, text.camille.T0012);
      await ƒS.Character.hide(characters.luna);
      await ƒS.update(1);
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0, 0.2, true);
      

      // dataForSave.gesprochen mit x = true
      dataForSave.gesprochen.luna = true;
      
    }
}