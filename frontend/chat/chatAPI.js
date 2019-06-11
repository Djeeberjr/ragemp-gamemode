/**
 * This file is special. Rage requires a object called "chatAPI" to be global to use this as an API for the chat. 
 * You can use this if you want to push a message on the chat from inside of the cef.
 */
import bus from "./../modules/eventBus";
import debug from "./../debug/debug";

window.chatAPI = {
	push: (text)=>{
		debug.info(`[CHAT] push: ${text}`);
		bus.emit("chat.push",text);
	},	
	clear:  ()=>{
		debug.info("[CHAT] clear");
		bus.emit("chat.clear");
	},	
	activate:  (toggle)=>{
		debug.info(`[CHAT] toggle: ${toggle}`);
		bus.emit("chat.activate",toggle);
	},	
	show:  (toggle)=>{
		debug.info(`[CHAT] show: ${toggle}`);
		bus.emit("chat.show",toggle);
	}
};