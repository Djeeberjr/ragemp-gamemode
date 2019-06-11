import bus from "./../modules/eventBus";

export default {
	debug(text){
		if (!DEBUG) return;
		bus.emit("debug.debug",text);
	},
	info(text){
		if (!DEBUG) return;
		bus.emit("debug.info",text);
	},
	error(text){
		if (!DEBUG) return;
		bus.emit("debug.error",text);
	},
	warn(text){
		if (!DEBUG) return;
		bus.emit("debug.warn",text);
	}
};
