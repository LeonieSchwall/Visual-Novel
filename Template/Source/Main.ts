namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Template");

  //define transition//
  export let transitions = {
    clock: {
      duration: 1,
      alpha:"./FreeTransitions/puzzle.png",
      edge: 1
    },  
    puzzle: {
      duration: 1,
      alpha:"./FreeTransitions/puzzle.png",
      edge: 1
    },
    wipe: {
      duration: 1,
      alpha:"./FreeTransitions/puzzle.png",
      edge: 1
    },
  };

  export let sound = {
    //music
    backgroundTheme:"./Audio/Fireplace.wav",
    //sound
    clock: "./Audio/Old Clock.wav",
    safe:"./Audio/Safe1.wav",
    safe2:"./Audio/Safe2.wav",

  };

  //Items
  export let items = {
    key: {
      name:"Schlüssel",
      description:"Ein alter Schlüssel.",
      image:"",
    },
    labor: {
      name:"Laborbericht",
      description:"Der Bericht enthält die Todesursache.",
      image:"",
    },
    safe: {
      name:"Safe",
      description:"Was wohl in diesem Safe ist?",
      image:"",
    },
    book: {
      name:"Tagebuch",
      description:"Bild gehört wohl zu diesem Eintrag.",
      image:"",
    },
    knife: {
      name:"Küchenmesser",
      description:"Hier ist also das fehlende Messer und die Mordwaffe.",
      image:"",
    },
    paper: {
      name:"Notizzettel",
      description:"Was soll das Kauderwelsch denn bedeuten?",
      image:"",
    },
    poison: {
      name:"Gift",
      description:"Mordwaffe?",
      image:"",
    },
    safecode: {
      name:"Zahlencode",
      description:"Das ist bestimmt der Cade für den Safe.",
      image:"",
    },
    money: {
      name:"Geldstapel",
      description:"Warum hatte das Opfer so viel Bargeld?",
      image:"",
    }
  };

  //Hintergründe
  export let locations = {
    Startscreen: {
      name: "Startscreen",
      background: "./Images/background/lagerfeuer.webp"
    },
    büro: {
      name: "Büro",
      background: "./Images/background/lagerfeuer.webp"
    },
    bibliothek: {
      name: "Bibliothek",
      background: "./Images/background/lagerfeuer.webp"
    },
    haus: {
      name: "Wohnsitz der Familie",
      background: "./Images/background/lagerfeuer.webp"
    },
    kammer: {
      name: "Dienstbotenzimmer",
      background: "./Images/background/lagerfeuer.webp"
    },
    tatort: {
      name: "Tatort/Wohnzimmer",
      background: "./Images/background/lagerfeuer.webp"
    }
  };

  //Charakter benennen
  export let data = {
    protagonist: {
        name: ""
    },
    score: 0,
    state: {
        a: 1
    }
};


  // Charaktere 
  export let characters = {
    narrator: {
      name:"",

    },
    camille: {
      name: data.protagonist.name,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        angry: "",
        happy: "./Images/Characters/Boy_.png",
        upset: ""
      }
    },
    
    violet: {
      name: "Violet Lakefield: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Nina.png",
        happy: "",
        upset: ""
      }
    },
    luna: {
      name: "Luna Lakefield: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Luna.png",
        happy: "./Images/Characters/Luna.png",
        upset: ""
      }
    },
    james: {
      name: "James Taylor: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Luna.png",
        happy: "./Images/Characters/Luna.png",
        upset: ""
      }
    },
    maria: {
      name: "Maria: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Luna.png",
        happy: "./Images/Characters/Luna.png",
        upset: ""
      }
    },
  }
//Animation//
  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft, },
      end: { translation: ƒS.positions.bottomright,  },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE

    };
  }

export function fromleftToCenter(): ƒS.AnimationDefinition {
    return {
        start: { translation: ƒS.positions.bottomleft },
        end: { translation: ƒS.positions.bottomcenter },
        duration: 1.5,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
}

export function fromlefterToLeft(): ƒS.AnimationDefinition {
    return {
        start: { translation: ƒS.positions.bottomleft },
        end: { translation: ƒS.positionPercent(31, 100) },
        duration: 1,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
}

  export let dataForSave = {

  };


  //Menü
  let inGameMenu ={
    save: "Save",
    load: "Load",
    credits: "Credits",
    volumeup: "+",
    volumedown: "-",
    close: "Close",
    open: "Open"
  };

  export let gameMenu: ƒS.Menu;

  let volume: number = 5.0;
  

  export function incrementSound(): void {
      if (volume >= 10)
          return;
      volume += 0.5;
      ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
      if (volume <= 0)
          return;
      volume -= 0.5;
      ƒS.Sound.setMasterVolume(volume);
  }

  export function showCredits(): void {
      ƒS.Text.addClass("credits");
      ƒS.Text.print("Die Visual Novel wurde mit FudgeStory erstellt." + '<br/>' + "Von Leonie Schwall" + '<br/>' + "Die Elemente wurden selbst gezeichnet." + '<br/>');

  }



  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option){
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        break;
      case inGameMenu.open:
        gameMenu.open();
        break; 
      case inGameMenu.volumeup:
        incrementSound();
        break;
      case inGameMenu.volumedown:
        decrementSound();
        break;
      case inGameMenu.credits:
        showCredits();
        break;     
    }
  }

  let menu: boolean = true;

  //Shortcuts fürs Menu
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event:KeyboardEvent): Promise<void> {
    switch (_event.code){
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break; 
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log("Close");
          gameMenu.close();
          menu = false;
        }  
        else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        } 

    }
    
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {

    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    //Szenen aufrufen
    let scenes: ƒS.Scenes = [
      { scene: Introduction, name: "Introduction" },
      { scene: Scene1, name: "Scene1" },
      { scene: Scene1, name: "Scene2" },
      { scene: Scene1, name: "Scene3" },

    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    ƒS.Progress.setData(data);
    ƒS.Progress.go(scenes);
  }

}