declare namespace MurderMystery {
    function BadEnding(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function End(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function GoodEnding(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
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
        circle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipe2: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundBibliothek: string;
        backgroundBuero: string;
        backgroundEnde: string;
        backgroundHaus: string;
        backgroundKammer: string;
        backgroundWohnzimmer: string;
        paper: string;
        paper2: string;
        safe: string;
        magie: string;
        handy: string;
        money: string;
        anruf: string;
        knife: string;
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
        buero: {
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
        wohnzimmer: {
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
        kriminalamt: {
            name: string;
        };
        smith: {
            name: string;
        };
        camille: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        violet: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        luna: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        james: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        marie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                happy: string;
            };
        };
        schlüssel: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        geld: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        buch: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        safe: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        knife: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        poison: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        labor: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        notiz: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    function fromLeftToRight(): ƒS.AnimationDefinition;
    function fromlefterToLeft(): ƒS.AnimationDefinition;
    function fromCenterToCenter(): ƒS.AnimationDefinition;
    let dataForSave: {
        points: number;
        gesprochen: {
            marie: boolean;
            james: boolean;
            violet: boolean;
            luna: boolean;
        };
    };
    let gameMenu: ƒS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    let delay: ƒS.Signal;
}
declare namespace MurderMystery {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Scene3(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Scene4(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Scene5(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Scene6(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function Scene7(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function james(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function luna(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function marie(): ƒS.SceneReturn;
}
declare namespace MurderMystery {
    function violet(): ƒS.SceneReturn;
}
