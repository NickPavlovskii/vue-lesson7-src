<template>
	<div class="container">
	  <h1>Products</h1>
	  <div class="row">
		<div class="col-sm-4" v-for="product in products" :key="product.id_product">
			
			<div class="card mb-3">
				<router-link tag="h3" :to="'/products/' + product.id_product">
			<img :src="product.image" class="card-img-top" :alt="product.title">
		</router-link>
			<div class="card-body">
			 {{ product.title }}
			  <p class="card-text">{{ product.description }}</p>
			  <div class="d-flex justify-content-between align-items-center">
				<div class="h3">{{ product.price }} рублей</div>
				<button v-if="inCart.indexOf(product.id_product) === -1" @click="addToCart(product.id_product)" class="btn btn-primary">Add to cart</button>
				<button v-else @click="removeFromCart(product.id_product)" class="btn btn-warning">Remove from cart</button>
			  </div>
			</div>
		  </div>
	
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
	computed: {
	  ...mapGetters('products', {
		products: 'items',
	  }),
	  ...mapGetters('cart', {
		inCart: 'products',
	  }),
	},
	methods: {
	  ...mapActions('cart', {
		addToCart: 'add',
		removeFromCart: 'remove',
	  }),
	},
  };
  </script>
  
  <style scoped>
  .card {
	border: none;
	transition: box-shadow 0.3s ease-in-out;
  }
  .card:hover {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	cursor: pointer;
  }
  .card-img-top {
	object-fit: cover;
	height: 250px;
  }
  .card-subtitle {
	color: #17a2b8;
	font-weight: 600;
  }
  </style> 