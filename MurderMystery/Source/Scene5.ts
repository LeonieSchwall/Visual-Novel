namespace MurderMystery {
    export async function Scene5(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene5 starting");

        let zusprechen = {
            marie: "Marie",
            james: "James",
            luna: "Luna",
            violet: "Violet"
        };
        if (dataForSave.gesprochen.marie) {
            delete zusprechen.marie
        }
        if (dataForSave.gesprochen.violet) {
            delete zusprechen.violet
        }
        if (dataForSave.gesprochen.james) {
            delete zusprechen.james
        }
        if (dataForSave.gesprochen.luna) {
            delete zusprechen.luna
        }
        


        let text = {

            camille: {
                T0000: "Mit wem soll ich denn sprechen?",
            },

        };

        ƒS.Sound.fade(sound.backgroundWohnzimmer, 0.07, 0.1, true); 
        await ƒS.Location.show(locations.wohnzimmer);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(15, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.camille, text.camille.T0000);
        

        if (Object.keys(zusprechen).length > 0) {
            let antwort: string = await ƒS.Menu.getInput(
                zusprechen,
                "auswahl"
            );
                console.log(antwort)
            if (antwort === "Violet") {
                return "violet"
            }

            if (antwort === "James") {
                return "james"
            }
             if (antwort === "Luna") {
                return "luna"
            }
            if (antwort === "Marie") {
                return "marie"
            }
        
        }
        else {
            return "scene6"
        }
        ƒS.Sound.fade(sound.backgroundWohnzimmer, 0, 0.2, true);   
    }
}