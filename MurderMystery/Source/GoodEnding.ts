namespace MurderMystery {
    export async function GoodEnding(): ƒS.SceneReturn {
      console.log("FudgeStory Template GoodEnding starting");
    
    
      let text = {
        smith: {
          T0000: "Guten Morgen Frau Beuford und herzlich Willkommen bei uns im Team.",
          T0001: "Ich habe gerade einen unbekannten Anruf erhalten. Haben Sie ein Paket bekommen?",
          T0002: "Ah, dann gibt das ganze ja einen Sinn. Sie haben Ihren ersten Auftrag erhalten.",
          T0003: "Genau der Auftraggeber hat mir mitgeteilt, ich solle unbedingt Sie auf den Fall ansetzen",
          T0004: "Allerdings, es geht um den Todesfall in der Familie Grisham.",
          T0005: "Denke ich auch, aber wenn es um so viel Geld geht würde ich einfach mal nachforschen.",
          T0006: "Sehr gut, ich wünsche einen erfolgreichen ersten Fall Miss Beuford."
        },

        camille: {
          T0000: "Was ein schöner Tag heute ist, ich bin schon ganz aufgeregt was ich an meinem ersten Tag zu tun bekomme.",
          T0001: "Ich habe ein Paket bekommen, was da wohl drin ist.",
          T0002: "Oha was ist das denn für ein Haufen Geld?",
          T0003: "Moment da ist eine Notiz dabei, was auf Ihr wohl steht?",
          T0004: "Mh das sagt mir jetzt nicht wirklich was!",
          T0005: "Guten Tag, hier Detektivin Beuford am Apparat.",
          T0006: "Vielen Dank Mr. Smith.",
          T0007: "Ja, ich habe ein Paket erhalten, in dem eine Menga Geld lag und eine seltsame Notiz.",
          T0008: "Einen Auftrag, ich habe nur eine Adresse und sonst nichts.",
          T0009: "Und um was es geht es?",
          T0010: "Grisham ,ich dachte das war Selbstmord.",
          T0011: "Alles klar Mr. Smith, ich werde mal vorbeischauen.",
          T0012: "Na dann los zu den Grishams!",
          T0013: "Hm nur eine Adresse, mal sehen wo das ist.",
          T0014: "Das ist ja der Todesfall der Grisham Familie. Das war aber doch ein Selbstmord.",
          T0015: "Schaden wird es wohl nicht mal vorbeizufahren, es scheint jemanden wichtig zu sein bei der Menge Geld."
        },
      
      };
  
    
  
      await ƒS.Location.show(locations.buero);
      await ƒS.update(1);
      await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.camille, text.camille.T0000);
      await ƒS.Speech.tell(characters.camille, text.camille.T0001);
      await ƒS.Speech.tell(characters.camille, text.camille.T0002);
      await ƒS.Character.animate(characters.geld, characters.geld.pose.normal, fromCenterToCenter());
      await ƒS.Speech.tell(characters.camille, text.camille.T0003);
      // Novel Page
      ƒS.Text.setClass("novel-page");
      //ƒS.Text.addClass("text");
      ƒS.Text.print("34 Worlington Street");
      ƒS.Inventory.add(items.money);
      //await ƒS.Inventory.open();
     
      await ƒS.Speech.tell(characters.camille, text.camille.T0004);

      let firstDialogueElementOptions = {
        iSayYes: "Anruf annehmen",
        iSayNo: "Anruf ignorieren"
      };
      let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "auswahl");

      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iSayYes:
          await ƒS.Speech.tell(characters.camille, text.camille.T0005);
          await ƒS.Speech.tell(characters.smith, text.smith.T0000);
          await ƒS.Speech.tell(characters.camille, text.camille.T0006);
          await ƒS.Speech.tell(characters.smith, text.smith.T0001);
          await ƒS.Speech.tell(characters.camille, text.camille.T0007);
          await ƒS.Speech.tell(characters.smith, text.smith.T0002);
          await ƒS.Speech.tell(characters.camille, text.camille.T0008);
          await ƒS.Speech.tell(characters.smith, text.smith.T0003);
          await ƒS.Speech.tell(characters.camille, text.camille.T0009);
          await ƒS.Speech.tell(characters.smith, text.smith.T0004);
          await ƒS.Speech.tell(characters.camille, text.camille.T0010);
          await ƒS.Speech.tell(characters.smith, text.smith.T0005);
          await ƒS.Speech.tell(characters.camille, text.camille.T0011);
          await ƒS.Speech.tell(characters.smith, text.smith.T0006);
          await ƒS.Speech.tell(characters.camille, text.camille.T0012);
          
          break;
        case firstDialogueElementOptions.iSayNo:
          await ƒS.Speech.tell(characters.camille, text.camille.T0013);
          await ƒS.Speech.tell(characters.camille, text.camille.T0014);
          await ƒS.Speech.tell(characters.camille, text.camille.T0015);
          break;
      }
     

     

      await ƒS.Character.animate(characters.camille, characters.camille.pose.happy, fromLeftToRight());




      //dataForSave.points = 50;
      //console.log(dataForSave.points);
      //await ƒS.Speech.tell(characters.camille, "Helloo");
      //const t = await ƒS.Inventory.open();
      //console.log(t)
      await ƒS.Character.hide(characters.camille);
      await ƒS.update(1);
  
  
      // return "";
  
     // if (dataForSave.points === 50) {
       // return "Introduction";
        // return SzenenFunktionsname();
      //}
    }
}