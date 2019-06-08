/*
██████╗ ██████╗  ██████╗ ██╗    ██╗███████╗███████╗██████╗ 
██╔══██╗██╔══██╗██╔═══██╗██║    ██║██╔════╝██╔════╝██╔══██╗
██████╔╝██████╔╝██║   ██║██║ █╗ ██║███████╗█████╗  ██████╔╝
██╔══██╗██╔══██╗██║   ██║██║███╗██║╚════██║██╔══╝  ██╔══██╗
██████╔╝██║  ██║╚██████╔╝╚███╔███╔╝███████║███████╗██║  ██║
╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝╚═╝  ╚═╝                                                         
*/

import {} from "./chat/chatAPI"; // Init the chat api for ragemp to talk to the browser
import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Load mock data if needed
if(DEVELOPMENT){
	require("./mock/mock");
	require("./mock/mock.css");
}else{
	require("./modules/errorHandle");
}

Vue.use(BootstrapVue);

// Create main Vue
window.onload = ()=>{
	new Vue({
		el:"#app",
		render: h => h(App)
	});
};


