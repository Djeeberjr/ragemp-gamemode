/**
 * ---BROSER---
 */
import remoteFunctions from "./remoteFunctions";
import debug from "./../debug/debug";

// create the exposed object the client can talk to.
window.bridge = {
	invoke: handleInvocation
};

function handleInvocation(paylod){
	const info = JSON.parse(paylod);
	
	if(remoteFunctions[info.function] === "function"){
		remoteFunctions[info.function](...info.parameter);
	}else{
		// Function not found
	}
}

function invokeClient(info){
	mp.trigger("bridgeBroswerToClient",JSON.stringify(info));
}

export default {
	invokeClient(nameOfFunction,...parameter){
		if(DEVELOPMENT) console.debug(`[BRIDGE] invokeClient(${nameOfFunction},${parameter})`);
		if(DEBUG) debug.debug(`[BRIDGE] invokeClient(${nameOfFunction},${parameter})`);
		
		invokeClient({
			to:"client",
			function:nameOfFunction,
			parameter
		});
	},
	invokeServer(nameOfFunction,...parameter){
		if(DEVELOPMENT) console.debug(`[BRIDGE] invokeServer(${nameOfFunction},${parameter})`);
		if(DEBUG) debug.debug(`[BRIDGE] invokeServer(${nameOfFunction},${parameter})`);

		invokeClient({
			to:"server",
			function:nameOfFunction,
			parameter
		});
	}
};

