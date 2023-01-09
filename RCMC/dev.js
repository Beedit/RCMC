const mc = Client.getMinecraft();

const log = (thing) => {
    console.log(thing)
    ChatLib.chat(thing)
}


register("command", (...args) => {
    Client.scheduleTask(() => {
        net.minecraft.util.ScreenShotHelper.func_148259_a(
            `${Client.getMinecraft().field_71412_D}/config/ChatTriggers/modules/RCMC`,
            "statusImage.png",
            Client.getMinecraft().field_71443_c,
            Client.getMinecraft().field_71440_d,
            Client.getMinecraft().func_147110_a()
        );
    });
    log(Client.getMinecraft().field_71412_D)

}).setName("rcmc")