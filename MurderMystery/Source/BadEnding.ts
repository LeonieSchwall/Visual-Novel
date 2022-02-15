namespace MurderMystery {
    export async function BadEnding(): ƒS.SceneReturn {
      console.log("FudgeStory Template BadEnding starting");
    
    
      let text = {
        marie: {
          T0000: "",
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
          T0005: "",
          T0006: ""
        },

        camille: {
          T0000: "",
          T0001: "",
          T0002: "",
          T0003: "",
          T0004: "",
          T0005: "",
          T0006: "",
          T0007: "",
          T0008: "",
          T0009: "",
          T0010: "",
          T0011: "",
          T0012: "",
          T0013: "",
          T0014: "",
          T0015: ""
        },
      
      };
  
    
  
      await ƒS.Location.show(locations.haus);
      await ƒS.update(transition.wipe.duration, transition.wipe.alpha, transition.wipe.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      
     
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
    }
}