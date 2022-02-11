namespace Template {
    export async function marie(): ƒS.SceneReturn {
      console.log("FudgeStory Template marie starting");
    
    
      let text = {

        camille: {
          T0000: "Guten Morgen und vielen Dank für Ihr erscheinen.",
          T0001: "Ich würde gerne jedem von Ihnen ein paar Fragen zu Mr. Grisham und seinen Tod stellen.",
          
        },
      
      };
  
    
  
      await ƒS.Location.show(locations.wohnzimmer);
      await ƒS.update(1);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);

      // dataForSave.gesprochen mit x = true
      dataForSave.gesprochen.marie = true;
      
    }
}