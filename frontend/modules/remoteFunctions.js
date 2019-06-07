import bus from "./eventBus";

export default {
	emit(event,payload){
		bus.emit(event,payload);
	}
};
