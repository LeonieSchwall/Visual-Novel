namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Tutorial_WS21 starting");

  //define transition//
  export let transitions = {
    clock: {
      duration: 1,
      alpha:"./FreeTransitions/puzzle.png",
      edge: 1
    }
  };

  export let sound = {
    //music
    backgroundTheme:"",
    //sound
    click: "",

  };

  export let items = {
    pen: {
      name:"Roter Stift",
      description:"",
      image:"",
    }
  };

  export let locations = {
    lagerfeuer: {
      name: "Lagerfeuer",
      background: "./Images/background/lagerfeuer.webp"
    }
  };

  export let characters = {
    narrator: {
      name:"",
    },
    boy: {
      name: "Jakob: ",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        angry: "",
        happy: "./Images/Characters/Boy_.png",
        upset: ""
      }
    },
    
  
    girl2: {
      name: "Nina: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Nina.png",
        happy: "",
        upset: ""
      }
    },
    luna: {
      name: "Luna: ",
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
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP

    };
  }

  export let dataForSave = {

  };

  //Menü
  let inGameMenu ={
    save: "Save",
    load: "Load",
    close: "Close",
    open: ""
  };

  let gameMenu: ƒS.Menu;

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
    //Szenen
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "SceneOne" }
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    ƒS.Progress.go(scenes);
  }

}