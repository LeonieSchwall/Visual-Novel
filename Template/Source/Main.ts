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

  export let locations = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/background/zimmer.jpg"
    }
  };

  export let characters = {
    narrator: {
      name:"",
    },
    boy: {
      name: "Alex",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "./Images/Characters/Boy.png",
        upset: ""
      }
    },
    
    girl: {
      name: "Nina",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "./Images/Characters/Girl3.png",
        upset: ""
      }
    },
    girl2: {
      name: "Marla",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Girl.png",
        happy: "",
        upset: ""
      }
    },
    girl3: {
      name: "Luna",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/Girl3.png",
        happy: "",
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

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "SceneOne" }
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    // start the sequence
    ƒS.Progress.go(scenes);
  }

}