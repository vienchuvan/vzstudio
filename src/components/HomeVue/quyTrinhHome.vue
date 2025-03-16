<template>
  <div class="wrap mt-5">
    <h2 style="color: white;">Quy trình thực hiện</h2>
    <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-12 col-md-4 wow fadeInDown floating-image" data-wow-delay="0.3s">
          <div class="emag-item">
          
            <div class="emag-item-body">
              <img
                :src="imageUrls.iconTuVan"
                alt="Drujba"
              />
              <div class="emag-item-price mt-4">Tư vấn</div>
              <div class="emag-item-title">
                Chúng tôi lắng nghe nhu cầu, mục tiêu kinh doanh và mong muốn của khách
                hàng để đề xuất giải pháp website phù hợp
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 wow fadeInDown floating-image" data-wow-delay="0.5s">
          <div class="emag-item">
           
            <div class="emag-item-body">
              <img
                :src="imageUrls.iconYTuong"
                alt="Drujba"
              />
              <div class="emag-item-price mt-4">Lên ý tưởng</div>
              <div class="emag-item-title"> Dựa trên yêu cầu, chúng tôi phác thảo giao diện, bố cục, màu sắc và tính năng quan trọng để đảm bảo trải nghiệm tốt nhất.</div>
             
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 wow fadeInDown floating-image" data-wow-delay="0.8s">
          <div class="emag-item">
           
            <div class="emag-item-body ">
              <img
                :src="imageUrls.iconThietKe"
                alt="Drujba"
              />
              <div class="emag-item-price mt-4"> Xử lý & phát triển</div>
              <div class="emag-item-title">Bắt tay vào xây dựng website, tối ưu hiệu suất, tính bảo mật và khả năng hiển thị trên mọi thiết bị.</div>
             
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-4 wow fadeInUp floating-image" data-wow-delay="0.8s">
          <div class="emag-item">
            
            <div class="emag-item-body">
              <img
                :src="imageUrls.iconDemo"
                alt="Drujba"
              />
              <div class="emag-item-price mt-4">Demo </div>
              <div class="emag-item-title">
                Chạy thử website, kiểm tra lỗi, hiệu chỉnh tính năng và nhận phản hồi từ khách hàng để điều chỉnh phù hợp.
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 wow fadeInUp floating-image" data-wow-delay="0.5s">
          <div class="emag-item">
           
            <div class="emag-item-body">
              <img
                :src="imageUrls.iconBanGiao"
                alt="Drujba"
              />
              <div class="emag-item-price mt-4">Bàn giao & hướng dẫn</div>
              <div class="emag-item-title">Khi khách hàng hài lòng, chúng tôi bàn giao website, cung cấp tài liệu hướng dẫn để khách hàng dễ dàng vận hành.</div>
             
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 wow fadeInUp floating-image" data-wow-delay="0.3s">

          <div class="emag-item">
        
            <div class="emag-item-body ">
              <img
                :src="imageUrls.iconBanGiao"
                alt="Drujba"
              />
              <div class="emag-item-price mt-4"> Bảo hành & hỗ trợ </div>
              <div class="emag-item-title">Cam kết bảo hành website, hỗ trợ kỹ thuật và cập nhật bảo trì, đảm bảo website luôn hoạt động ổn định.</div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imageUrls } from "@/assets/js/imgUrl";
import { onMounted } from "vue";
import WOW from "wowjs";
export default {
  setup() {
    onMounted(() => {
      new WOW.WOW().init();
    });
  },
  data() {
    return {
      imageUrls: imageUrls,
    };
  },
};
</script>
