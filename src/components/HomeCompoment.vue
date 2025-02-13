<template>
  <header class="header-dv-crop" :class="{ active: isScrolled }" data-header>
    <div class="container-dv-crop">
      <div
        class="overlay"
        :class="{ active: isNavOpen }"
        @click="toggleNav"
        data-overlay
      ></div>

      <a href="#">
        <img style="width: 70px; height: 70px" :src="imageUrls.logoCty" />
      </a>

      <nav class="navbar-dv-crop" :class="{ active: isNavOpen }" data-navbar>
        <div class="navbar-top">
          <!-- <a href="#" class="logo">Ted Martins</a> -->
          <button
            class="nav-close-btn"
            aria-label="Close Menu"
            @click="toggleNav"
            data-nav-close-btn
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">
          <li class="navbar-item">
            <a href="#gioiThieu" class="navbar-link" data-navbar-link>Giới thiệu</a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link" data-navbar-link>Trang chủ</a>
          </li>

          <li class="navbar-item">
            <a href="#services" class="navbar-link" data-navbar-link>Dịch vụ</a>
          </li>

          <li class="navbar-item">
            <a href="#features" class="navbar-link" data-navbar-link>Tư Vấn</a>
          </li>

          <li class="navbar-item">
            <a href="#blog" class="navbar-link" data-navbar-link>Liên hệ</a>
          </li>

          <!-- <li class="navbar-item">
            <a href="#" class="navbar-link" data-navbar-link>Contact Us</a>
          </li> -->
        </ul>
      </nav>

      <button
        class="nav-open-btn"
        aria-label="Open Menu"
        @click="toggleNav"
        data-nav-open-btn
      >
        <ion-icon name="menu-outline"></ion-icon>
      </button>
    </div>
  </header>
  <div class="d-flex flex-column main-banner">
    <div class="d-flex flex-column p-0 mt-5">
      <div class="row p-5 align-items-center banner-bg mt-5">
        <BannerHome></BannerHome>
      </div>
    </div>
  </div>
  <main>
    <!-- Gioi thieu -->
    <div class="container p-0 mt-5" id="gioiThieu">
      <div class="row">
        <div class="d-flex flex-column w-100 bg-white p-3">
          <span style="text-align: center; padding: 20px">
            <div>
              <div class="slide-top">
                <h2>
                  Website chuyên nghiệp, chuẩn UX/UI, tối ưu SEO,
                  <h2>giúp doanh nghiệp của bạn tỏa sáng trên mọi nền tảng!</h2>
                </h2>
              </div>
              <div class="mt-4" style="line-height: 2;">
                <strong>DVCorp</strong> là đơn vị chuyên thiết kế website chuyên nghiệp,
                mang đến giải pháp tối ưu cho doanh nghiệp, cá nhân và tổ chức muốn khẳng
                định thương hiệu trên nền tảng số. Chúng tôi không chỉ tạo ra những
                website đẹp mắt, chuẩn UX/UI mà còn đảm bảo tối ưu SEO, khả năng hiển thị
                hoàn hảo trên mọi thiết bị. DVCorp cam kết mang đến sản phẩm chất lượng,
                giúp bạn tiếp cận khách hàng hiệu quả và nâng tầm thương hiệu trong thời
                đại số.
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
<DanhMucHome></DanhMucHome>
    <div class="container p-0 mt-5" id="gioiThieu">
      <div class="row">
        <!-- Ẩn ảnh ban đầu, chỉ hiển thị khi WOW.js kích hoạt -->
        <div class="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
          <img class="img-boder-home-1 w-100" :src="imageUrls.bgHome1" />
        </div>

        <!-- Ẩn text ban đầu, chỉ hiển thị khi WOW.js kích hoạt -->
        <div
          class="col-lg-6 wow fadeInRight"
          data-wow-duration="3s"
          data-wow-delay="0.5s"
        >
          <div class="d-flex flex-column w-100 bg-white p-3">
            <span style="text-align: start; padding: 20px">
              <div>
                <div class="slide-top">
                  <h5 style="color: #2291a3">VỀ CHÚNG TÔI</h5>
                </div>
                <div class="mt-4" style="line-height: 2;">
                  Tại <strong style="color: #2291a3">DVCorp</strong>, chúng tôi cung cấp đa dạng mẫu
                  website chuyên nghiệp, phù hợp với mọi lĩnh vực từ  doanh nghiệp, bán
                  hàng đến profie cá nhân. Mỗi mẫu đều được thiết kế chuẩn UX/UI, tối
                  ưu SEO và dễ dàng tùy chỉnh. Khám phá ngay để tìm ra giao diện hoàn hảo
                  cho bạn!
                </div>
              </div>
            </span>
            <div class="row mt-5 pt-4">
                  <div class="col-lg-4 col-sm-4">
                    <div class="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                      <div class="progress" data-percentage="100">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                          <div style="font-size: 18px;">
                           <span style="color: black ; font-weight: 600;" >Thiết kế</span><br/>
                            <span>Chuyên nghiệp</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <div class="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                      <div class="progress" data-percentage="100">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                          <div>
                            <span style="color: black ; font-weight: 600;" >Ưu đãi</span><br/>
                            <span>Ngập tràn</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4">
                    <div class="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                      <div class="progress" data-percentage="100">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                          <div>
                            <span style="color: black ; font-weight: 600;">100%</span><br/>
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

  </main>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import WOW from "wowjs";
