namespace MurderMystery {
    export async function violet(): ƒS.SceneReturn {
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
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.wohnzimmer);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.violet, characters.violet.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.violet, text.violet.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.violet, text.violet.T0001);
      await ƒS.Speech.tell(characters.violet, text.violet.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      await ƒS.Speech.tell(characters.violet, text.violet.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.violet, text.violet.T0004);
      await ƒS.Speech.tell(characters.violet, text.violet.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.violet, text.violet.T0007);
      // Novel Page
      ƒS.Text.setClass("novel-page");
      ƒS.Text.print("3-5-8-1");
      ƒS.Sound.play(sound.safe, 0.5, false);
      await ƒS.Speech.tell(characters.camille, text.camille.T0007); 
      await delay();
      await ƒS.Character.animate(characters.schlüssel, characters.schlüssel.pose.normal, fromCenterToCenter());
      ƒS.Inventory.add(items.key);
      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
      await ƒS.Speech.tell(characters.violet, text.violet.T0008);
      await ƒS.Character.hide(characters.schlüssel);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
      await ƒS.Speech.tell(characters.violet, text.violet.T0009);
      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
      await ƒS.Character.hide(characters.violet);
      await ƒS.update(1);
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0, 0.2, true);
      
      dataForSave.gesprochen.violet = true;
      
    }
}