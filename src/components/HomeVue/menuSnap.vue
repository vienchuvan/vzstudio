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
              <a href="/" class="navbar-link" data-navbar-link>Giới thiệu</a>
            </li>
  
            <li class="navbar-item">
              <a href="#about" class="navbar-link" data-navbar-link>Danh mục</a>
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
 
  </template>
  
  <script>

  import { imageUrls } from "@/assets/js/imgUrl";
  
  export default {
    components: {},
    data() {
      return {
        isMenuVisible: false,
        imageUrls: imageUrls,
        lang: "",
        base64: "",
        base64Title: "",
        //title
        titleHeThong: "",
        //content
        contentHeThong: "",
        hasMounted: false,
        shortUrl: "",
      };
    },
  

    methods: {
      toggleMenu() {
        this.isMenuVisible = true;
      },
  
    
    },
  };
  </script>
  <style scoped>
  .f-s--title {
    font-size: 16.4px;
  }
  ::v-deep(.content-bai-viet) {
    color: white;
    text-align: justify !important;
  }
  ::v-deep(.content-bai-viet h3),
  ::v-deep(.content-bai-viet h2),
  ::v-deep(.content-bai-viet a),
  ::v-deep(.content-bai-viet div),
  ::v-deep(.content-bai-viet p) {
    text-align: justify !important;
    color: white !important;
  }
  ::v-deep(.content-bai-viet img) {
    width: 100% !important;
  }
  </style>
  