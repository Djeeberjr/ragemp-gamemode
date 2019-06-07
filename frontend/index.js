/*
██████╗ ██████╗  ██████╗ ██╗    ██╗███████╗███████╗██████╗ 
██╔══██╗██╔══██╗██╔═══██╗██║    ██║██╔════╝██╔════╝██╔══██╗
██████╔╝██████╔╝██║   ██║██║ █╗ ██║███████╗█████╗  ██████╔╝
██╔══██╗██╔══██╗██║   ██║██║███╗██║╚════██║██╔══╝  ██╔══██╗
██████╔╝██║  ██║╚██████╔╝╚███╔███╔╝███████║███████╗██║  ██║
╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝╚═╝  ╚═╝                                                         
*/

import {} from "./modules/chatAPI"; // Init the chat api for ragemp to talk to the browser
import Vue from "vue";
import App from "./App.vue";

// Load mock data if needed
if(DEVELOPMENT){
	require("./mock/mock");
	require("./mock/mock.css");
}else{
	require("./modules/errorHandle");
}

// Create main Vue
window.onload = ()=>{
	new Vue({
		el:"#app",
		render: h => h(App)
	});
};


