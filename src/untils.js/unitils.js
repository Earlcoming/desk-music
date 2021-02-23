let storage = window.localStroage;
export default {
	setStore(name, info) {
		if(!name) return;
		if(typeof info !== 'string'){
			info = JSON.stringify(info);
		}
		storage.setItem(name, info);
	},
	getStore(name){
		if(!name) return null;
		return storage.getItem(name);
	},
	deleteStore(name){
		if(!name) return;
		storage.removeItem(name);
	}
}