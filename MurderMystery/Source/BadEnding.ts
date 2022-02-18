namespace MurderMystery {
    export async function BadEnding(): ƒS.SceneReturn {
      console.log("FudgeStory Template BadEnding starting");
    
    
      let text = {
        marie: {
          T0000: "Was wie bitte, ich habe das nicht getan.",
          T0001: "Was soll ich beweisen? Ich war es ja nicht.",
          T0002: "Verdächtig? Was habe ich denn getan?",
          T0003: "Was denn für Spuren? Ich wollte dort putzen und habe ihn schon tot aufgefunden.",
          T0004: "Welchen Grund hätte ich denn das zu täuschen?",
          T0005: "Ja ich liebe James, aber ich habe Mr. Grisham nicht umgebracht, das müssen Sie mir glauben.",
          
        },

        smith:{
          T0000: "Ms. Beuford ich habe schlechte Nachrichten für Sie.",
          T0001: "Heute morgen wurde Mrs. Grisham tot aufgefunden, ich befürchte wir haben den falschen Täter verhaftet.",
          T0002: "Leider ja, er ist allerdings untergetaucht.",
          T0003: "Nein das lagen Sie nicht, Marie hat zugegeben James geschützt zu haben, Sie lagen bei allem richtig.",
          T0004: "Keine Sorge, wir werden das schon wieder hinbekommen.",
        },

        camille: {
          T0000: "Marie, ich verdächtige Sie des Mordes an Mr. Grisham.",
          T0001: "Können Sie das denn beweisen, denn die Indizien zeigen alle auf Sie.",
          T0002: "Leider haben Sie kein Alibi und haben sich äußerst verdächtig verhalten.",
          T0003: "Sie haben zweimal geschrien an dem Morgen, ich vermute beim ersten Mal haben Sie Mr. Grisham gefunden.",
          T0004: "Und beim zweiten Mal, welches erst 3 Stunden später war erst James als Hilfe geholt.",
          T0005: "In diesen 3 Stunden hatten Sie genug Zeit den Mord als Selbstmord zu inszenieren und Ihre Spuren für den Mord zu verwischen.",
          T0006: "Ja das mag stimmen, aber nicht so wie später die Polizei aufgefunden hat.",
          T0007: "Das Blut an der Waffe war nämlich nicht von Mr. Grisham, sondern von einem Tier.",
          T0008: "Das ist die Frage hier.",
          T0009: "Ich vermute Sie sind in James verliebt und haben herausgefunden, dass Mr. Grisham sein Vater war.",
          T0010: "Da dieser ihn nicht anerkennen wollte haben Sie sich an Ihrem Chef gerächt um so James zu helfen.",
          T0011: "Nur leider erbt dieser nichts, da seine Familie in seinem Testament bestimmt an erster Stelle steht.",
          T0012: "Leider tue ich das nicht und werde Sie nun verhaften lassen.",

          T0013: "Was gibt es Mr. Smith?",
          T0014: "Oh nein, dann war es etwa doch James Taylor?",
          T0015: "Dann müssen wir Ihn finden.",
          T0016: "Lag ich etwa so daneben?",
          T0017: "Bei allem bis auf wer es tatsächlich war.",
          T0018: "Das hoffe ich, so kann ich meine Karriere nicht starten."
        },
      
      };
  
    
      ƒS.Sound.fade(sound.backgroundHaus, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.haus);
      await ƒS.update(transition.wipe.duration, transition.wipe.alpha, transition.wipe.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.marie, characters.marie.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.marie, text.marie.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.marie, text.marie.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.marie, text.marie.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      await ƒS.Speech.tell(characters.marie, text.marie.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.camille, text.camille.T0007);
      await ƒS.Speech.tell(characters.marie, text.marie.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0011);
      await ƒS.Speech.tell(characters.marie, text.marie.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0012);
      await ƒS.Character.hide(characters.marie);
      await ƒS.update(1);


      // Novel Page
      ƒS.Text.setClass("novel-page");
      ƒS.Text.print("Einige Wochen später ...");
      await ƒS.Location.show(locations.buero);
      await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
      await ƒS.update(1);
      ƒS.Sound.play(sound.handy, 0.5, false);
       await ƒS.Speech.tell(characters.camille, text.camille.T0013);
      await ƒS.Speech.tell(characters.smith, text.smith.T0000);
      await ƒS.Speech.tell(characters.smith, text.smith.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0014);
      await ƒS.Speech.tell(characters.smith, text.smith.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0015);
      await ƒS.Speech.tell(characters.camille, text.camille.T0016);
      await ƒS.Speech.tell(characters.smith, text.smith.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0017);
      await ƒS.Speech.tell(characters.smith, text.smith.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0018);
      await ƒS.Character.hide(characters.camille);
      ƒS.Speech.clear();
      await ƒS.update(1);


      ƒS.Sound.fade(sound.backgroundHaus, 0, 0.2, true);
    }
}