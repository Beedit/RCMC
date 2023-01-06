// config.js
import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SliderProperty, @SelectorProperty, Color } from 'Vigilance';

@Vigilant("RCMC", "RCMC", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Bot"]
        return categories.indexOf(a.name) - categories.indexOf(b.name)
    }
})
class Settings {
    @SwitchProperty({
        name: "Enabled",
        description: "Whether or not the module is enabled.",
        category: "General",
    })
    enabled = true;

    @TextProperty({
        name: "Port",
        description: "The port of the websocket server",
        category: "General",
        placeholder: "2442"
    })
    port = "2442";

    @TextProperty({
        name: "Host",
        description: "The host of the websocket server",
        category: "General",
        placeholder: "localhost"
    })
    host = "localhost";

    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "&dRCMC Settings");
    }
}

export default new Settings();
