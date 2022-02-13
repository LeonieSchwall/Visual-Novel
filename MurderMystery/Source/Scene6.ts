namespace MurderMystery {
    export async function Scene6(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene6 starting");
    
      let text = {

        camille: {
            T0000: "Vielen Dank für Ihre Mitarbeit.",
            T0001: "Ich würde mich nun gerne noch einmal in den Räumen umsehen."
        },

    };
    await ƒS.Location.show(locations.wohnzimmer);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
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
        

          delete firstDialogueElementOptions.iSayYes;
        }
        if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
            await ƒS.Location.show(locations.kammer);
      await ƒS.update(transition.wipe2.duration, transition.wipe2.alpha, transition.wipe2.edge);
          
          delete firstDialogueElementOptions.iSayNo;
        }

     
          if (firstDialogueElement === firstDialogueElementOptions["iSayOk"]) {  
            await ƒS.Location.show(locations.wohnzimmer);
            await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
            await ƒS.Speech.tell(characters.camille, text.camille.T0001);
             
              
              
              delete firstDialogueElementOptions.iSayOk;
      }
      loopCount++;
    }
      

    
  
    }
}