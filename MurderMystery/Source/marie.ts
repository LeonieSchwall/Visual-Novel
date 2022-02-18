namespace MurderMystery {
    export async function marie(): ƒS.SceneReturn {
      console.log("FudgeStory Template marie starting");
    
    
      let text = {

        camille: {
          T0000: "Guten Morgen, ich möchte Ihnen ein paar Fragen stellen.",
          T0001: "Sie haben Mr. Grisham gefunden.",
          T0002: "Beschreiben Sie bitte genau was passiert ist.",
          T0003: "Darf ich fragen was genau Sie gesehen haben?",
          T0004: "Haben Sie einen Krankenwagen gerufen?",
          T0005: "Woher wussten Sie das er tot war?",
          T0006: "Er hätte ja auch noch leben können.",
          T0007: "Und wie lange soll das gewesen sein?",
          T0008: "Na weil Sie das gerade erwähnt haben.",
          T0009: "Nicht so wichtig, was haben Sie dann gemacht?",
          T0010: "Vielen Dank, das wäre es erstmal.",

          T0011: "Die hat sich ja seltsam Verhalten."
         
        },
        marie: {
          T0000: "Guten Tag Mrs. Beuford.",
          T0001: "Ja unglücklicherweise habe ich das.",
          T0002: "Ich habe früh morgens angefangen, da schlafen meist alle noch und ich kann ungestört in den Räumen putzen.",
          T0003: "Als ich bei der Bibliothek angekommen bin so gegen sieben, habe ich Mr. Grisham gefunden.",
          T0004: "Mr. Grisham lag auf dem Boden und erst dachte ich er ist von der Leiter gefallen.",
          T0005: "Aber als ich näher kam sah ich das er ganz blass war und sich nicht gerührt hat. ",
          T0006: "Da habe ich geschrien und Hilfe von James geholt.",
          T0007: "Nein warum denn, er war ja tot.",
          T0008: "Ja an dem ganzen Blut und dem Messer.",
          T0009: "Ja aber das ist ja unwahrscheinlich, so lange wie er da schon lag.",
          T0010: "Keine Ahnung woher soll ich das wissen?",
          T0011: "Was soll ich erwähnt haben?",
          T0012: "Na ich bin herausgerannt und habe geschrien, James kam dann und hat sich um alles gekümmert.",
          T0013: "Ok"
        },
      
      };
  
    
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.wohnzimmer);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.marie, characters.marie.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.marie, text.marie.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.marie, text.marie.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.marie, text.marie.T0002);
      await ƒS.Speech.tell(characters.marie, text.marie.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      await ƒS.Speech.tell(characters.marie, text.marie.T0004);
      await ƒS.Speech.tell(characters.marie, text.marie.T0005);
      await ƒS.Speech.tell(characters.marie, text.marie.T0006);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.marie, text.marie.T0007);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      
      await ƒS.Speech.tell(characters.marie, text.marie.T0008);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.marie, text.marie.T0009);
      await ƒS.Speech.tell(characters.camille, text.camille.T0007);
      await ƒS.Speech.tell(characters.marie, text.marie.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
      await ƒS.Speech.tell(characters.marie, text.marie.T0011);
      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
      await ƒS.Speech.tell(characters.marie, text.marie.T0012);
      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
      await ƒS.Speech.tell(characters.marie, text.marie.T0013);
      
      await ƒS.Character.hide(characters.marie);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0011);
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0, 0.2, true);
      


      // dataForSave.gesprochen mit x = true
      dataForSave.gesprochen.marie = true;
      
    }
}