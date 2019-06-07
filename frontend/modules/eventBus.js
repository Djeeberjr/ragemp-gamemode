import Vue from "vue";

const bus = new Vue();

export default {
	on(event,callback){
		bus.$on(event,callback);
	},
	emit(event,payload){
		bus.$emit(event,payload);
	},
	off(event,callback){
		bus.$off(event,callback);
	},
	once(event,callback){
		bus.$once(event,callback);
	}
};
