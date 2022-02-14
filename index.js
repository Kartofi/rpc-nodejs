const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Finding My Dad",
        state: "nothing so far",
        largeImageKey: "1629390298818",
        largeImageText: "1629390298818",
        buttons : [{label : "Dad", url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]
    })

    console.log("RPC active");
})

rpc.login({
    clientId: "629948362245799937"
})