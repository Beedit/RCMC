export class Settings {
    constructor() {
        this.name = "settings"
        this.description = "Opens the settings GUI."
    }
    run = () => {
        Settings.openGUI()
    }
}
