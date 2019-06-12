<template>
	<div v-if="!hidden" class="container">
		<div class="closeButton" @click="hide">
			X
		</div>

		 <b-tabs>
			<b-tab title="Start" active>
				<div class="row">
					<div class="col">
					Quick action: 
					<model-list-select
						class="dropdown"
						:list="quickActions"
						v-model="selectedQuickAction"
						option-value="value"
						option-text="text"
						>
					</model-list-select>
					<b-button variant="primary" @click="perfomQuickAction">Do it</b-button>
					</div>
					<div class="col">
						Spawn Vehicle:
						<model-list-select
							class="dropdown"
							:list="allVehicles()"
							v-model="selectedVehicle"
							option-value="id"
							option-text="displayName"
							>
						</model-list-select>
						<b-button variant="primary" @click="spawnSelectedVehicle">Spawn</b-button>
					</div>
					<div class="col">
						Give Weapon:
						<model-list-select
							class="dropdown"
							:list="allWeapons()"
							v-model="selectedWeapon"
							option-value="hash"
							option-text="displayName"
							>
						</model-list-select>
						<b-button variant="primary" @click="giveSelectedWeapon">Spawn</b-button>
					</div>
				</div>
				<div class="row">
					
					<div class="col">
						Select skin:
						<model-list-select
							class="dropdown"
							:list="allSkins()"
							v-model="selectedSkin"
							option-text="value"
							option-value="value"
							>
						</model-list-select>
						<b-button variant="primary" @click="setSekectedSkin">Set</b-button>
					</div>
				</div>
			</b-tab>
			<b-tab title="Console">
				<b-form-textarea
					id="textarea"
					v-model="consoleText"
					rows="17"
					max-rows="17"
					no-resize
					plaintext 
				></b-form-textarea>
			</b-tab>
			<b-tab title="Interactive">
				<interactive-console/>
			</b-tab>
		</b-tabs>
	</div>
	

</template>

<script>

import keypress from "./../modules/globalKeypress";
import perfomQuickAction from "./../modules/performQuickAction";
import allVehicles from "./../../sharedAssets/vehicles.json";
import bridge from "./../modules/bridge";
import { ModelListSelect  } from 'vue-search-select'
import allWeapons from "./../../sharedAssets/weapons.json";
import bus from "./../modules/eventBus";
import allSkins from "./../../sharedAssets/skins.json";
import InteractiveConsole from "./InteractiveConsole.vue";

export default {
	data() {
		return {
			hidden:true,
			quickActions: [
				{text :"Spawn Opressor ",value:"spawn_opressor"},
				{text :"Spawn Deluxo", value:"spawn_deluxo"},
				{text :"Easy way out", value:"kys"},
				{text :"Arm yourself", value:"arm_yourself"}
			],
			selectedQuickAction: "",
			selectedVehicle:"",
			selectedWeapon: 0,
			selectedSkin:"",
			consoleText: ""
		}
	},
	components: {
	  ModelListSelect,
	  InteractiveConsole
    },
	methods: {
		perfomQuickAction(){
			perfomQuickAction(this.selectedQuickAction);
		},
		spawnSelectedVehicle(){
			bridge.invokeServer("spawnVehicleAtPlayer",this.selectedVehicle);
		},
		giveSelectedWeapon(){
			bridge.invokeServer("giveWeapon",this.selectedWeapon,9999);
		},
		setSekectedSkin(){
			bridge.invokeServer("setPlayerSkin",this.selectedSkin);
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
			this.selectedWeapon = 0;
			this.selectedSkin = "";
			keypress.focus(true);
			mp.invoke("focus", true);
		},
		toggleShow(){
			if(this.hidden){
				this.show();
			}else{
				this.hide();
			}
		},
		allVehicles(){
			return allVehicles;
		},
		allWeapons(){
			let rtn = [];
			for (const key in allWeapons) {
				if (allWeapons.hasOwnProperty(key)) {
					const element = allWeapons[key];
					rtn.push({displayName:key,hash:element});
				}
			}
			return rtn;
		},
		allSkins(){
			return allSkins.map((e)=>{
				return {value:e};
			});
		}
	},
	beforeMount() {
		// Register keypresses

		// 113 is "F2" but you can only catch that with keyDown
		keypress.keyDown(113,(e)=>{
			this.toggleShow();
		});

		// Register debug console events

		bus.on("debug.debug",(text)=>{
			this.consoleText += `[DEBUG] ${text} \n`;
		});

		bus.on("debug.info",(text)=>{
			this.consoleText += `[INFO] ${text} \n`;
		});

		bus.on("debug.warn",(text)=>{
			this.consoleText += `[WARN] ${text} \n`;
		});

		bus.on("debug.error",(text)=>{
			this.consoleText += `[ERROR] ${text} \n`;
		});

	},
}
</script>

<style>
	/*Dont know why but this is needed for the text in the dropdown menu to be centered*/
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
	
	.dropdown{
		padding: 0px !important;
	}


	.closeButton{
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
