namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      narrator: {
        T0000: "",
        T0001: ""
      },
      boy:{
        T0000:"Hi",
      },

      girl3:{
        T0000:"Wer bist du?",

      },
      girl2:{
        T0000:"Ich heiße Luna.",
        T0001:"Wie heißt du?",
      }
    };
    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.Character.show(characters.girl3, characters.girl3.pose.happy, ƒS.positions.bottomright );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.girl3, text.girl3.T0000);
    await ƒS.Speech.tell(characters.girl3, "Hi");
    await ƒS.Character.animate(characters.girl3, characters.girl3.pose.happy, fromLeftToRight());
    await ƒS.Character.hide(characters.girl3);
   


    let firstDialogueElementOptions = {
      iSayOk: "Ok",
      iSayNo: "No",
      iSayYes: "Yes"
    };
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayOk:
        await ƒS.Speech.tell(characters.girl3, "Hi2.");
        break;
      case firstDialogueElementOptions.iSayNo:
        await ƒS.Character.show(characters.girl2, characters.girl2.pose.angry, ƒS.positions.center);
        break;
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Speech.tell(characters.girl2, text.girl2.T0000);
        break;
    }

  }
}