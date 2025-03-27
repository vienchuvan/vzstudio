<template>
   
    <div class="wrapper row3">
      <main class="hoc container-fluid clear bv">
        <div style="min-height: 500px" class="padding-top15">
          <div class="title-bai-viet" v-html="titleHeThong"></div>
          <div v-html="contentHeThong"></div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
import { decodeBase64 } from '@/assets/js/SnapWeb';
import axios from 'axios';

 
  export default {
    components: {
    },
    data() {
      return {
        isMenuVisible: false,
  
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
  
    mounted() {
   
      if (!this.hasMounted) {
        this.hasMounted = true;
        this.shortUrl = this.$route.params.shortUrl;
        console.log("this.$route.params.id; ", this.$route.params.shortUrl);
  
        if (this.lang) {
          // Kiểm tra giá trị của this.lang trước khi sử dụng
          this.$router.push({
            path: "/bai-viet/" + this.shortUrl,
          });
        }
      }
      this.performPostRequest(this.shortUrl);
    },
  
    methods: {
    
  
      toggleMenu() {
        this.isMenuVisible = true;
      },
    
  
      async performPostRequest(shortUrl) {
        try {
          // Thực hiện POST request
          const response = await axios.post('http://localhost:3000/api/quantri/services/apiBaiViet', {
            funcId: 8,
            shortUrl: shortUrl,
          });
  
            this.base64 = response.data.result[0].content;
            this.base64Title = response.data.result[0].title;
            console.log(" this.base64Title " ,  response.data.result
            );
       console.log(" this.base64Title " ,  response.data.result[0].title );
       
          var title = this.decodeBase64(this.base64Title);
          var decodedString = this.decodeBase64(this.base64);
  
          this.titleHeThong = decodeURIComponent(escape(title));
          this.contentHeThong = decodeURIComponent(escape(decodedString));
        } catch (error) {
          console.error("Error:", error);
        }
      },
      decodeBase64(encodedString) {
      var decode = decodeBase64(encodedString);
      decode = decodeURIComponent(escape(decode));
      return decode;
    },
    },
  };
  </script>
  <style scoped>
  .f-s--title {
    font-size: 16.4px;
  }
  </style>
  