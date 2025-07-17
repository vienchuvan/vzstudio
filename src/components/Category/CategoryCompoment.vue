<template>
  <menu-snap></menu-snap>
  <div class="category">
    <div class="container mt-5 justify-content-center ">
      <div class="d-flex justify-content-center">
        <div v-for="(item, index) in dataListCategory" :key="index">
          <button class="mt-5">{{ item.categoryName }}</button>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row d-flex">
        <div class="products " v-for="(item, index) in dataListProduct" :key="index">
          <div class="product">
            <img :src="item.productImage" alt="" />
            <h1 style="color: white; font-size: 15px">{{ item.productName }}</h1>
            <span style="font-size: 14px">{{ item.descriptions }}</span>
            <div class="price hover:bg-gray-900">Liên hệ</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postListCategory, postListProduct } from "@/assets/js/snapService";
import MenuSnap from "../HomeVue/menuSnap.vue";

export default {
  components: {
    MenuSnap,
  },

  data() {
    return {
      isMenuVisible: false,
      dataListCategory: [],
      dataListProduct: [],
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuVisible = true;
    },
    async getListCategory() {
      const res = await postListCategory();
      this.dataListCategory = res.data;
    },

    async getListProDuct() {
      const res = await postListProduct();
      this.dataListProduct = res.data;
      console.log("dataListProduct", this.dataListProduct);
    },
  },

  mounted() {
    this.getListCategory();
    this.getListProDuct();
  },
};
</script>
<style scoped>
.products {
  padding-top: 20px;
  text-align: center;
}

.products .product {
  position: relative;
  overflow: hidden;
  width: 240px;
  height: auto;
  text-align: left;
  color: white;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.27);
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}

.products .product img {
  position: relative;
  top: -5px;
  margin: auto;
  transition: all 0.2s ease;
  width: 100%;
  -webkit-clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%);
  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 70%);
}
.products .product img:hover {
  -webkit-clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);
  clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.products .product h1 {
  line-height: 20px;
  font-size: 20px;
  margin-top: 15px;
}

.products .product .price {
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
  color: darkblue;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  padding: 5px;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
