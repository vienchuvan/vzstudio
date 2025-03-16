<template>
  <div class="wrap mt-5">
    <h2 style="color: white;">Về chúng tôi </h2>
    <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
    <div class="container mt-5" id="gioiThieu">
      <div class="row mt-5">
        <!-- Ẩn ảnh ban đầu, chỉ hiển thị khi WOW.js kích hoạt -->
        <div class="col-lg-6 wow fadeInLeft floating-image" data-wow-duration="2s" data-wow-delay="0.3s">
          <img class="img-boder-home-1 w-100" :src="imageUrls.bgHome1" />
        </div>

        <!-- Ẩn text ban đầu, chỉ hiển thị khi WOW.js kích hoạt -->
        <div
          class="col-lg-6 wow fadeInRight"
          data-wow-duration="3s"
          data-wow-delay="0.5s"
        >
          <div class="d-flex flex-column w-100 floating-image p-3">
            <span style="text-align: start; padding: 20px">
              <div>
               
                <div class="mt-4" style="line-height: 2">
                  Tại <strong style="color: #2291a3">SnapWeb</strong>, chúng tôi cung cấp
                  đa dạng mẫu website chuyên nghiệp, phù hợp với mọi lĩnh vực từ doanh
                  nghiệp, bán hàng đến profie cá nhân. Mỗi mẫu đều được thiết kế chuẩn
                  UX/UI, tối ưu SEO và dễ dàng tùy chỉnh. Khám phá ngay để tìm ra giao
                  diện hoàn hảo cho bạn!
                </div>
              </div>
            </span>
            <div class="row mt-5 pt-4">
              <div class="col-lg-4 col-sm-4">
                <div
                  class="skill-item first-skill-item wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div class="progress" data-percentage="100">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div style="font-size: 18px">
                        <span style="color: white; font-weight: 600">Thiết kế</span><br />
                        <span>Chuyên nghiệp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-4">
                <div
                  class="skill-item second-skill-item wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div class="progress" data-percentage="100">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>
                        <span style="color: white; font-weight: 600">Ưu đãi</span><br />
                        <span>Ngập tràn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-4">
                <div
                  class="skill-item third-skill-item wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div class="progress" data-percentage="100">
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>
                        <span style="color: white; font-weight: 600">100%</span><br />
                        <span>Bảo hành</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
