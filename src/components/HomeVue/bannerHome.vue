<template>
  <div class="col-md-5 mt-5" style="color: white; font-family: math; font-weight: 600">
    <div class="d-flex flex-column">
      <img class="slide-top" :src="imageUrls.textLogo" style="width: 250px" />
      <h1 class="d-flex justify-content-end slide-in" style="color: white">
        Kiến tạo website, nâng tầm thương hiệu!
      </h1>

      <div class="d-flex justify-content-end slide-in-right">
        <span class="mt-1 d-flex justify-content-end p-1 bgred"
          >Thiết Kế Website Chuyên Nghiệp – Chuẩn UX/UI, Chuẩn SEO</span
        >
      </div>
      <div class="mt-3 slide-in-right d-flex justify-content-end">
        <button>
          <span>Tư vấn miễn phí </span>
        </button>
      </div>
    </div>
  </div>
  <div class="col-md-7 text-center slide-up mt-5">
    <!-- <img class="w-50" :src="imageUrls.bgBanner" /> -->
  </div>
  <div class="d-flex w-100 mt-5">
    <div class="container pt-5">
      <div class="row pt-5">
        <div class="col-12 col-md-3">
          <div class="d-flex justify-content-center flex-column">
            <div class="load-5">
              <div class="ring-2">
                <div class="ball-holder">
                  <div class="ball"></div>
                </div>
              </div>
            </div>
            <h2 class="mt-3" style="color: aliceblue">2s</h2>
            <strong style="color: aliceblue"> Tốc độ trang</strong>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="d-flex justify-content-center flex-column w-100">
            <div class="load-5">
            <img style="width: 75px" :src="imageUrls.iconSeo" />
          </div>
          <h2 class="mt-3" style="color: aliceblue">SEO</h2>
            <strong  style="color: aliceblue"> Thiết kế chuẩn SEO</strong>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="d-flex justify-content-center flex-column w-100">
            <div class="load-5">
            <img style="width: 60px" :src="imageUrls.iconUXUI" />
          </div>
          <h2 class="mt-3" style="color: aliceblue">UX/UI</h2>
            <strong  style="color: aliceblue"> Đơn giản – Hiệu quả</strong>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="d-flex justify-content-center flex-column w-100">
            <div class="load-5">
            <img style="width: 60px" :src="imageUrls.iconGia" />
          </div>
          <h2 class="mt-3" style="color: aliceblue">Giá</h2>
            <strong  style="color: aliceblue">Giá cả hợp lý</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imageUrls } from "@/assets/js/imgUrl";

export default {
  data() {
    return {
      imageUrls: imageUrls,
    };
  },
};
</script>
