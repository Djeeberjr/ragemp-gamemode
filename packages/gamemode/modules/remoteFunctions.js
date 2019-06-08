/**
 * ---SERVER---
 * Implement all functions the client can call on the server (See bridge.js on clientside)
 */
const logger = require("./logger");

module.exports = {
	spawnVehicleAtPlayer(player,vehName){
		logger.info(`Spawning ${vehName} near ${player.name}`);
		let pos = player.position;
		pos.x += 2;
		mp.vehicles.new(mp.joaat(vehName), pos);
	},
	kys(player){
		logger.info(`Killing player ${player.name}`);
		player.health = 0;
	},
	giveWeapon(player,weaponHash,ammo = 0){
		logger.info(`Giving weapon ${weaponHash} and ammo ${ammo} to ${player.name}`);
		player.giveWeapon(weaponHash,ammo);
	}
};
