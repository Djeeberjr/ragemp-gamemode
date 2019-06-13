const remoteFunctions = {
	pong(){
		mp.gui.chat.push("Pong from chat push");
	},
	interactive(code){
		if(!DEVELOPMENT) return;
		mp.gui.chat.push("cunt");
		(()=>{
			"use strict";
			let rtn = eval(code);
		})();
	}
};

module.exports  = remoteFunctions;
