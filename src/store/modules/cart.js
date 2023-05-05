export default {
	namespaced: true,
	state: {
		products: []
		
	},
	getters: {
		products(state){
			return state.products;
		},
		cnt(state){
			return state.products.length;
		},
		
	},
	mutations: {
		
		add(state, id) {
			state.products.push(id);
		  },
		  remove(state, id) {
			const index = state.products.indexOf(id);
			if (index !== -1) {
			  state.products.splice(index, 1);
			}
		  },
		  clear(state) {
			state.products = [];
		  }
	},
	actions: {
		clearCart({ commit }) {
			commit('clear');
		  },
		add(store, id_product){
			store.commit('add', id_product);
		},
		remove(store, id_product){
			store.commit('remove', id_product);
		},
	
	}
};