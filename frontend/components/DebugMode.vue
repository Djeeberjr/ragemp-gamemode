<template>
	<div v-if="!hidden" class="container">
		<div class="closeButton" @click="hide">
			X
		</div>
		<div class="group-container">
			Quick action: 
			<model-list-select
				class="dropdown"
				:list="quickActions"
				v-model="selectedQuickAction"
				option-value="value"
                option-text="text"
				>
			</model-list-select>
			<button @click="perfomQuickAction">Do it</button>
		</div>
		<br>
		<div class="group-container">
			Spawn Vehicle:
			<model-list-select
				class="dropdown"
				:list="allVehicles"
				v-model="selectedVehicle"
				option-value="id"
                option-text="displayName"
				>
			</model-list-select>
			<button @click="spawnSelectedVehicle">Spawn</button>
		</div>
	</div>
	

</template>

<script>

import keypress from "./../modules/globalKeypress";
import perfomQuickAction from "./../modules/performQuickAction";
import allVehicles from "./../../sharedAssets/vehicles.json";
import bridge from "./../modules/bridge";
import { ModelListSelect  } from 'vue-search-select'

export default {
	data() {
		return {
			hidden:true,
			quickActions: [
				{text :"Spawn Opressor ",value:"spawn_opressor"},
				{text :"Spawn Deluxo", value:"spawn_deluxo"},
				{text :"Easy way out", value:"kys"}
			],
			selectedQuickAction: "",
			selectedVehicle:"",
		}
	},
	components: {
      ModelListSelect 
    },
	methods: {
		perfomQuickAction(){
			perfomQuickAction(this.selectedQuickAction);
		},
		spawnSelectedVehicle(){
			bridge.invokeServer("spawnVehicleAtPlayer",this.selectedVehicle);
		},
		hide(){
			this.hidden = true;
			keypress.focus(false);
			mp.invoke("focus", false);
		},
		show(){
			this.hidden = false;
			this.selectedQuickAction = "";
			this.selectedVehicle = "";
			keypress.focus(true);
			mp.invoke("focus", true);
		},
		toggleShow(){
			if(this.hidden){
				this.show();
			}else{
				this.hide();
			}
		}
	},
	computed: {
		allVehicles(){
			return allVehicles;
		}
	},
	beforeMount() {
		// Register keypresses

		// 113 is "F2" but you can only catch that with keyDown
		keypress.keyDown(113,(e)=>{
			this.toggleShow();
		});

	},
}
</script>

<style>

	.dropdown>div.text{

		padding: 0.67861429em 2.1em 0.67861429em 1em;
	}
</style>


<style scoped>
	.container{
		padding: 10px;
        background-color: rgba(146, 156, 170,0.9);
        width: 50%;
        height: 50%;

        position: absolute;
        top:25%;
        left: 25%;
	}

	.group-container{

	}
	
	.dropdown{
		max-width: 20%;
		padding: 0px !important;
	}


	.closeButton{
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
