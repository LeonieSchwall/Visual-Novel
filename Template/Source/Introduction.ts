namespace Template {
  export async function Introduction(): ƒS.SceneReturn {
    console.log("FudgeStory Template Introduction starting");

    let text = {
      narrator: {
        T0000: "Das ist Detektivin Beuford.",
        T0001: "Sie ist gerade fertig geworden mit ihrer Ausbildung.",
        T0002: "Wir werden sie heute bei ihrem ersten Fall begleiten.",
        T0003: "Als erstes braucht Sie allerdings einen Vornamen. ",
      
      },
    };


    ƒS.Sound.fade(sound.backgroundTheme, 0.07, 0.1, true);
    await ƒS.Location.show(locations.Startscreen);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.narrator, "Willkommen zur Visual Novel 'Murder Mystery'.");
    await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0003, false);
    data.protagonist.name = await ƒS.Speech.getInput();
    await ƒS.update(1);
    characters.camille.name = data.protagonist.name;
    await ƒS.Speech.tell(characters.narrator, data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem Fall beginnen.", true);
    ƒS.Character.hideAll();
    ƒS.Speech.clear();
    ƒS.Sound.fade(sound.backgroundTheme, 0, 0.2, true);
    await ƒS.update(2);
  }

}