import { imageUrls } from "@/assets/js/imgUrl";
import BannerHome from "./bannerHome/bannerHome.vue";
import DanhMucHome from "./bannerHome/danhMucHome.vue";
export default {
  components: {
    BannerHome,DanhMucHome
  },
  setup() {
    const isNavActive = ref(false);
    const isScrolled = ref(false);
    const menuItems = [
      { text: "Home", href: "#home" },
      { text: "About", href: "#about" },
      { text: "Services", href: "#services" },
      { text: "Features", href: "#features" },
      { text: "Blog", href: "#blog" },
      { text: "Contact Us", href: "#" },
    ];

    const toggleNavbar = () => {
      isNavActive.value = !isNavActive.value;
    };

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 400;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      new WOW.WOW().init();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isNavActive,
      isScrolled,
      menuItems,
      toggleNavbar,
    };
  },
  data() {
    return {
      isNavbarOpen: false,
      showLoading: false,
      imageUrls: imageUrls,
    };
  },
  mounted() {},
  methods: {
    // toggleNavbar() {
    //   this.isNavbarOpen = !this.isNavbarOpen;
    // },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    goToGioiThieu() {
      this.scrollToSection("gioiThieu");
    },
    goToSanPham() {
      this.scrollToSection("sanPham");
    },
    goToGiaoDien() {
      this.scrollToSection("giaoDien");
    },
    goToLienHe() {
      this.scrollToSection("lienHe");
    },
    goToHuongDan() {
      this.scrollToSection("huongDan");
    },
  },
};
</script>

<style>
.bg-title-trai {
  background: linear-gradient(28deg, #f37d34 25%, #fff 25%);
}
.bg-title-phai {
  background: linear-gradient(333deg, #f37d34 25%, #fff 25%);
}

.bg-title-huongdan {
  background: linear-gradient(333deg, #f37d34 35%, #fff 35%);
}
.btn-lienhe {
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  position: relative;
  background: linear-gradient(-45deg, #f37d34, #ffb0ee, #c0ffb6, #d0ddff, #e1bfff);
  background-size: 400% 400%;
  animation: gradientBG 4.5s ease infinite;
  color: #dc3545;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 17px;
  /* font-size: 1.3rem; */
  transition: 0.3s;
}
@keyframes gradientBG {
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
.back-br {
  width: 100%;
  background-color: #cfcfcf59;
  height: auto;
  border-radius: 40px;
}
.navbar-brand {
  margin-left: 1rem;
}
.pd-header {
  padding-left: 77px;
  padding-right: 77px;
}
.bgred {
  text-align: center;
  background-color: rgba(0, 18, 255, 0.7);
  color: #fff;
  width: auto;
}

@media (max-width: 576px) {
  .navbar-brand {
    margin-left: 1rem;
  }
  .pd-header {
    padding-left: 0px;
    padding-right: 0px;
  }
  .bg-title-trai {
    background: linear-gradient(28deg, #f37d34 50%, #fff 50%);
  }
  .bg-title-phai {
    background: linear-gradient(333deg, #f37d34 50%, #fff 50%);
  }

  .bg-title-huongdan {
    background: linear-gradient(333deg, #f37d34 75%, #fff 75%);
  }
}
@media (max-width: 768px) {
  .navbar-brand {
    margin-left: 1rem;
  }
  .pd-header {
    padding-left: 0px;
    padding-right: 0px;
  }
  .bg-title-trai {
    background: linear-gradient(28deg, #f37d34 50%, #fff 50%);
  }
  .bg-title-phai {
    background: linear-gradient(333deg, #f37d34 50%, #fff 50%);
  }

  .bg-title-huongdan {
    background: linear-gradient(333deg, #f37d34 75%, #fff 75%);
  }
}
@media (max-width: 991px) {
  .fixed-top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1030;
  }
  .navbar-collapse {
    position: absolute;
    margin-top: 47px;
    margin-left: -16px;
    width: 100%;
  }

  .navbar-toggler {
    border-color: #fff;
  }

  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .nav-item {
    margin-bottom: 10px;
  }
  .bg-title-trai {
    background: linear-gradient(28deg, #f37d34 50%, #fff 50%);
  }
  .bg-title-phai {
    background: linear-gradient(333deg, #f37d34 50%, #fff 50%);
  }

  .bg-title-huongdan {
    background: linear-gradient(333deg, #f37d34 75%, #fff 75%);
  }
}
</style>
