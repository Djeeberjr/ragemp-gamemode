const spawnPoints = require("./../assets/spawnPoints.json");
const logger = require("./logger");
const cod = require("./../../../sharedAssets/cod.json"); // cause of death table

class RespawnManager {
	constructor(){
		this.registerEvent();
	}

	registerEvent(){
		mp.events.add("playerDeath", this.handleDeath);
		mp.events.add("playerJoin",this.handleJoin);
	}

	handleDeath(player, reason, killer){
		if(killer){
			logger.info(`${player.name} died. Killer: ${killer.name} Reason: ${cod[reason]}`);
		}else{
			logger.info(`${player.name} died. Reason: ${cod[reason]}`);
		}
		
		setTimeout(()=>{
			player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
		}, 5000);
       
	}

	handleJoin(player){
		logger.info(`${player.name} joined`);
		player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
	}
}

const respawnManager = new RespawnManager();

module.exports = respawnManager;
