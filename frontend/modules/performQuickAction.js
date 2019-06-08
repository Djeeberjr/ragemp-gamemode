import bridge from "./bridge";
import weapons from "./../../sharedAssets/weapons.json";

export default (action)=>{
	switch (action) {
	case "spawn_deluxo":
		bridge.invokeServer("spawnVehicleAtPlayer","deluxo");
		break;
	case "spawn_opressor":
		bridge.invokeServer("spawnVehicleAtPlayer","oppressor2");
		break;
	case "kys":
		bridge.invokeServer("kys");
		break;
	case "arm_yourself":
		bridge.invokeServer("giveWeapon",weapons.bat,9999);
		bridge.invokeServer("giveWeapon",weapons.pistol,9999);
		bridge.invokeServer("giveWeapon",weapons.raypistol,9999);
		bridge.invokeServer("giveWeapon",weapons.flaregun,9999);
		bridge.invokeServer("giveWeapon",weapons.microsmg,9999);
		bridge.invokeServer("giveWeapon",weapons.pumpshotgun,9999);
		bridge.invokeServer("giveWeapon",weapons.assaultrifle,9999);
		bridge.invokeServer("giveWeapon",weapons.combatmg,9999);
		bridge.invokeServer("giveWeapon",weapons.heavysniper,9999);
		bridge.invokeServer("giveWeapon",weapons.rpg,9999);
		bridge.invokeServer("giveWeapon",weapons.minigun,9999);
		bridge.invokeServer("giveWeapon",weapons.railgun,9999);
		break;
	default:
		break;
	}
};