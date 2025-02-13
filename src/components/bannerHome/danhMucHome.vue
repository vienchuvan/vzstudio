<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-12  col-md-12">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-4" >
            <div class="w-100">
              <img class="p-1 " style="width: 300px;" :src="imageUrls.imgBanHang2" />
            </div>
            </div>
            <div class="col-12 col-md-8 ">
                <div class="w-100">
              <img class="p-1 "  style="width: 300px;"  :src="imageUrls.imgCongty1" />
              </div>
              <div class="w-100">
              <img class="p-1 "  style="width: 300px;"  :src="imageUrls.imgCongty2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="container mt-5">
    <div class="img-urun-container">
      <div class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
        <h2 style="color: white">Doanh nghiệp</h2>

        <a href="#">Tham khảo<i class="fa-solid fa-right-long"></i></a>
        <img :src="imageUrls.imgCongty1" />
      </div>

      <div class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s" >
        <h2 style="color: white">Thương mại điện tử</h2>
        <a href="#">Tham khảo<i class="fa-solid fa-right-long"></i></a>
        <img :src="imageUrls.imgBanHang1" />
      </div>

      <div class="wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0.3s">

        <h2 style="color: white">Wedding</h2>

        <a href="#">Tham khảo<i class="fa-solid fa-right-long"></i></a>
        <img style="height: 415px" :src="imageUrls.imgWedding" />
      </div >
      <div class="d-flex flex-column">
        <div class="wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s" >
          <h2 style="color: white">Profile</h2>

          <a href="#">Tham khảo<i class="fa-solid fa-right-long"></i></a>
          <img  :src="imageUrls.imgProfile" />
        </div>
        <!-- <div>
          <h2 style="color: white">Profile</h2>

          <a href="#">Tham khảo<i class="fa-solid fa-right-long"></i></a>
          <img :src="imageUrls.imgProfile" />
        </div> -->
      </div>
      <div class="wow fadeInRight" data-wow-duration="3s" data-wow-delay="0.5s" >
        <h2 style="color: white">Quản lý </h2>

        <a href="#">Tham khảo<i class="fa-solid fa-right-long"></i></a>
        <img style="height: 415px" :src="imageUrls.imgBanHang2" />
      </div>
    </div>
  </div>
</template>
<script>
import { imageUrls } from "@/assets/js/imgUrl";
import {  onMounted } from "vue";
import WOW from "wowjs";
export default {
    setup(){
        onMounted(()=>{
            new WOW.WOW().init();
        })
    },
  data() {
    return {
      imageUrls: imageUrls,
    };
  },
};
</script>
