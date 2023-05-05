<template>
	<div class="product">
	  <div class="product-header">
		<h1 class="product-title">{{ product.title }}</h1>
		<router-link :to="{name: 'products'}" class="product-back-link">Back to products</router-link>
	  </div>
	  <div class="product-details">

		<div class="product-images">
		  <img :src="product.image" alt="Product Image" class="product-image">
		  
		  <div class="product-slider">
			<img v-for="(image, index) in product.images" :src="image" :key="index" class="product-slider-image">
		  </div>
		</div>

		<div class="product-description">
		  <p class="product-price">{{ product.price }} руб </p>
		  <p class="product-text">{{ product.description }}</p>
		  <div class="product-rating">
      <span>Рейтинг:</span>
      <span>4.1</span>
    </div>
    <div class="product-manufacturer">Производитель: Apple</div>
    <div class="product-sku">Артикул: MQ9T3</div>
    <div class="product-availability">{{  product.availability }}</div>
    <div class="product-code">Код товара: 139878</div>
		  <button v-if="!inCart(product.id_product)" @click="addToCart(product.id_product)" class="product-button">Add to Cart</button>
		  <button v-else @click="removeFromCart(product.id_product)" class="product-button">Remove from Cart</button>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
	computed: {
	  ...mapGetters('cart', ['products']),
	  id() {
		return this.$route.params.id;
	  },
	  product() {
		return this.$store.getters["products/item"](this.id);
	  }
	},
	methods: {
	  ...mapActions('cart', ['add', 'remove']),
	  inCart(id) {
		return this.products.indexOf(id) !== -1;
	  },
	  addToCart(id) {
		this.add(id);
	  },
	  removeFromCart(id) {
		this.remove(id);
	  }
	}
  };
  </script>
  
  <style scoped>
.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  color: #FFD700;
}

.product-rating span {
  margin-right: 5px;
}

.product-manufacturer {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}

.product-sku {
  margin-bottom: 10px;
  font-size: 14px;
}

.product-availability {
  margin-bottom: 10px;
  font-size: 14px;
  color: #008000;
}

.product-code {
  font-size: 14px;
  color: #A9A9A9;
}

.product-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  max-width: 400px;
  margin-right: 20px;
}

.product-slider {
  display: flex;
  align-items: center;
}

.product-slider-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.product-slider-image:hover {
  transform: scale(1.1);
}

.product-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product-text {
  font-size: 16px;
  margin: 20px 0;
}

  .product {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
  }
  
  .product-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 20px;
  }
  
  .product-title {
	font-size: 24px;
	font-weight: 600;
	margin: 0;
  }
  
  .product-back-link {
	font-size: 16px;
	text-decoration: none;
	color: #333;
  }
  
  .product-details {
	display: flex;
	
	align-items: center;
	width: 100%;
  }
  
  .product-image {
	width: 100%;
	max-width: 400px;
	margin-bottom: 20px;
  }
  
  .product-description {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
  }
  
  .product-price {
	font-size: 24px;
	font-weight: 600;
	margin: 0;
  }
  
  .product-text {
	font-size: 16px;
	margin: 20px 0;
  }
  
  .product-button {
	background-color: #007bff;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	margin-top: 25px;
  }
  
  .product-button:hover {
	background-color: #0069d9;
  }
  </style>
  