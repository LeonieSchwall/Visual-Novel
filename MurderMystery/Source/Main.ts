namespace MurderMystery {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Template");

  //define transition
  export let transition = {
    clock: {
      duration: 1,
      alpha: "./FreeTransitions/circle.jpg",
      edge: 1,
    },
    puzzle: {
      duration: 1,
      alpha: "./FreeTransitions/puzzle.png",
      edge: 1,
    },
    wipe: {
      duration: 1,
      alpha: "./FreeTransitions/2.jpg",
      edge: 1,
    },
    circle: {
      duration: 1,
      alpha: "./FreeTransitions/1.jpg",
      edge: 1,
    },
    wipe2: {
      duration: 1,
      alpha: "./FreeTransitions/3.png",
      edge: 1,
    },
  };

  export let sound = {
    //music 
    backgroundBibliothek: "./Audio/backgroundBibliothek.wav",
    backgroundBuero: "./Audio/backgroundBuero.wav",
    backgroundEnde: "./Audio/backgroundEnde.wav",
    backgroundHaus: "./Audio/backgroundHaus.wav",
    backgroundKammer: "./Audio/backgroundKammer.wav",
    backgroundWohnzimmer: "./Audio/backgroundWohnzimmer.wav",
    //sound
    paper: "./Audio/paper1.wav",
    paper2: "./Audio/paper2.wav",
    safe: "./Audio/Safe1.wav",
    magie: "./Audio/magie.wav",
    handy: "./Audio/handy.wav",
    money: "./Audio/money.wav",
    anruf: "./Audio/call.wav",
    knife: "./Audio/knife.wav"
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
      description: "Todesursache Herzstillstand.",
      image: "./Images/Items/Laborbericht.png",
    },
    safe: {
      name: "Safe",
      description: "Safeinhalt ist unklar.",
      image: "./Images/Items/Safe.png",
    },
    book: {
      name: "Tagebuch",
      description: "James Taylor ist Grishams Sohn.",
      image: "./Images/Items/Tagebuch.png",
    },
    knife: {
      name: "Küchenmesser",
      description: "Keine Mordwaffe, denn das war Schweineblut.",
      image: "./Images/Items/Messer.png",
    },
    paper: {
      name: "Notizzettel",
      description: "James ist mein S",
      image: "./Images/Items/Notiz.png",
    },
    poison: {
      name: "Gift",
      description: "Mordwaffe",
      image: "./Images/Items/Gift.png",
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
      background: "./Images/background/Startscreen.jpg", 
    },
    buero: {
      name: "Büro",
      background: "./Images/background/Buero.jpg",
    },
    bibliothek: {
      name: "Bibliothek/Tatort",
      background: "./Images/background/Bibliothek.jpg",
    },
    haus: {
      name: "Wohnsitz der Familie",
      background: "./Images/background/Haus.jpg",
    },
    kammer: {
      name: "Dienstbotenzimmer",
      background: "./Images/background/Kammer.jpg",
    },
    wohnzimmer: {
      name: "Wohnzimmer",
      background: "./Images/background/Wohnzimmer.jpg",
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
    kriminalamt: {
      name: "Kriminalamt",
    },

    smith: {
      name: "Mr. Smith",
    },

    camille: {
      name: data.protagonist.name,
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        happy: "./Images/Characters/Camille.png",
        
      },
    },
   
    violet: {
      name: "Violet Grisham: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./Images/Characters/Violet.png",
      },
    },
    luna: {
      name: "Luna Grisham: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./Images/Characters/Luna.png",
      },
    },
    james: {
      name: "James Taylor: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./Images/Characters/James.png",
      },
    },
    marie: {
      name: "Marie: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        happy: "./Images/Characters/Marie.png",
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
    notiz: {
      name:"Notiz",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Items/Notiz.png",
      },
    },

  };
  //Animation
  export function fromLeftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(15,100) },
      end: { translation: ƒS.positions.bottomright },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }


  export function fromlefterToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(75,100) },
      end: { translation: ƒS.positionPercent(100, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }
  export function fromCenterToCenter(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
      end: { translation: ƒS.positions.center, scaling: new ƒS.Position(0.5, 0.5) },
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
        "Die Hintergründe, Charaktere und Items wurden selbst gezeichnet." +
        "<br/>" +
        "Die Transitions stammen aus dem FreeTransitions Ordner, der zu Verfügung gestellt wurrde." +
        "<br/>" +
        "Die Soundelemente wurden mit einer Envato Elements Lizenz lizensiert heruntergeladen" +
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
        const selectedItems:string[] = await ƒS.Inventory.open();
        if(selectedItems && selectedItems.length > 0){
          selectedItems.forEach((s)=>{
            Object.keys(items).forEach((i)=>{
              const item = items[i];
              if(item.name === s){
                ƒS.Inventory.add(item);
              }
            })
          })
        }
        break;
      case inGameMenu.credits:
        showCredits();
        break;
    }
  }

  let menu: boolean = true;

  export let delay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

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
      { id:"scene6",scene: Scene6, name: "Scene6" },
      { id:"scene7",scene: Scene7, name: "Scene7" },
      { id:"GoodEnding",scene: GoodEnding, name: "GoodEnding", next:"End" },
      { id:"BadEnding",scene: BadEnding, name: "BadEnding", next:"End" },
      { id:"End",scene: End, name: "End" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    // ƒS.Progress.setData(data);
    ƒS.Progress.go(scenes);
  }
}
