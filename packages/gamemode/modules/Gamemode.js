
const bridge = require("./bridge");

class Gamemode{
	constructor(){
		this.respawnManager = require("./RespawnManager");
	}

	init(){
		require("./bridge");
        
		mp.events.addCommand("/ping", (player) => {
			player.outputChatBox("pong from rage");
			bridge.invokeClient(player,"pong","from bridge to client chat push");
		});
	}

}

const gamemode = new Gamemode();

module.exports = gamemode;
