<template>
  <section class="slider-container container mt-5" aria-label="Danh sách bài viết">
    <div class="slider-grid">
      <article
        class="slider-card"
        v-for="(article, index) in displayedArticles"
        :key="index"
        itemscope
        itemtype="https://schema.org/Article"
      >
        <figure class="card-image-wrapper">
          <a
            :href="getArticleLink(article)"
            :aria-label="'Xem bài viết: ' + decodeText(article.title)"
          >
            <img
              class="card-image"
              :src="article.urlImgBaiViet"
              :alt="decodeText(article.title)"
              loading="lazy"
              itemprop="image"
            />
            <div class="card-image-overlay">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </div>
          </a>
        </figure>
        <header class="card-content">
          <h2 class="card-title" itemprop="headline">
            {{ decodeText(article.title) }}
          </h2>
          <p class="card-description" itemprop="description">
            {{ decodeText(article.shortContent) }}
          </p>
        </header>
        <footer class="card-footer">
          <a :href="getArticleLink(article)" class="read-more" itemprop="url">
            Đọc tiếp <i class="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </footer>
      </article>
    </div>

    <nav class="slider-nav" role="navigation" aria-label="Điều hướng bài viết">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="nav-button"
        aria-label="Bài trước"
      >
        <i class="fa fa-chevron-left"></i>
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="nav-button"
        aria-label="Bài tiếp theo"
      >
        <i class="fa fa-chevron-right"></i>
      </button>
    </nav>
  </section>
</template>


<script>
import axios from "axios";
import { decrypt } from "@/assets/js/crypto";

export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      articlesPerPage: 4,
      lang: "",
    };
  },

  mounted() {
    this.fetchData();
    this.updateArticlesPerPage();
    window.addEventListener("resize", this.updateArticlesPerPage);
  },

  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  beforeDestroy() {
    window.removeEventListener("resize", this.updateArticlesPerPage);
  },

  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.articlesPerPage);
    },
    displayedArticles() {
      const start = (this.currentPage - 1) * this.articlesPerPage;
      return this.articles.slice(start, start + this.articlesPerPage);
    },
  },

  methods: {
    async fetchData() {
      try {
        const res = await axios.get("http://103.200.23.120:3000/api/quantri/services/getBaiViet");
        this.articles = decrypt(res.data).data;
      } catch (err) {
        console.error("Fetch error:", err);
      }
    },
    getArticleLink(article) {
      const isEducation = article.catParam?.some(cat => cat.idDanhMucCha === "1740736671675mXP8J");
      const baseUrl = this.lang || "vi";
      return isEducation
        ? `${baseUrl}/giao-duc/${article.title_vi_short}`
        : `/bai-viet/${article.shortURL}`;
    },
    decodeText(str) {
      try {
        return decodeURIComponent(escape(atob(str)));
      } catch {
        return str;
      }
    },
    nextPage() {
      this.currentPage = this.currentPage < this.totalPages ? this.currentPage + 1 : 1;
    },
    prevPage() {
      this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.totalPages;
    },
    updateArticlesPerPage() {
      this.articlesPerPage = window.innerWidth <= 768 ? 1 : 4;
    },
  },
};
</script>

<style scoped>
/* Wrapper */
.slider-container {
  position: relative;
  padding: 10px;
}

/* Grid layout */
.slider-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* Card base */
.slider-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}
.slider-card:hover {
  transform: translateY(-5px);
}

/* Image */
.card-image-wrapper {
  position: relative;
  display: block;
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-image-wrapper:hover .card-image-overlay {
  opacity: 1;
}
.card-image-overlay i {
  font-size: 28px;
  color: white;
}

/* Content */
.card-content {
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #111827;
  text-align: justify;
}
.card-description {
  color: #4b5563;
  font-size: 14px;
  text-align: justify;
  overflow: hidden;
  max-height: 100px;
  flex-grow: 1;
}
.card-footer {
  text-align: right;
  margin-top: 12px;
}
.read-more {
  color: #007aba;
  text-decoration: none;
  font-weight: 600;
}
.read-more:hover {
  text-decoration: underline;
}

/* Navigation */
.slider-nav {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.nav-button {
  background: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 40px;
  height: 40px;
  font-size: 20px;
  color: #007aba;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.nav-button:hover {
  transform: scale(1.1);
}
</style>
