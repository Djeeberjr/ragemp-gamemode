<template>
  <div>
    <b-form-textarea v-model="output" rows="15" max-rows="15" no-resize readonly></b-form-textarea>
	<div class="input-group">
		<b-form-input v-model="input" @keyup.13="submit"></b-form-input>
		<b-form-select class="select" v-model="scope" :options="[{text:'Client',value:'client'},{text:'Server',value:'server'}]"></b-form-select>
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
			scope: "client"
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
	.select{
		max-width: 20%;
	}
</style>
