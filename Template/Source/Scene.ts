namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      narrator: {
        T0000: "",
        T0001: ""
      },
      boy:{
        T0000:"Hey, woher hast du denn die Marshmallows?",
        T0001:"Danke, möchtest du auch noch welche?",
        T0002:"Alles klar, dann lass uns los gehen.",
        T0003:"Ja, sonst erfrieren wir ja noch hier in der Kälte",
        T0004:"Nein, ich gehe gleich zu meinen Freunden.",
        T0005:"Ähm ich bin Jakob und wer bist du?",
        T0006:"Hi Nina, ich unterhalte mich doch nur mit Luna.",
        T0007:"Wer ist dir denn über die Leber gelaufen?",

      },

      luna:{
        T0000:"Die gibt es da drüben.",
        T0001:"Ja sehr gerne, ich komme einfach kurz mit.",
        T0002:"Wollen wir uns danach ans Feuer setzen?",
        T0003:"Dann lass uns eine Decke holen und uns zusammenkuscheln.",
        T0004:"Schade, viel Spaß dir noch."


      },
      girl2:{
        T0000:"Wer bist du und was willst du von meiner Freundin?",
        T0001:"Nina",
        T0002:"Lass sie bloß in Ruhe du Idiot!",
      }
    };
    await ƒS.Location.show(locations.lagerfeuer);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    await ƒS.Character.show(characters.luna, characters.luna.pose.happy, ƒS.positions.bottomleft);
    await ƒS.Character.show(characters.boy, characters.boy.pose.happy, ƒS.positions.bottomright);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.boy, text.boy.T0000);
    await ƒS.Speech.tell(characters.luna, text.luna.T0000);
    await ƒS.Speech.tell(characters.boy, text.boy.T0001);
    await ƒS.Speech.tell(characters.luna, text.luna.T0001);
    await ƒS.Speech.tell(characters.boy, text.boy.T0002);
    await ƒS.Speech.tell(characters.luna, text.luna.T0002);
    //await ƒS.Character.animate(characters.girl3, characters.girl3.pose.happy, fromLeftToRight());
    //await ƒS.Character.hide(characters.girl3);
    ƒS.Inventory.add(items.pen);
    await ƒS.Inventory.open();

    let firstDialogueElementOptions = {
      iSayNo: "Nein",
      iSayOk: "Okay",
      iSayYes: "Ja"
    };
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayNo:
        await ƒS.Speech.tell(characters.boy, text.boy.T0004);
        await ƒS.Speech.tell(characters.luna, text.luna.T0004);
        
        break;
      case firstDialogueElementOptions.iSayOk:
        await ƒS.Character.show(characters.girl2, characters.girl2.pose.angry, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.girl2, text.girl2.T0000);
        await ƒS.Speech.tell(characters.boy, text.boy.T0005);
        await ƒS.Speech.tell(characters.girl2, text.girl2.T0001);
        await ƒS.Speech.tell(characters.boy, text.boy.T0006);
        await ƒS.Speech.tell(characters.girl2, text.girl2.T0002);
        await ƒS.Speech.tell(characters.boy, text.boy.T0007);
        break;
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Speech.tell(characters.boy, text.boy.T0003);
        await ƒS.Speech.tell(characters.luna, text.luna.T0003);
        break;
    }

  }
}