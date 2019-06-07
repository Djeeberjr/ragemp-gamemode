/**
 * ---SERVER---
 */

const remoteFunctions = require("./remoteFunctions");
const logger = require("./logger");

mp.events.add("bridgeClientToServer",(player,payloadJson)=>{
	// Fired when a message comes from the client to the server
	let info = JSON.parse(payloadJson);
	logger.info(`${player.name} remote called ${info.function}(${info.parameter})`);

	if(typeof remoteFunctions[info.function] === "function"){
		remoteFunctions[info.function](player,...info.parameter);
	}else{
		// Function not found
	}

});

function invokeClient(player,nameofFunction,...parameter){
	logger.info(`invokeClient to:${player.name} ${nameofFunction}(${parameter})`);

	let jsonPayload = JSON.stringify({
		to:"client",
		function:nameofFunction,
		parameter: parameter
	});

	logger.debug("jsonPayload: "+ jsonPayload);

	player.call("bridgeServerToClient",[jsonPayload]);
}

module.exports = {
	invokeClient
};
