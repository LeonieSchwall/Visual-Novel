namespace Template {
    export async function Scene3(): ƒS.SceneReturn {
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
  
    
  
      await ƒS.Location.show(locations.bibliothek);
      await ƒS.update(1);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
      await ƒS.Character.show(characters.violet, characters.violet.pose.happy, ƒS.positions.bottomright);
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
        iSayNo: "Violet weiter befragen"
      };
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");

      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayYes:
          await ƒS.Speech.tell(characters.camille, text.camille.T0002);
          await ƒS.Speech.tell(characters.violet, text.violet.T0005);
          await ƒS.Character.hide(characters.violet);
          await ƒS.update(1);

           
          await ƒS.Speech.tell(characters.camille, text.camille.T0003);
          await ƒS.Speech.tell(characters.camille, text.camille.T0004);

          await ƒS.Character.animate(characters.safe, characters.safe.pose.normal, fromCenterToCenter());
          ƒS.Inventory.add(items.safe);
          await ƒS.Character.hide(characters.safe);
          await ƒS.update(1);

          await ƒS.Speech.tell(characters.camille, text.camille.T0005);

          let secondDialogueElementOptions = {
            iSayYes: "Kriminalamt anrufen",
            iSayNo: "Violet befragen"
          };
          let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "auswahl");
          switch (secondDialogueElement) {
            case secondDialogueElementOptions.iSayYes:
              await ƒS.Speech.tell(characters.camille, text.camille.T0006);
              await ƒS.Speech.tell(characters.camille, text.camille.T0007);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
              await ƒS.Speech.tell(characters.camille, text.camille.T0008);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
              await ƒS.Speech.tell(characters.camille, text.camille.T0009);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
              await ƒS.Speech.tell(characters.camille, text.camille.T0010);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
              await ƒS.Speech.tell(characters.camille, text.camille.T0011);
              break;
      
            case secondDialogueElementOptions.iSayNo:
              await ƒS.Speech.tell(characters.camille, text.camille.T0012);
              await ƒS.Character.show(characters.marie, characters.marie.pose.happy, ƒS.positions.bottomright);
              await ƒS.update(1);
              await ƒS.Speech.tell(characters.marie, text.marie.T0000);
              await ƒS.Speech.tell(characters.camille, text.camille.T0013);
              await ƒS.Character.hide(characters.marie);
              await ƒS.update(1);
              await ƒS.Character.show(characters.violet, characters.violet.pose.happy, ƒS.positions.bottomright);
              await ƒS.update(1);
              await ƒS.Speech.tell(characters.camille, text.camille.T0014);
              await ƒS.Speech.tell(characters.violet, text.violet.T0006);
              await ƒS.Speech.tell(characters.camille, text.camille.T0015);
              await ƒS.Speech.tell(characters.violet, text.violet.T0007);
              await ƒS.Speech.tell(characters.camille, text.camille.T0016);
              // Novel Page
              ƒS.Text.setClass("novel-page");
              ƒS.Text.print("3-5-8-1");
              await ƒS.Character.animate(characters.schlüssel, characters.schlüssel.pose.normal, fromCenterToCenter());
              ƒS.Inventory.add(items.key);
              await ƒS.Character.hide(characters.schlüssel);
              await ƒS.update(1);
              await ƒS.Speech.tell(characters.camille, text.camille.T0017);
              await ƒS.Speech.tell(characters.violet, text.violet.T0008);
              await ƒS.Speech.tell(characters.camille, text.camille.T0018);
              await ƒS.Speech.tell(characters.violet, text.violet.T0009);
              await ƒS.Speech.tell(characters.camille, text.camille.T0019);
              await ƒS.Speech.tell(characters.violet, text.violet.T0010);
              await ƒS.Speech.tell(characters.camille, text.camille.T0020);
              await ƒS.Speech.tell(characters.camille, text.camille.T0021);
              
              break;
          }
        case firstDialogueElementOptions.iSayNo:
          await ƒS.Speech.tell(characters.camille, text.camille.T0012);
            await ƒS.Character.show(characters.marie, characters.marie.pose.happy, ƒS.positions.bottomright);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.marie, text.marie.T0000);
            await ƒS.Speech.tell(characters.camille, text.camille.T0013);
            await ƒS.Character.hide(characters.marie);
            await ƒS.update(1);
            await ƒS.Speech.tell(characters.camille, text.camille.T0014);
            await ƒS.Speech.tell(characters.violet, text.violet.T0006);
            await ƒS.Speech.tell(characters.camille, text.camille.T0015);
            await ƒS.Speech.tell(characters.violet, text.violet.T0007);
            await ƒS.Speech.tell(characters.camille, text.camille.T0016);
            // Novel Page
            ƒS.Text.setClass("novel-page");
            ƒS.Text.print("3-5-8-1");
            await ƒS.Speech.tell(characters.camille, text.camille.T0017);
            await ƒS.Speech.tell(characters.violet, text.violet.T0008);
            await ƒS.Speech.tell(characters.camille, text.camille.T0018);
            await ƒS.Speech.tell(characters.violet, text.violet.T0009);
            await ƒS.Speech.tell(characters.camille, text.camille.T0019);
            await ƒS.Speech.tell(characters.violet, text.violet.T0010);
            await ƒS.Speech.tell(characters.camille, text.camille.T0020);
            await ƒS.Speech.tell(characters.camille, text.camille.T0021);


            let thirdDialogueElementOptions = {
              iSayYes: "Kriminalamt anrufen",
              iSayNo: "Raum durchsuchen"
            };
            let thirdDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementOptions, "auswahl");
            switch (secondDialogueElement) {
              case secondDialogueElementOptions.iSayYes:
                await ƒS.Speech.tell(characters.camille, text.camille.T0006);
                await ƒS.Speech.tell(characters.camille, text.camille.T0007);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
                await ƒS.Speech.tell(characters.camille, text.camille.T0008);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
                await ƒS.Speech.tell(characters.camille, text.camille.T0009);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
                await ƒS.Speech.tell(characters.camille, text.camille.T0010);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
                await ƒS.Speech.tell(characters.camille, text.camille.T0011);
                break;

              case thirdDialogueElementOptions.iSayNo:
                await ƒS.Speech.tell(characters.camille, text.camille.T0002);
                await ƒS.Speech.tell(characters.violet, text.violet.T0005);
                await ƒS.Character.hide(characters.violet);
                await ƒS.update(1);
      
                await ƒS.Speech.tell(characters.camille, text.camille.T0003);
                await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      
                await ƒS.Character.animate(characters.safe, characters.safe.pose.normal, fromCenterToCenter());
                ƒS.Inventory.add(items.safe);
      
                await ƒS.Speech.tell(characters.camille, text.camille.T0005);
                break;  
          break;
      }
      

      await ƒS.Character.animate(characters.camille, characters.camille.pose.happy, fromLeftToRight());

      await ƒS.Character.hide(characters.camille);
      await ƒS.update(1);
  
    }
}
}