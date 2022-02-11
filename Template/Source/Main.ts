namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Template");

  //define transition
  export let transitions = {
    clock: {
      duration: 1,
      alpha: "./FreeTransitions/puzzle.png",
      edge: 1,
    },
    puzzle: {
      duration: 1,
      alpha: "./FreeTransitions/puzzle.png",
      edge: 1,
    },
    wipe: {
      duration: 1,
      alpha: "./FreeTransitions/puzzle.png",
      edge: 1,
    },
  };

  export let sound = {
    //music
    backgroundTheme: "./Audio/Fireplace.wav",
    //sound
    clock: "./Audio/Old Clock.wav",
    safe: "./Audio/Safe1.wav",
    safe2: "./Audio/Safe2.wav",
  };

  //Items
  export let items = {
    key: {
      name: "Schlüssel",
      description: "Ein alter Schlüssel.",
      image: "./Images/Items/Schluessel.png",
    },
    labor: {
      name: "Laborbericht",
      description: "Der Bericht enthält die Todesursache.",
      image: "./Images/Items/Laborbericht.png",
    },
    safe: {
      name: "Safe",
      description: "Was wohl in diesem Safe ist?",
      image: "./Images/Items/Safe.png",
    },
    book: {
      name: "Tagebuch",
      description: "Bild gehört wohl zu diesem Eintrag.",
      image: "./Images/Items/Tagebuch.png",
    },
    knife: {
      name: "Küchenmesser",
      description: "Hier ist also das fehlende Messer und die Mordwaffe.",
      image: "./Images/Items/Messer.png",
    },
    paper: {
      name: "Notizzettel",
      description: "Was soll das Kauderwelsch denn bedeuten?",
      image: "./Images/Items/Gift.png",
    },
    poison: {
      name: "Gift",
      description: "Mordwaffe?",
      image: "./Images/Items/Gift.png",
    },
    safecode: {
      name: "Zahlencode",
      description: "Das ist bestimmt der Cade für den Safe.",
      image: "./Images/Items/Geld.png",
    },
    money: {
      name: "Geldstapel",
      description: "Wer hat das Geld geschickt?",
      image: "./Images/Items/Geld.png",
    },
  };

  //Hintergründe
  export let locations = {
    Startscreen: {
      name: "Startscreen",
      background: "./Images/background/Bibliothek.jpg",
    },
    buero: {
      name: "Büro",
      background: "./Images/background/Bibliothek.png",
    },
    bibliothek: {
      name: "Bibliothek/Tatort",
      background: "./Images/background/Bibliothek.png",
    },
    haus: {
      name: "Wohnsitz der Familie",
      background: "./Images/background/Bibliothek.png",
    },
    kammer: {
      name: "Dienstbotenzimmer",
      background: "./Images/background/Bibliothek.png",
    },
    wohnzimmer: {
      name: "Wohnzimmer",
      background: "./Images/background/Bibliothek.png",
    },
  };

  //Charakter benennen
  export let data = {
    protagonist: {
      name: "",
    },
    score: 0,
    state: {
      a: 1,
    },
  };

  // Charaktere
  export let characters = {
    narrator: {
      name: "",
    },

    smith: {
      name: "Mr. Smith",
    },

    camille: {
      name: data.protagonist.name,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        angry: "",
        happy: "./Images/Characters/Luna.png",
        upset: "",
      },
    },
   
    violet: {
      name: "Violet Grisham: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Nina.png",
        happy: "./Images/Characters/Nina.png",
        upset: "",
      },
    },
    luna: {
      name: "Luna Grisham: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Luna.png",
        happy: "./Images/Characters/Luna.png",
        upset: "",
      },
    },
    james: {
      name: "James Taylor: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Luna.png",
        happy: "./Images/Characters/Luna.png",
        upset: "",
      },
    },
    marie: {
      name: "Marie: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Luna.png",
        happy: "./Images/Characters/Luna.png",
        upset: "",
      },
    },
    schlüssel: {
      name:"schlüssel",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Schluessel.png",
      },
    },
    geld: {
      name:"Geld",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Geld.png",
      },
    },
    buch: {
      name:"Tagebuch",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Tagebuch.png",
      },
    },
    safe: {
      name:"Safe",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Safe.png",
      },
    },
    knife: {
      name:"Messer",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Messer.png",
      },
    },
    poison: {
      name:"Gift",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Gift.png",
      },
    },
    labor: {
      name:"Laborbericht",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Laborbericht.png",
      },
    },

  };
  //Animation
  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positions.bottomright },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function fromleftToCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positions.bottomcenter },
      duration: 1.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function fromlefterToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positionPercent(31, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromCenterToCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.2, 0.2) },
      end: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.2, 0.2) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export let dataForSave = {
    points:0,
    gesprochen:{
      marie:false,
      james:false,
      violet:false,
      luna:false
    }
  };

  //Menü
  let inGameMenu = {
    save: "Save",
    load: "Load",
    credits: "Credits",
    volumeup: "+",
    volumedown: "-",
    inventar: "Inventar",
  };

  export let gameMenu: ƒS.Menu;

  let volume: number = 5.0;

  export function incrementSound(): void {
    if (volume >= 10) return;
    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0) return;
    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print(
      "Die Visual Novel wurde mit FudgeStory erstellt." +
        "<br/>" +
        "Von Leonie Schwall" +
        "<br/>" +
        "Die Elemente wurden selbst gezeichnet." +
        "<br/>"
    );
  }

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.volumeup:
        incrementSound();
        break;
      case inGameMenu.volumedown:
        decrementSound();
        break;
      case inGameMenu.inventar:
        await ƒS.Inventory.open();
        break;
      case inGameMenu.credits:
        showCredits();
        break;
    }
  }

  let menu: boolean = true;

  //Shortcuts fürs Menu
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
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
        } else {
          console.log("Open");
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }
  console.log(1);
  window.addEventListener("load", start);
  function start(_event: Event): void {
    console.log(2);
    //Menu
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");

    //Szenen aufrufen
    let scenes: ƒS.Scenes = [
      { id:"introduction",scene: Introduction, name: "Introduction", },
      { id:"scene1",scene: Scene1, name: "Scene1" },
      { id:"scene2",scene: Scene2, name: "Scene2" },
      { id:"scene3",scene: Scene3, name: "Scene3" },
      { id:"scene4",scene: Scene4, name: "Scene4" },
      { id:"scene5",scene: Scene5, name: "Scene5" },
      { id:"violet",scene: violet, name: "violet", next: "scene5" },
      { id:"james",scene: james, name: "james", next: "scene5" },
      { id:"luna",scene: luna, name: "luna", next: "scene5" },
      { id:"marie",scene: marie, name: "marie", next: "scene5" },
      { id:"GoodEnding",scene: GoodEnding, name: "GoodEnding" },
      { id:"BadEnding",scene: BadEnding, name: "BadEnding" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    // ƒS.Progress.setData(data);
    ƒS.Progress.go(scenes);
  }
}
