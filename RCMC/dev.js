const mc = Client.getMinecraft();
const Base64 = java.util.Base64.Encoder

const log = (thing) => {
    console.log(thing)
    ChatLib.chat(thing)
}

log("Currently RCMC is not working cos the default file is set to dev.js not to index.js. If you dont know why this is showing here then go into metadata.json and change dev.js to index.js")

register("command", (...args) => {
    Client.scheduleTask(() => {
        net.minecraft.util.ScreenShotHelper.func_148259_a(
            Client.getMinecraft().field_71412_D,
            "statusImage.png",
            Client.getMinecraft().field_71443_c,
            Client.getMinecraft().field_71440_d,
            Client.getMinecraft().func_147110_a()
        );
    });

    let statusImg = new Image(javax.imageio.ImageIO.read(new java.io.File("~/home/beedit/.config/gdlauncher_next/instances/Skyblock/screenshots/")))

    log(Base64.encode(statusImg))

}).setName("rcmc")