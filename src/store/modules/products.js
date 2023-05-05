import Vue from 'vue';



export default {
	namespaced: true,
	state: {
		items: [

			{
				id_product: 10,
				title: 'Apple iPhone 14 Pro Max 128GB',
				price: 103990,
				image: 'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone%2014/14%20pro/iphone-14-pro-max-deep-purple-kupit-350x350.webp',
				description: 'описание ' 
				
				,
				images: [ 
					'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone%2014/14%20pro/iphone-14-pro-max-deep-purple-obzor-350x350.webp',
					'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone%2014/14%20pro/iphone-14-pro-max-deep-purple-foto-350x350.webp',
					'https://caviar-phone.ru/_images/26928/1618683170.png',
				  ]
			},
			{
				id_product: 20,
				title: 'Apple iPhone 13 Pro Max',
				price: 90000,
				image: 'https://best-magazin.com/image/cachewebp/catalog/13%20pro%20max%20Alpine/3207787215-350x350.webp',
				description: 'описание ',
				images: [ 
					'https://best-magazin.com/image/cachewebp/catalog/13%20pro%20max%20Alpine/3207787215-74x74.webp',
					'https://best-magazin.com/image/cachewebp/catalog/13%20pro%20max%20Alpine/GR0P_3DD1DE1A-C778-4CD9-BE8E-02649091E902_large-74x74.webp',
					'https://best-magazin.com/image/cachewebp/catalog/13%20pro%20max%20Alpine/iphone_13_pro_max_verde_alpino_05_ad_l-74x74.webp',
				  ]
			},
			{
				id_product: 30,
				title: 'Apple iPhone 8',
				price: 43087,
				image: 'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone8%28X%29/smartfon-iphone-8-silver-obzor-350x350.webp',
				description: 'описание ',
				images: [ 
					'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone8%28X%29/smartfon-iphone-8-silver-obzor-74x74.webp',
					'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone8%28X%29/smartfon-iphone-8-silver-cena-74x74.webp',
					'https://best-magazin.com/image/cachewebp/catalog/product/Apple%20iPhone8%28X%29/smartfon-iphone-8-silver-otzivi-74x74.webp',
				  ],
				availability: 'нет в наличии'
			}

		],
		cart: []
	},
	getters: {
		inCart: (state) => (id) => {
			return state.cart.findIndex((item) => item.id === id) !== -1;
		  },
		items(state){
			return state.items;
		},
		itemsMap(state){
			let itemsMap = {};

			for(let i = 0; i < state.items.length; i++){
				let product = state.items[i];
				itemsMap[product.id_product] = product;
			}

			return itemsMap;
		},
		item: (state, getters) => (id) => {
			return getters.itemsMap[id];
		}
	},
	mutations: {
		addToCart(state, item) {
		  state.cart.push(item);
		},
		removeFromCart(state, index) {
		  state.cart.splice(index, 1);
		}
	  },
	  actions: {
		addToCart({ commit }, item) {
		  commit('addToCart', item);
		},
		removeFromCart({ commit, state }, item) {
		  const index = state.cart.findIndex(i => i.id === item.id);
		  if (index >= 0) {
			commit('removeFromCart', index);
		  }
		}
	  }
};

