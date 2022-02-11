namespace Template {
    export async function Scene5(): ƒS.SceneReturn {
        console.log("FudgeStory Template Scene5 starting");

        //   if(wen)

        //     let whlen{}
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


        await ƒS.Location.show(locations.wohnzimmer);
        await ƒS.update(1);
        await ƒS.Character.show(characters.camille, characters.camille.pose.happy, ƒS.positionPercent(30, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.camille, text.camille.T0000);
        

        if (Object.keys(zusprechen).length > 0) {
            let antwort: string = await ƒS.Menu.getInput(
                zusprechen,
                "auswahl"
            );

            if (antwort === "Violet") {
                return "violet"
            }

            if (antwort === "james") {
                return "james"
            }
             if (antwort === "luna") {
                return "luna"
            }
            if (antwort === "marie") {
                return "marie"
            }
        
        }
        else {
            return "scene6"
        }
        
    }
}