const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Finding My Dad",
        state: "nothing so far",
        largeImageKey: "some image name",
        largeImageText: "some image name",
        buttons : [{label : "Dad", url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]
    })

    console.log("RPC active");
})

rpc.login({
    clientId: "your id"
})
