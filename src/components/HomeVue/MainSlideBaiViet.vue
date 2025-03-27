<template>
  <div class="slider mt-5" :class="{ 'slide-next': isNext, 'slide-prev': isPrev }">
    <article
      class="one_quarter"
      v-for="(article, index) in displayedArticles"
      :key="index"
    >
      <div style="height: auto">
        <a class="imgover" :href="getArticleLink(article)">
          <img
            style="max-width: 100%; margin: 0 auto; border-radius: 10px"
            :src="article.urlImgBaiViet"
             
            alt=""
          />
        </a>
      </div>
      <div class="excerpt">
        <h6 class="heading" style="margin-top: 10px; font-family: auto; font-size: 18px; color: white;">
         {{ decodeBase64(article.title) }}
        </h6>
        <p style="max-height: 200px; overflow: hidden; color: white;">
          {{ decodeBase64(article.shortContent) }}
        </p>
        <footer>
          <a
            :href="'bai-viet/' + article.shortURL"
          >
            <i class="fas fa-angle-right"></i> Đọc tiếp
          </a>
        </footer>
      </div>
    </article>
    <div></div>
    <!-- <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button> -->
    <div
      style="
        display: flex;
        width: 100%;
        position: absolute;
        top: 20%;
        z-index: 1;
        justify-content: space-between;
      "
    >
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="danhmuc-prev"
        style="width: 30px; height: 30px; border: none; border-radius: 30px"
      >
        <i
          style="font-size: 30px; color: #007aba"
          class="fa fa-chevron-circle-left"
          aria-hidden="true"
        ></i>
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="danhmuc-next"
        style="width: 30px; height: 30px; border: none; border-radius: 30px"
      >
        <i
          style="font-size: 30px; color: #007aba"
          class="fa fa-chevron-circle-right"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  </div>
</template>
<script> 

import axios from 'axios';
import { decodeBase64 } from "@/assets/js/SnapWeb";

  export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      articlesPerPage: 4,
      lang:"",
    

     
      
    };
  },

  mounted(){
    this.fetchData();
    this.updateArticlesPerPage(); // Call to set initial value based on screen size
    window.addEventListener('resize', this.updateArticlesPerPage);
    },

  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.articlesPerPage);
    },
    displayedArticles() {
      const start = (this.currentPage - 1) * this.articlesPerPage;
      const end = start + this.articlesPerPage;
      return this.articles.slice(start, end);
    },
  },
  methods: {
   async fetchData() {
      try {
        // Thực hiện POST request
        const response = await axios.get("http://103.200.23.120:3000/api/quantri/services/getBaiViet");
        this.articles =  response.data.response
        console.log("response ", response.data.response);
        
      }catch(error){
        console.error("Error:", error);
      }

    },

    getArticleLink(article) {
    // Kiểm tra nếu article có danh mục cha là "1740736671675mXP8J"
    const hasEducationCategory = article.catParam?.some(cat => cat.idDanhMucCha === "1740736671675mXP8J");

    // Xác định base URL theo ngôn ngữ
    const baseUrl = (this.lang === null || this.lang === '') ? 'vi' : this.lang;
    
    // Nếu thuộc danh mục giáo dục, đổi sang "/giao-duc/"
    return hasEducationCategory 
      ? `${baseUrl}/giao-duc/${article.title_vi_short}`
      : `/bai-viet/${article.shortURL}`;
  },
    decodeBase64(encodedString) {
      var decode = decodeBase64(encodedString);
      decode = decodeURIComponent(escape(decode));
      return decode;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
       
        this.currentPage++;
      } else {
    
        this.currentPage = 1; // Loop to the first page if on the last page
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
     
        this.currentPage--;
      } else {
       
        this.currentPage = this.totalPages; // Loop to the last page if on the first page
      }
    },
    updateArticlesPerPage() {
      // Adjust articlesPerPage based on screen size
      if (window.innerWidth <= 768) {
        this.articlesPerPage = 1; // Set to 1 for smaller screens (adjust as needed)
      } else {
        this.articlesPerPage = 4; // Set to default value for larger screens
      }
    },
    beforeDestroy() {
    window.removeEventListener('resize', this.updateArticlesPerPage);
  },
  },

};
</script>


<style scoped> 

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out !important;
}

.slide-next {
  transform: translateX(-100%) !important;
}

.slide-prev {
  transform: translateX(100%) !important;
}
.slider img {width: 98%;border: 1px solid #e5e5e5;margin: 0 auto;}

.imgover{display:inline-block; position:relative; max-width:100%; width: 100%}
.imgover::before, .imgover::after{display:block; position:absolute; content:""; text-align:center; opacity:0;}
.imgover::before{top:0; right:0; bottom:0; left:0;}
.imgover::after{top:50%; left:50%; width:50px; height:50px; line-height:50px; margin:-25px 0 0 -25px; font-family:"Font Awesome\ 5 Free"; font-weight:900; content:"\f06e";/* fa-eye */ font-size:28px;}
.imgover:hover::before, .imgover:hover::after{opacity:1;}

.one_quarter{width:24.5%;margin: 0;margin-left: .5%;}
@media (max-width: 768px) {

.one_quarter{width:100%;margin: 0;margin-left: .5%;}}
</style>