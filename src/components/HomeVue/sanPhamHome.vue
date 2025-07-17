<template>
  <section class="section-products">
    <div class="container">
      <header class="section-header">
        <h2 class="title">Một số Website bạn có thể thích</h2>
        <div class="divider"></div>
      </header>

      <div class="product-grid">
        <article
          class="product-card"
          v-for="(item, index) in visibleProducts"
          :key="index"
          itemscope
          itemtype="https://schema.org/Product"
        >
          <figure class="product-image">
            <img
              :src="item.productImage"
              :alt="`Giao diện website ${item.productName}`"
              loading="lazy"
              itemprop="image"
            />
          </figure>
          <div class="product-info">
            <h3 class="product-name" itemprop="name">{{ item.productName }}</h3>
            <p class="product-description" itemprop="description">
              {{ item.descriptions }}
            </p>
            <div class="product-footer">
              <span class="price">Liên hệ</span>
              <a href="#" class="cta-button">Xem chi tiết</a>
            </div>
          </div>
        </article>
      </div>

      <!-- Nút Xem thêm -->
      <div class="text-center mt-5" v-if="!showAll && dataListProduct.length > 6">
        <button class="btn-load-more" @click="showAll = true">Xem thêm</button>
      </div>
    </div>
  </section>
</template>

<script>
import { postListProduct } from "@/assets/js/snapService";

export default {
  data() {
    return {
      dataListProduct: [],
      showAll: false,
    };
  },
  computed: {
    visibleProducts() {
      return this.showAll ? this.dataListProduct : this.dataListProduct.slice(0, 6);
    },
  },
  async mounted() {
    const res = await postListProduct();
    this.dataListProduct = res.data;
  },
};
</script>
<style scoped>
.btn-load-more {
  background: #00bfff;
  color: #000;
  padding: 10px 24px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-load-more:hover {
  background: #00aee0;
  color: #fff;
}
.section-products {
  /* background: #111; */
  padding: 80px 20px;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

.divider {
  width: 80px;
  height: 4px;
  background: #00bfff;
  margin: 0 auto;
  border-radius: 5px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background: #1b1b1b;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 191, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 191, 255, 0.25);
}

.product-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 20px;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #fff;
}

.product-description {
  font-size: 14px;
  color: #bbb;
  margin-bottom: 16px;
  min-height: 44px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  background: #00bfff;
  color: #000;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
}

.cta-button {
  background: transparent;
  color: #00bfff;
  border: 1px solid #00bfff;
  padding: 6px 14px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #00bfff;
  color: #000;
}
</style>
