namespace MurderMystery {
    export async function Scene6(): ƒS.SceneReturn {
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
    ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
    await ƒS.Location.show(locations.wohnzimmer);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.camille, text.camille.T0000);
    await ƒS.Speech.tell(characters.camille, text.camille.T0001);

    let firstDialogueElementOptions = {
        iSayYes: "Bibliothek",
        iSayNo: "Dienstbotenkammer",
        iSayOk: "Wohnzimmer"
      };
      
      let loopCount: number = 0;

    while (loopCount < 3) {
      let firstDialogueElement: string = await ƒS.Menu.getInput( firstDialogueElementOptions,"auswahl");

      if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
       
        await ƒS.Location.show(locations.bibliothek);
        await ƒS.update(transition.circle.duration, transition.circle.alpha, transition.circle.edge);
        await ƒS.Speech.tell(characters.camille, text.camille.T0002);
        await ƒS.Speech.tell(characters.camille, text.camille.T0003);
        ƒS.Sound.play(sound.magie, 0.5, false);
        await ƒS.Character.animate(characters.poison, characters.poison.pose.normal, fromCenterToCenter());
        
        ƒS.Inventory.add(items.poison);
        await ƒS.Speech.tell(characters.camille, text.camille.T0004);
        await ƒS.Speech.tell(characters.camille, text.camille.T0005);
        await ƒS.Character.hide(characters.poison);
        await ƒS.update(1);
        // Novel Page
        ƒS.Text.setClass("novel-page");
        ƒS.Text.print("Die lila Pflanze Wolfswurz ist hochgradig giftig und löst innerhalb von 15 Minuten Herzrythmusstörungen aus.");
        await ƒS.Speech.tell(characters.camille, text.camille.T0006);
        await ƒS.Speech.tell(characters.camille, text.camille.T0007);
        await ƒS.Speech.tell(characters.camille, text.camille.T0008);

          delete firstDialogueElementOptions.iSayYes;
        }
        if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
             
            await ƒS.Location.show(locations.kammer);
            await ƒS.update(transition.wipe2.duration, transition.wipe2.alpha, transition.wipe2.edge);

            await ƒS.Speech.tell(characters.camille, text.camille.T0009);

            await ƒS.Speech.tell(characters.camille, text.camille.T0010);
            await ƒS.Speech.tell(characters.camille, text.camille.T0011);
            ƒS.Sound.play(sound.paper2, 0.5, false); 
            await ƒS.Character.animate(characters.buch, characters.buch.pose.normal, fromCenterToCenter());
            ƒS.Sound.play(sound.paper, 0.5, false);
            ƒS.Inventory.add(items.book);
            await ƒS.Speech.tell(characters.camille, text.camille.T0012);
            await ƒS.Speech.tell(characters.camille, text.camille.T0013);
            await ƒS.Character.hide(characters.buch);
            await ƒS.update(1);
            ƒS.Text.setClass("novel-page");
            ƒS.Text.print("Es ist so schade das Grisham James nicht als seinen Sohn annehmen möchte, so muss der arme Junge ohne Vater aufwachsen.");
            await ƒS.Speech.tell(characters.camille, text.camille.T0014);
            await ƒS.Speech.tell(characters.camille, text.camille.T0015);
            await ƒS.Speech.tell(characters.camille, text.camille.T0016);
            await ƒS.Speech.tell(characters.camille, text.camille.T0017);
            
            
            

          
          delete firstDialogueElementOptions.iSayNo;
        }

     
          if (firstDialogueElement === firstDialogueElementOptions["iSayOk"]) {  
            ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
            await ƒS.Location.show(locations.wohnzimmer);
            await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await ƒS.Speech.tell(characters.camille, text.camille.T0018);
             
              
              
              delete firstDialogueElementOptions.iSayOk;
      }
      loopCount++;
    }
      

    ƒS.Sound.fade(sound.backgroundWohnzimmer, 0, 0.2, true);
  
    }
}