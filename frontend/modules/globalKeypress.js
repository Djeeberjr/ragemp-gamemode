/**
 * A module to register global keypesses.
 * Register globalkeypresses e.g. press "T" to open chat.
 * Only fires when not in focus
 * 
 * Find keycode:
 * https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes 
 */
import bus from "./eventBus";

let inFocus = false;

document.body.addEventListener("keypress", (e)=>{  
	if(!inFocus){
		bus.emit("keypress." + e.which,e);
	}
});

document.addEventListener("keydown", (e)=>{
	if(!inFocus){
		bus.emit("keydown." + e.which,e);
	}
});

document.addEventListener("keyup", (e)=>{
	if(!inFocus){
		bus.emit("keyup." + e.which,e);
	}
});


function apply(key,callback, type){
	if(!Array.isArray(key)){
		key = [key];
	}

	key.forEach(e => {
		if(typeof e === "string"){
			bus.on(type + "."+e.charCodeAt(0),callback);
		}else if (typeof e === "number"){
			bus.on("" + type + "."+e,callback);
		}
        
	});
}


export default {
	keyPress(key,callback){
		apply(key,callback,"keypress");
	},
	keyDown(key,callback){
		apply(key,callback,"keydown");
	},
	keyUp(key,callback){
		apply(key,callback,"keyup");
	},
	focus(focus){
		inFocus = focus;
	}
};
