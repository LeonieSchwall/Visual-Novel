namespace Template {
    export async function Introduction(): ƒS.SceneReturn {
      console.log("FudgeStory Template Introduction starting");


      ƒS.Sound.fade(sound.backgroundTheme, 0.07, 0.1, true);
        await ƒS.Location.show(locations.Startscreen);
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.narrator, "Willkommen zur Visual Novel 'Murder Mystery'. Bevor du loslegst, gäbe es da noch etwas.");
        await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.narrator, "Das ist Detektivin Beuford. Sie ist gerade fertig geworden mit ihrer Ausbildung. Wir werden sie heute bei ihrem ertsen Fall begleiten. Als erstes braucht Sie allerdings einen Vornamen.", false);
        data.protagonist.name = await ƒS.Speech.getInput();
        await ƒS.update(1);
        characters.camille.name = data.protagonist.name;
        await ƒS.Speech.tell(characters.narrator, data.protagonist.name + "? Super, dann kann Detektivin Beuford ja mit ihrem ersten Fall beginnen.", true);
        ƒS.Character.hideAll();
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.backgroundTheme, 0, 0.2, true);
        await ƒS.update(2);
    }

}