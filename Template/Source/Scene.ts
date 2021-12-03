namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      narrator: {
        T0000: "",
        T0001: ""
      },
      aisaka:{
        T0000:"Hi",
      },

      kohana:{
        T0000:"Hi",

      }
    };
    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.aisaka, text.aisaka.T0000);
    await ƒS.Speech.tell(characters.aisaka, "Hi");
    await ƒS.Character.hide(characters.aisaka);


    let firstDialogueElementOptions = {
      iSayOk: "Ok",
      iSayNo: "No",
      iSayYes: "Yes"
    };
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayOk:
        await ƒS.Speech.tell(characters.aisaka, "Hi2.");
        break;
      case firstDialogueElementOptions.iSayNo:
        await ƒS.Character.show(characters.kohana, characters.kohana.pose.angry, ƒS.positions.center);
        break;
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Speech.tell(characters.kohana, text.kohana.T0000);
        break;
    }

  }
}