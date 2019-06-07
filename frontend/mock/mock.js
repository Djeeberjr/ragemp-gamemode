/* eslint-disable no-console */
/* global chatAPI */

/**
 * Run this and you can use mp functions in your browser
 */
function log(text){
	console.debug("[MOCK] ",text);
}

const mp = {
	trigger(p1,p2){
		log(`trigger(${p1},${p2})`);
	},
	invoke(p1,p2){
		log(`invoke(${p1},${p2})`);
	},
	$chatPush(text){
		log(`Emitting chatAPI.push(${text})`);
		chatAPI.push(text);
	},
	$chatClear(){
		log("Emitting chatAPI.clear()");
		chatAPI.clear();
	}
};

log("Mock loaded");

window.mp = mp;
