<template>
  <div class="wrap mt-5">
    <h2>
      Với các sự lựa chọn <span style="color: #57bddb">mức giá Ưu đãi</span> <br />
      cho những sản phẩm bạn mong muốn
    </h2>
    <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>

    <div class="container mt-5">
      <div class="row price-list">
        <div
          v-for="plan in pricingPlans"
          :key="plan.name"
          class="col-md-4 col-sm-6"
          :class="{ popular: selectedPlan === plan.name }"
          @click="handleClick(plan.name)"
        >
          <div class="price-title">
            <h4>{{ plan.name }}</h4>
          </div>
          <div class="plan-price">
            <h2>
              <span>{{ plan.price }}</span>
            </h2>
          </div>
          <ul class="plan-features list-unstyled">
            <li v-for="feature in plan.features" :key="feature">
              <i class="fa fa-check"></i> {{ feature }}
            </li>
          </ul>
          <div class="plan-link">
            <a class="btn btn-bordered" href="#">Tư vấn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pricingPlans from "@/assets/js/jsonStudio/jsonBangGia.json";
export default {
  data() {
    return {
      pricingPlans: [], // Dữ liệu JSON từ file
      selectedPlan: null, // Lưu gói đang được chọn
    };
  },
  async mounted() {
    await this.fetchPricingPlans();
  },
  methods: {
    async fetchPricingPlans() {
      try {
        // const response = await fetch("/jsonBangGia.json");
        this.pricingPlans = pricingPlans;
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu: ", error);
      }
    },
    handleClick(planName) {
      this.selectedPlan = planName; // Cập nhật gói đang chọn
    },
  },
};
</script>

<style lang="css" scoped>
.price-list {
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto";
}
.price-list {
}
.price-title {
  background: none repeat scroll 0 0 #ecf0f3;
  border: 1px solid #ddd;
}
.price-title h4 {
  color: #666;
  font-family: open sans;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  margin: 0;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
}
.plan-price {
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: #ccc;
}
.plan-price h2 {
  color: #666;
  font-size: 40px;
  margin: 0;
  padding: 20px;
  text-align: center;
}
.plan-price h2 span {
  font-family: open sans;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 0;
  padding-right: 8px;
  vertical-align: middle;
}
.plan-features {
  border: 1px solid #ddd;
  margin: 0;
}
.plan-features li {
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  padding: 15px 15px 15px 25px;
}
.plan-features li:last-child {
  border-bottom: 0px solid;
}
.plan-link {
  border: 1px solid #ddd;
  text-align: center;
  border-top: 0px solid;
}
.plan-link a.btn-bordered {
  font-size: 16px;
  letter-spacing: 2px;
  margin: 10px 0;
  text-transform: uppercase;
}
.popular {
}
.popular .price-title {
  background-color: #57bddb;
}
.popular .price-title h4 {
  color: #fff;
}
.popular .plan-link a.btn-bordered {
  background: #57bddb;
  color: #fff;
}
.popular .plan-link,
.popular .plan-features li,
.popular .price-title,
.popular .plan-features,
.popular .plan-price {
  border-color: #57bddb;
}
btn-bordered {
  border-radius: 0;
  margin-top: 15px;
}
.btn-bordered {
  border: 2px solid #57bddb;
  color: #57bddb;
  background: transparent;
}
.btn-bordered:hover {
  color: #57bddb;
  opacity: 0.7;
}
</style>
