import bridge from "./bridge";

export default (action)=>{
	switch (action) {
	case "spawn_deluxo":
		bridge.invokeServer("spawnVehicleAtPlayer","deluxo");
		break;
	case "spawn_opressor":
		bridge.invokeServer("spawnVehicleAtPlayer","oppressor2");
		break;
	default:
		break;
	}
};