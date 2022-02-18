namespace MurderMystery {
    export async function GoodEnding(): ƒS.SceneReturn {
      console.log("FudgeStory Template GoodEnding starting");
    
    
      let text = {
        james: {
          T0000: "Wie bitte, das soll doch wohl ein Witz sein.",
          T0001: "Ach ja, Sie können mich gerne verhören so viel Sie wollen, ich sage nichts.",
          T0002: "Ja das ist wahr, aber das hat ja nichts mit dem Mord an ihm zu tun.",
          T0003: "Natürlich stehe ich nicht im Testament, schließlich wusste er bis vor ein paar Wochen nichts von mir.",
          T0004: "Er hat mich nicht gefeuert, aber es stimmt er wollte mich nicht hier haben.",
          T0005: "Ich habe ihn nicht vergiftet, er hat schließlich Selbstmord begangen.",
          T0006: "Natürlich, das war ja gefakt, aber vergiftet habe ich ihn nicht.",
          T0007: "Nein habe ich nicht, das haben Sie doch erzählt.",
          T0008: "Scheiße, na gut es stimmt ich habe ihn vergiftet.",
          T0009: "Umbringen wollte ich Ihn aber nicht, die Dosis war einfach zu hoch.",
          T0010: "Ich wollte Ihm einen Schreck einjagen und ihm zeigen das er auf mich zählen kann.",
          T0011: "Das habe ich gar nicht, ich glaube das war Marie."
        },

        camille: {
          T0000: "James Taylor ich verdächtige Sie dem Mordes an Mr. Grisham.",
          T0001: "Tun Sie nicht so, es gibt genügend Beweise die Sie überführen.",
          T0002: "Die Polizei ist schon auf dem Weg hierher.",
          T0003: "Da wäre ich mir nicht so sicher, ich weiß das Mr. Grisham Ihr Vater war und er sie nicht sehen wollte.",
          T0004: "Deshalb haben Sie eine Stelle hier angenommen, um ihn besser kennenzulernen.",
          T0005: "Ja, als Sie ihn aber zur Rede stellten haben Sie sich bestimmt gestritten, da er Sie nicht hier haben wollte.",
          T0006: "Er wollte Sie auch nicht in das Testament aufnehmen und das hat Ihnen gar nicht gepasst.",
          T0007: "Genau und als er es herusgefunden hatte, wollte er Sie feuern.",
          T0008: "Und dann haben Sie ihn vergiftet. Ihn loszuwerden hätte Ihnen zumindest nicht den Job gekostet und sie konnten hier weiterleben.",
          T0009: "Das er das nicht getan hat, müssten Sie eigentlich wissen.",
          T0010: "Woher wissen sie das es gefakt war? Haben Sie es etwa so aussehen lassen?",
          T0011: "Nein habe ich nicht Mr. Taylor.",
          T0012: "Ok, was wollten Sie dann damit bewirken?",
          T0013: "Nur ist dies gescheitert, aber warum haben sie dann Selbstmord vorgestäuscht?",
          T0014: "Das könnte sein, aber das muss nicht mehr Ihr Problem sein. Hiermit sind Sie verhaftet.",
          T0015: "Marie werde ich auch mitnehmen, das war mindestens Beihilfe zur Mordvertuschung."
        },
      
      };
  
    
      ƒS.Sound.fade(sound.backgroundHaus, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.haus);
      await ƒS.update(transition.wipe.duration, transition.wipe.alpha, transition.wipe.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.james, characters.james.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);

      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.james, text.james.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.james, text.james.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      await ƒS.Speech.tell(characters.james, text.james.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.james, text.james.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0007);
      await ƒS.Speech.tell(characters.james, text.james.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
      await ƒS.Speech.tell(characters.james, text.james.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
      await ƒS.Speech.tell(characters.james, text.james.T0006);
      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
      await ƒS.Speech.tell(characters.james, text.james.T0007);
      await ƒS.Speech.tell(characters.camille, text.camille.T0011);
      await ƒS.Speech.tell(characters.james, text.james.T0008);
      await ƒS.Speech.tell(characters.james, text.james.T0009);
      await ƒS.Speech.tell(characters.camille, text.camille.T0012);
      await ƒS.Speech.tell(characters.james, text.james.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0013);
      await ƒS.Speech.tell(characters.james, text.james.T0011);
      await ƒS.Speech.tell(characters.camille, text.camille.T0014);
      await ƒS.Speech.tell(characters.camille, text.camille.T0015);
      ƒS.Character.hideAll();
      ƒS.Speech.clear();
      await ƒS.update(1);
      ƒS.Sound.fade(sound.backgroundHaus, 0, 0.2, true);
    }
}