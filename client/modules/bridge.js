/**
 * ---CLIENT---
 */
const browser = require("./createBrowser");
const remoteFunctions = require("./remoteFunctions");

mp.events.add(
	{
		"bridgeBroswerToClient": (payload) => {
			// Fired when a message comes from the broser to the client
			
			const info = JSON.parse(payload);
			if(info.to === "server"){
				invokeServer(payload);
			}else{
				handleInvoke(info);
			}
		},
		"bridgeServerToClient": payload => {
			// Fires when the server send a message to the client
			mp.gui.chat.push(payload);

			const info = JSON.parse(payload);
			handleInvoke(info);
		}
	});

function handleInvoke(info){
	if(typeof remoteFunctions[info.function] === "function"){
		remoteFunctions[info.function](...info.parameter);
	}else{
		// Function not found
	}
}

function invokeBrowser(payload){
	browser.execute(`bridge.invoke("${payload}")`);
}

function invokeServer(payload){
	mp.events.callRemote("bridgeClientToServer",payload);
}

module.exports = {
	browser(nameOfFunction,...parameter){
		invokeBrowser({
			function:nameOfFunction,
			parameter
		});
	},
	server(nameOfFunction,...parameter){
		invokeServer({
			to:"server",
			function:nameOfFunction,
			parameter
		});
	}
};
