declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        clock: string;
        safe: string;
        safe2: string;
    };
    let items: {
        key: {
            name: string;
            description: string;
            image: string;
        };
        labor: {
            name: string;
            description: string;
            image: string;
        };
        safe: {
            name: string;
            description: string;
            image: string;
        };
        book: {
            name: string;
            description: string;
            image: string;
        };
        knife: {
            name: string;
            description: string;
            image: string;
        };
        paper: {
            name: string;
            description: string;
            image: string;
        };
        poison: {
            name: string;
            description: string;
            image: string;
        };
        safecode: {
            name: string;
            description: string;
            image: string;
        };
        money: {
            name: string;
            description: string;
            image: string;
        };
    };
    let locations: {
        Startscreen: {
            name: string;
            background: string;
        };
        büro: {
            name: string;
            background: string;
        };
        bibliothek: {
            name: string;
            background: string;
        };
        haus: {
            name: string;
            background: string;
        };
        kammer: {
            name: string;
            background: string;
        };
        tatort: {
            name: string;
            background: string;
        };
    };
    let data: {
        protagonist: {
            name: string;
        };
        score: number;
        state: {
            a: number;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        camille: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        schlüssel: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        violet: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        luna: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        james: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        maria: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function fromleftToCenter(): ƒS.AnimationDefinition;
    function fromlefterToLeft(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
}
declare namespace Template {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene2(): ƒS.SceneReturn;
}
