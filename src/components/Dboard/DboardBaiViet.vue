<template>
  <main>
    <div class="table-data">
      <div class="order">
        <div class="head">
          <h3>Chi tiết</h3>
        </div>

        <div
          class="form-group input-group d-flex"
          style="flex-direction: column"
        >
          <span class="has-float-label">
            <input
              class="form-control"
              id="first"
              type="text"
              placeholder="Nhập tiêu đề..."
            />
            <label style="font-size: 16px; font-weight: 600;" >Tiêu đề</label>
          </span>
          <span class="has-float-label mt-4">
            <input
              class="form-control" style="height: 100px;"
              id="last"
              type="text"
              placeholder="Nhập nội dung tóm tắt.."
            />
            <label style="font-size: 16px; font-weight: 600;" >Nội dung tóm tắt</label>
          </span>

          <span class="has-float-label mt-4">
            <input
              class="form-control"
              id="last"
              type="text"
              placeholder="Nhập url ảnh..."
            />
            <label style="font-size: 16px; font-weight: 600;" >url Ảnh hiển thị</label>
          </span>

          <span class="has-float-label mt-4">
            <input
              class="form-control"
              id="last"
              type="text"
              placeholder="Surname"
            />
            <label style="font-size: 16px; font-weight: 600;" >url</label>
          </span>

          <span class="has-float-label mt-4">
            <input
              class="form-control"
              id="last"
              type="text"
              placeholder="Surname"
            />
            <label style="font-size: 16px; font-weight: 600;" >url</label>
          </span>
        </div>
      </div>

      <div class="todo">
        <div class="head">
          <h3>Bài viết</h3>
          <i class="bx bx-plus icon"></i>
          <i class="bx bx-filter"></i>
        </div>
        <ul
          class="todo-list"
          v-for="(itemBaiViet, index) in listBaiViet"
          :key="index"
        >
          <li class="completed">
            <strong>{{ decodeBase64(itemBaiViet.title) }}</strong>
            <span class="ml-lg-2 cursor-pointer">
              <i
                class="fa fa-times-circle"
                style="color: red"
                aria-hidden="true"
              ></i>
            </span>
          </li>
          <!-- <li class="completed">
            <p>Manage Delivery Team</p>
            <i class="bx bx-dots-vertical-rounded"></i>
          </li>
          <li class="not-completed">
            <p>Contact Selma: Confirm Delivery</p>
            <i class="bx bx-dots-vertical-rounded"></i>
          </li>
          <li class="completed">
            <p>Update Shop Catalogue</p>
            <i class="bx bx-dots-vertical-rounded"></i>
          </li>
          <li class="not-completed">
            <p>Count Profit Analytics</p>
            <i class="bx bx-dots-vertical-rounded"></i>
          </li> -->
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { getBaiViet } from "@/assets/js/snapService";
export default {
  data() {
    return {
      listBaiViet: "",
    };
  },
  mounted() {
    this.getListBaiViet();
  },
  methods: {
    async getListBaiViet() {
      try {
        const resBaiViet = await getBaiViet();
        this.listBaiViet = resBaiViet.response;
        console.log(" listBaiViet " + this.listBaiViet);
      } catch (err) {
        console.log(err);
      }
    },
    decodeBase64(encodedString) {
      var decode = atob(encodedString);
      decode = decodeURIComponent(escape(decode));
      return decode;
    },
  },
};
</script>

<style scoped>
.has-float-label .form-control:placeholder-shown:not(:focus)+*{
    top: 13px;
}
</style>