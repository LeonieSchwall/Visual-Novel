namespace Template {
    export async function Scene1(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene1 starting");
    
    
      let text = {
        narrator: {
          T0000: "",
          T0001: ""
        },
        camille: {
          T0000: "HEY",
          T0001: ""
        },
      
      };
  
  
  
  
      await ƒS.Location.show(locations.büro);
      await ƒS.update(1);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
      await ƒS.update(1);

      // Novel Page
      ƒS.Text.setClass("text");
      ƒS.Text.print("Lies mich.");
    
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      //dataForSave.points += 10;
      //console.log(dataForSave.points);
      await ƒS.Speech.tell(characters.camille, "Helloo");
      await ƒS.Character.hide(characters.camille);
      await ƒS.update(1);
  
  
      // return "";
  
      // if (dataForSave.points == 50) {
      //   return "";
        // return SzenenFunktionsname();
      // }
    }
}