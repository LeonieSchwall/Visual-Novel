namespace MurderMystery {
    export async function Scene3(): ƒS.SceneReturn {
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
  
      ƒS.Sound.fade(sound.backgroundBibliothek, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.bibliothek);
      await ƒS.update(transition.circle.duration, transition.circle.alpha, transition.circle.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.violet, characters.violet.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.violet, text.violet.T0000);
      await ƒS.Speech.tell(characters.violet, text.violet.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.violet, text.violet.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.violet, text.violet.T0003);
      await ƒS.Speech.tell(characters.violet, text.violet.T0004);
      

      let firstDialogueElementOptions = {
        iSayYes: "Raum durchsuchen",
        iSayNo: "Kriminalamt anrufen",
        iSayOk: "Violet befragen"
      };
      
      let loopCount: number = 0;

    while (loopCount < 3) {
      let firstDialogueElement: string = await ƒS.Menu.getInput( firstDialogueElementOptions,"auswahl");

      if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
        await ƒS.Speech.tell(characters.camille, text.camille.T0002);
          await ƒS.Character.hide(characters.violet);
          await ƒS.update(1);
  
          await ƒS.Speech.tell(characters.camille, text.camille.T0003);
          await ƒS.Character.animate(characters.safe, characters.safe.pose.normal, fromCenterToCenter());
          await ƒS.Speech.tell(characters.camille, text.camille.T0004);
          ƒS.Inventory.add(items.safe);
          await ƒS.Character.hide(characters.safe);
          await ƒS.update(1);

          await ƒS.Speech.tell(characters.camille, text.camille.T0005);

          delete firstDialogueElementOptions.iSayYes;
        }
        if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
          await ƒS.Character.hide(characters.violet);
          await ƒS.update(1);
          ƒS.Sound.play(sound.anruf, 0.5, false); 
          await ƒS.Speech.tell(characters.camille, text.camille.T0006);
          await ƒS.Speech.tell(characters.camille, text.camille.T0007);
          await ƒS.Speech.tell(characters.kriminalamt, text.Kriminalamt.T0000);
          await ƒS.Speech.tell(characters.camille, text.camille.T0008);
          await ƒS.Speech.tell(characters.kriminalamt, text.Kriminalamt.T0001);
          await ƒS.Speech.tell(characters.camille, text.camille.T0009);
          await ƒS.Speech.tell(characters.kriminalamt, text.Kriminalamt.T0002);
          await ƒS.Speech.tell(characters.camille, text.camille.T0010);
          await ƒS.Speech.tell(characters.kriminalamt, text.Kriminalamt.T0003);
          await ƒS.Speech.tell(characters.kriminalamt, text.Kriminalamt.T0004);
          await ƒS.Speech.tell(characters.camille, text.camille.T0011);

          delete firstDialogueElementOptions.iSayNo;
        }

     
          if (firstDialogueElement === firstDialogueElementOptions["iSayOk"]) {  
              await ƒS.Character.show(characters.violet, characters.violet.pose.happy, ƒS.positionPercent(75, 100));
              await ƒS.update(1);
              await ƒS.Speech.tell(characters.camille, text.camille.T0012);
              await ƒS.Speech.tell(characters.violet, text.violet.T0005);
              await ƒS.Speech.tell(characters.camille, text.camille.T0013);
              await ƒS.Speech.tell(characters.violet, text.violet.T0006);
              await ƒS.Speech.tell(characters.violet, text.violet.T0007);
              await ƒS.Speech.tell(characters.camille, text.camille.T0014);
              await ƒS.Speech.tell(characters.camille, text.camille.T0015);
              await ƒS.Speech.tell(characters.violet, text.violet.T0008);
              await ƒS.Speech.tell(characters.camille, text.camille.T0016);
              await ƒS.Speech.tell(characters.violet, text.violet.T0009);
              await ƒS.Speech.tell(characters.camille, text.camille.T0017);
              await ƒS.Speech.tell(characters.violet, text.violet.T0010);
              await ƒS.Speech.tell(characters.camille, text.camille.T0018);
              
              delete firstDialogueElementOptions.iSayOk;
      }
      loopCount++;
    }
      

      await ƒS.Character.animate(characters.camille, characters.camille.pose.happy, fromLeftToRight());

      await ƒS.Character.hide(characters.camille);
      await ƒS.Character.hide(characters.violet);
      ƒS.Sound.fade(sound.backgroundBibliothek, 0, 0.2, true);
      await ƒS.update(1);
  
    }
}
