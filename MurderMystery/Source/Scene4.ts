namespace MurderMystery {
  export async function Scene4(): ƒS.SceneReturn {
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
    ƒS.Sound.fade(sound.backgroundBuero, 0.07, 0.1, true); 
    await ƒS.Location.show(locations.buero);
    await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
    await ƒS.Character.show( characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
    await ƒS.update(1);
    //await ƒS.Speech.tell(characters.camille, text.camille.T0000);
    await ƒS.Speech.tell(characters.camille, text.camille.T0001);
    await ƒS.Speech.tell(characters.smith, text.smith.T0000);
    await ƒS.Speech.tell(characters.smith, text.smith.T0001);
    await ƒS.Speech.tell(characters.camille, text.camille.T0002);
    await ƒS.Speech.tell(characters.smith, text.smith.T0002);
    await ƒS.Speech.tell(characters.camille, text.camille.T0003);

    let firstDialogueElementOptions = {
      iSayYes: "Messer",
      iSayNo: "Laborbericht",
    };
    
    let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(5)]);
    let loopCount: number = 0;

    while (loopCount < 2) {
      let firstDialogueElement: string = await ƒS.Menu.getInput( firstDialogueElementOptions,"auswahl");

      if (firstDialogueElement === firstDialogueElementOptions["iSayYes"]) {
        ƒS.Sound.play(sound.knife, 0.5, false); 
        await ƒS.Character.animate(characters.knife,characters.knife.pose.normal,fromCenterToCenter());
        // Novel Page
        ƒS.Text.setClass("novel-page");
        ƒS.Text.print(
          "Das Messer ist nicht die Mordwaffe, die Blutspuren sind Schweineblut.");
        ƒS.Inventory.add(items.knife);

        await ƒS.Character.hide(characters.knife);
        await ƒS.update(1);
        delete firstDialogueElementOptions.iSayYes;
      }

      if (firstDialogueElement === firstDialogueElementOptions["iSayNo"]) {
        ƒS.Sound.play(sound.paper2, 0.5, false); 
        await ƒS.Character.animate(characters.labor,characters.labor.pose.normal,fromCenterToCenter());
        // Novel Page
        ƒS.Text.setClass("novel-page");
        //ƒS.Text.addClass("text");
        ƒS.Text.print("Der Laborbericht ergibt, das Mr. Grisham einen Herzinfarkt hatte und ihm die Pulsadern erst nach seinem Tod aufgeschnitten wurden.");
        ƒS.Inventory.add(items.labor);

        await ƒS.Character.hide(characters.labor);
        await ƒS.update(1);
        delete firstDialogueElementOptions.iSayNo;
        // await delay();
      }
      await delay();
      loopCount++;
    }

    await ƒS.Character.animate(characters.camille,characters.camille.pose.happy,fromLeftToRight());
    await ƒS.Character.hide(characters.camille);
    ƒS.Sound.fade(sound.backgroundBuero, 0, 0.2, true);
    await ƒS.update(1);

   
  }
}
