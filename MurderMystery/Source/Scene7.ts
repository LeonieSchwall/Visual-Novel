namespace MurderMystery {
    export async function Scene7(): ƒS.SceneReturn {
      console.log("FudgeStory Template Scene7 starting");
    
    
      let text = {
        smith: {
          T0000: "Guten Tag Ms. Beuford, haben Sie den Fall mittlerweile gelöst?",
          T0001: "Wir können den Fall gerne durchegehen, vielleicht kommt Ihnen dann eine Idee.",
          T0002: "Wie widersprechen sich die beiden?",
          T0003: "Seltsam, aber vielleicht war sie ja diejenige mit dem Messer.",
          T0004: "Haben sie ein Motiv von Ihr?",
          T0005: "Das ist allerdings ein sehr schwaches Motiv.",
          T0006: "Bleibt noch der Verwalter. Hätte er ein Motiv?",
          T0007: "Hm, aber das ist noch kein Grund für einen Mord. Vielleicht hatten sie einen Streit?",
          T0008: "Dann vielleicht einfach wegen dem Erbe? Oder es hat etwas mit der Mutter zu tun.",
          T0009: "Wie meinen Sie das?",
          T0010: "Ja aber das ist ja noch kein Motiv für Luna.",
          T0011: "Wäre möglich, Sie müssen wissen ob Sie weiter ermitteln wollen oder den Fall als abgeschlossen sehen und jemanden verdächtigen."
        },

        camille: {
          T0000: "Hallo Mr. Smith.",
          T0001: "Leider nicht, ich habe einige Motive und Indizien gesammelt, kann Sie aber nicht zusammensetzen.",
          T0002: "Sehr gerne, ich zähle auf was ich gefunden habe.",
          T0003: "Mr. Grisham wurde morgens von Marie dem Hausmädchen gefunden.",
          T0004: "Wann genau, da wiedersprechen sich Marie und James der Verwalter.",
          T0005: "Marie sagt Sie hätte Mr. Grisham gegen sieben gefunden und dann geschrien.",
          T0006: "James Taylor behauptet allerdings sie zweimal schreien gehört zu haben, einmal um sechs und dann drei Stunden später als sie ihn geholt hat.",
          T0007: "Was sie in der Zeit gemacht hat weiß ich nicht genau.",
          T0008: "Das könnte sein, aber warum sollte sie das postmortem tun?",
          T0009: "Naja sie konnte Mr. Grisham wohl nicht sonderlich leiden, da er streng war.",
          T0010: "Genau, die Tochter Luna war zum Todeszeitpunkt zwar Zuhause, allerdings hat sie kein Motiv und wirkt auch nicht wie ein Täter.",
          T0011: "Sie würde ich ausschließen, genauso wie Mrs. Grisham, die erst nach dem Todeszeitpunkt zurückkam.",
          T0012: "Ich vermute er ist der uneheliche Sohn von Mr. Grisham und hegte daher einen Groll.",
          T0013: "Mr. Grisham wusste von einem Sohn allerdings bezweifle ich das er wusste das James sein Sohn ist.",
          T0014: "Das könnte sein, allerdings kam ja heraus das Mr. Grisham vergiftet wurde und das ist keine Tat im Affekt.",
          T0015: "Ja über die weiß ich nichts.",
          T0016: "Denken Sie es könnte einen Tat aus Eifersucht sein?",
          T0017: "Marie ist wohl in James verliebt, das behauptet Luna. Was wenn Mr. Grisham ebenfalls in Marie verliebt war.",
          T0018: "Nein aber für James, der vielleicht nicht will das noch ein uneheliches Kind leiden muss.",
          T0019: "Ich habe zwei Verdächtige, aber welcher ist der Mörder?",

        },
      
      };
  
      ƒS.Sound.fade(sound.backgroundBuero, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.buero);
      await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.update(1);
      ƒS.Sound.play(sound.handy, 0.5, false);
      await delay();
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.smith, text.smith.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.smith, text.smith.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.smith, text.smith.T0002);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.camille, text.camille.T0007);
      await ƒS.Speech.tell(characters.smith, text.smith.T0003);
      await ƒS.Speech.tell(characters.camille, text.camille.T0008);
      await ƒS.Speech.tell(characters.smith, text.smith.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0009);
      await ƒS.Speech.tell(characters.smith, text.smith.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0011);
      await ƒS.Speech.tell(characters.smith, text.smith.T0006);
      await ƒS.Speech.tell(characters.camille, text.camille.T0012);
      await ƒS.Speech.tell(characters.camille, text.camille.T0013);
      await ƒS.Speech.tell(characters.smith, text.smith.T0007);
      await ƒS.Speech.tell(characters.camille, text.camille.T0014);
      await ƒS.Speech.tell(characters.smith, text.smith.T0008);
      await ƒS.Speech.tell(characters.camille, text.camille.T0015);
      await ƒS.Speech.tell(characters.camille, text.camille.T0016);
      await ƒS.Speech.tell(characters.smith, text.smith.T0009);
      await ƒS.Speech.tell(characters.camille, text.camille.T0017);
      await ƒS.Speech.tell(characters.smith, text.smith.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0018);
      await ƒS.Speech.tell(characters.smith, text.smith.T0011);
      await ƒS.Speech.tell(characters.camille, text.camille.T0019);

      let firstDialogueElementOptions = {
        iSayYes: "Marie",
        iSayNo: "James"
      };
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");

      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayYes:
          ƒS.Sound.fade(sound.backgroundBuero, 0, 0.2, true);
          return "BadEnding"
          
        case firstDialogueElementOptions.iSayNo:
          
          
          ƒS.Sound.fade(sound.backgroundBuero, 0, 0.2, true);
          return "GoodEnding"
      }
  
    }
}