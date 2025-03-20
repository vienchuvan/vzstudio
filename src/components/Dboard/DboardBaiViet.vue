<template>
  <main>
    <div class="table-data">
      <div class="order">
        <div class="head">
          <h3>Chi tiết</h3>
        </div>

        <div class="form-group input-group d-flex" style="flex-direction: column">
          <span class="has-float-label">
            <input
              class="form-control"
              id="first"
              type="text"
              placeholder="Nhập tiêu đề..."
            />
            <label style="font-size: 16px; font-weight: 600">Tiêu đề</label>
          </span>
          <span class="has-float-label mt-4">
            <input
              class="form-control"
              style="height: 100px"
              id="last"
              type="text"
              placeholder="Nhập nội dung tóm tắt.."
            />
            <label style="font-size: 16px; font-weight: 600">Nội dung tóm tắt</label>
          </span>

          <span class="has-float-label mt-4">
            <input
              class="form-control"
              id="last"
              type="text"
              placeholder="Nhập url ảnh..."
            />
            <label style="font-size: 16px; font-weight: 600">url Ảnh hiển thị</label>
          </span>

          <span class="has-float-label mt-4">
            <input class="form-control" id="last" type="text" placeholder="Surname" />
            <label style="font-size: 16px; font-weight: 600">url</label>
          </span>

          <span class="has-float-label mt-4">
            <label style="font-size: 16px; font-weight: 600">Nội dung bài viết</label>
            <textarea id="editor" style="height: 500px;"></textarea>
          </span>
        </div>
      </div>

      <div class="todo">
        <div class="head">
          <h3>Bài viết</h3>
          <i class="bx bx-plus icon"></i>
          <i class="bx bx-filter"></i>
        </div>
        <ul class="todo-list" v-for="(itemBaiViet, index) in listBaiViet" :key="index">
          <li class="completed">
            <strong>{{ decodeBase64(itemBaiViet.title) }}</strong>
            <span class="ml-lg-2 cursor-pointer">
              <i class="fa fa-times-circle" style="color: red" aria-hidden="true"></i>
            </span>
          </li>
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
      editor: '',
      noiDung: "", // Không dùng ref() trong data()
    };
  },
  async mounted() {
    await this.getListBaiViet();
    setTimeout(() => {
      if (window.ClassicEditor) {
        // eslint-disable-next-line no-undef
        ClassicEditor.create(document.querySelector("#editor"), {
          height: 500, // Điều chỉnh chiều cao tại đây (đơn vị là pixel)
        })
          .then(editor => {
            console.log("CKEditor đã khởi tạo!", editor);
          })
          .catch(error => {
            console.error("Lỗi CKEditor:", error);
          });
      } else {
        console.error("CKEditor chưa được tải!");
      }
    }, 500);
  },
  methods: {
    async getListBaiViet() {
      try {
        const resBaiViet = await getBaiViet();
        this.listBaiViet = resBaiViet.response;
        console.log("listBaiViet:", this.listBaiViet);
      } catch (err) {
        console.log(err);
      }
    },
    decodeBase64(encodedString) {
      let decode = atob(encodedString);
      decode = decodeURIComponent(escape(decode));
      return decode;
    },
  },
};
</script>

<style scoped>
.has-float-label .form-control:placeholder-shown:not(:focus) + * {
  top: 13px;
}

.ck-editor__editable {
  min-height: 300px !important; /* Điều chỉnh chiều cao */
  width: 100% !important; /* Đảm bảo chiếm toàn bộ chiều rộng */
  max-width: 100% !important; /* Giới hạn chiều rộng không vượt quá container */
}
</style>
