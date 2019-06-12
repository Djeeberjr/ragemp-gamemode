<template>
  <div>
    <b-form-textarea v-model="output" rows="15" max-rows="15" no-resize readonly></b-form-textarea>
	<div class="input-group">
		<b-form-input v-model="input" @keyup.13="submit"></b-form-input>
		<b-button @click="toggleScope" class="scope">{{this.scopeDisplay}}</b-button>
	</div>
  </div>
</template>

<script>
import bridge from '../modules/bridge';
import eventBus from '../modules/eventBus';

export default {
	data(){
		return {
			output: "",
			input: "",
			scope: "client",
			scopeDisplay: "Client"
		};
	},
	methods: {
		submit(){
			if(this.scope === "client"){
				bridge.invokeClient("interactive",this.input);
			}else{
				bridge.invokeServer("interactive",this.input);
			}
			
			this.input = "";
		},
		toggleScope(){
			if(this.scope === "client"){
				this.scope = "server";
				this.scopeDisplay = "Server";
			}else{
				this.scope = "client";
				this.scopeDisplay = "Client";
			}
		}
	},
	beforeMount(){
		eventBus.on("interactive.output",(text)=>{
			this.output += text + "\n";
		});
	}
};
</script>

<style scoped>
	.scope{
		max-width: 20%;
	}
</style>
