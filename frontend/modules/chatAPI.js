/**
 * This file is special. Rage requires a object called "chatAPI" to be global to use this as an API for the chat. 
 * You can use this if you want to push a message on the chat from inside of the cef.
 */
import bus from "./eventBus";

window.chatAPI = {
	push: (text)=>{
		bus.emit("chat.push",text);
	},	
	clear:  ()=>{
		bus.emit("chat.clear");
	},	
	activate:  (toggle)=>{
		bus.emit("chat.activate",toggle);
	},	
	show:  (toggle)=>{
		bus.emit("chat.show",toggle);
	}
};