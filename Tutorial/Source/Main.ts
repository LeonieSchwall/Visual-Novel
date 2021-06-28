namespace Tutorial {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Start");





  // define transitions
  export let transition = {
    clock: {
      duration: 1.5,
      alpha: "FreeTransitions/WipesAndOther/circlewipe-ccw.jpg",
      edge: 1
    }
  };

  // define sound
  export let sound = {
    // Music
    backgroundTheme: "Audio/Nightclub.ogg",

    // Sound
    click: ""
  };

  export let locations = {
    city: {
      name: "Cloudy City",
      background: "Images/Backgrounds/bg_city_cloudy.png"
    },
    bench: {
      name: "Bench 1",
      background: "Images/Backgrounds/bg_bench.png"
    }
  };


  // define characters that will show on the stage with some data 
  export let characters = {
    Narrator: {
      name: ""
    },
    Aoi: {
      name: "Aoi",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Aoi_normal.png"
      }
    },
    Ryu: {
      name: "Ryu",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/Ryu_normal.png",
        smile: ""
      }
    }
  };





  // define items as key-object-pairs, the objects with the properties name, description and an address to an image
  export let items = {
    // Toy: {
    //   name: "Fish",
    //   description: "Fishy fish",
    //   image: "Images/Items/fishySmall.png"
    // },
    // Blobbys
    BlobRED: {
      name: "Blob Red",
      description: "A reddish something",
      image: "Images/Items/blobRED.png"
    },
    BlobBU: {
      name: "Blob Blue",
      description: "A blueish something",
      image: "Images/Items/blobBU.png"
    },
    BlobDKBU: {
      name: "Blob DK Blue",
      description: "A dark blueish something",
      image: "Images/Items/blobDKBU.png"
    },
    BlobGN: {
      name: "Blob Green",
      description: "A greenish something",
      image: "Images/Items/blobGN.png"
    },
    BlobPK: {
      name: "Blob Pink",
      description: "A pinkish something",
      image: "Images/Items/blobPK.png"
    },
    BlobYL: {
      name: "Blob Yellow",
      description: "A yellowish something",
      image: "Images/Items/blobYL.png"
    },
    BlobOG: {
      name: "Blob Orange",
      description: "An orangeish something",
      image: "Images/Items/blobOG.png"
    }
  };

  // tell FUDGE Story the data to save besides the current scene
  export let dataForSave = {
    score: 0,
    // to fix
    Protagonist: {
      name: "Protagonist"
    },
    nameProtagonist: "Protagonist",
    scoreAoi: 0,
    scoreForAoi: "",
    scoreRyu: 0,
    scoreForRyu: "",
    started: false,
    ended: false
  };


  //  MENU - Audio functions

  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume < 100) {
      volume += 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  export function decrementSound(): void {
    if (volume > 0) {
      volume -= 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Hello Test Test");

    // showCredits();
  }

  // MENU - create Menu with Buttons

  let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    turnUpVolume: "+",
    turndownVolume: "-",
    credits: "Credits",
    about: "About",
    open: "Open"
  };




  // MENU - create Menu with buttons
  export let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
    }
    else if (_option == inGameMenu.turnUpVolume) {
      incrementSound();
    }
    else if (_option == inGameMenu.turndownVolume) {
      decrementSound();
    }
    if (_option == inGameMenu.close) {
      gameMenu.close();
    }
    if (_option == inGameMenu.open) {
      gameMenu.open();
    }
    if (_option == inGameMenu.credits) {
      showCredits();
    }
  }


  // true heißt hier offen und false geschlossen
  export let testo: boolean = true;




  // shortcuts to save and load game progress
  // && doesn't work in a switch
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      // case ƒ.KEYBOARD_CODE.X:
      //   console.log("Close");
      //   gameMenu.close();
      //   break;
      // Englische Tastatur beachten, zwei Funktionen mit einer Taste
      case ƒ.KEYBOARD_CODE.Y:
        console.log("Open n Close");
        if (testo) {
          gameMenu.close();
          testo = false;
        }
        else {
          gameMenu.open();
          testo = true;
        }
        break;
    }
  }


  // shortcuts to open and close the inventory
  document.addEventListener("keydown", hndKeypressForInventory);
  async function hndKeypressForInventory(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        console.log("open inventory");
        await ƒS.Inventory.open();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        console.log("close inventory");
        await ƒS.Inventory.open();
        ƒS.Inventory.close();
        break;
    }
  }

  export function leftToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positions.bottomright },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function fromRightToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 100) },
      end: { translation: ƒS.positionPercent(120, 100) },
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    // MENU
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");



    // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
    let scenes: ƒS.Scenes = [
      // { scene: Text, name: "How To Text"},
      // { scene: Decision, name: "How To Decide" },
      // { scene: End, name: "End" },
      // { id: "Endo", scene: End, name: "This is an ending", next: "Endo" },
      // { scene: Inventory, name: "How To Make An Inventory" },
      // { scene: Animation, name: "How To Animate" },
      // { scene: GameMenu, name: "How To Make A Game Menu" },
      // { scene: Meter, name: "How To Make a Progress bar" },
      { scene: NovelPages, name: "Different uses of novel pages" }


    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }
}