namespace MurderMystery {
    export async function james(): ƒS.SceneReturn {
      console.log("FudgeStory Template james starting");
    
    
      let text = {

        camille: {
          T0000: "Können Sie mir bitte aus Ihrer Sicht erzählen was passiert ist?",
          T0001: "Also hat Marie zweimal geschrien in einem Abstand von 3 Stunden?",
          T0002: "Alles klar, erzählen Sie weiter.",
          T0003: "Und er war zu diesem Zeitpunkt sicher schon Tod?",
          T0004: "Wieso überraschend?",
          T0005: "Ok und als der Krankenwagen kam und sie Mr. Grisham fortgebracht haben?",
          T0006: "Stehen Sie und Marie sich nahe?",
          
        },
        james: {
          T0000: "Natürlich werde ich das.",
          T0001: "Ich habe Marie so gegen 6 Uhr schreien hören und mir nichts dabei gedacht.",
          T0002: "Sie ist sehr schreckhaft und schreit des öfteren auf.",
          T0003: "Ich habe zu diesem Zeitpunkt noch geschlafen und bin daraufhin erst aufgestanden.",
          T0004: "So gegen 9 habe ich Sie noch einmal schreien hören, diesmal kam sie in die Küche gerannt und hat mich geholt.",
          T0005: "Ja genau, keine Ahnung was beim ersten Mal passiert ist. Wahrscheinlich ist ihr etwas heruntergefallen.",
          T0006: "Wir sind dann zusammen in die Bibliothek gegangen und da lag Mr. Grisham tot.",
          T0007: "Marie hat geheult und in der Zeit habe ich einen Krankenwagen gerufen und seinen Puls gefühlt.",
          T0008: "Ja er hatte keinen Puls und da war eine überraschend große Menge an Blut.",
          T0009: "Ja weil in Filmen das nie so schlimm ausssieht, es war sehr viel Blut",
          T0010: "Danach habe ich erstmal Marie getröstet und dann Ms. Grisham informiert, die von einer Freundin heimkam.",
          T0011: "Nicht unbedingt nahe, wir arbeiten zusammen und sehen uns jeden Tag, ich denke sie mag mich."
        },
      
      };
  
    
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
      await ƒS.Location.show(locations.wohnzimmer);
      await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
      await ƒS.update(1);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
      await ƒS.Character.show(characters.james, characters.james.pose.happy, ƒS.positionPercent(75, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.james, text.james.T0000);
      
      await ƒS.Speech.tell(characters.james, text.james.T0001);
      await ƒS.Speech.tell(characters.james, text.james.T0002);
      await ƒS.Speech.tell(characters.james, text.james.T0003);
      await ƒS.Speech.tell(characters.james, text.james.T0004);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001); 
      await ƒS.Speech.tell(characters.james, text.james.T0005);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Speech.tell(characters.james, text.james.T0006);
      await ƒS.Speech.tell(characters.james, text.james.T0007);
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      await ƒS.Speech.tell(characters.james, text.james.T0008);
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);
      await ƒS.Speech.tell(characters.james, text.james.T0009);
      await ƒS.Speech.tell(characters.camille, text.camille.T0005);
      await ƒS.Speech.tell(characters.james, text.james.T0010);
      await ƒS.Speech.tell(characters.camille, text.camille.T0006);
      await ƒS.Speech.tell(characters.james, text.james.T0011);
      await ƒS.Character.hide(characters.james);
      await ƒS.update(1);
      ƒS.Sound.fade(sound.backgroundWohnzimmer, 0, 0.2, true);

      dataForSave.gesprochen.james = true;
      
    }
}