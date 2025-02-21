<template>
    <a href="https://api.email.com/send?zalo=5500912341234" target="_blank">
    <button class="btn-floating face">
      <img
        style="width: 35px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
        alt="facebook"
      />
      <span>Viên Chử Văn</span>
    </button>
  </a>
  <a href="tel:0012341234">
    <button class="btn-floating zalo">
      <img
        style="width: 30px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png"
        alt="zalo"
      />
      <span> 0979951954</span>
    </button>
  </a>

  <a href="https://api.email.com/send?zalo=5500912341234" target="_blank">
    <button class="btn-floating email">
      <img
        style="width: 55px"
        src="https://images.vexels.com/media/users/3/140928/isolated/preview/8d338f5acd60bfbc9b5fb1b208c8814f-outlined-email-round-icon.png"
        alt="email"
      />
      <span>vienchelsea.it@gmail.com</span>
    </button>
  </a>

  
</template>

<style>
.btn-floating:hover img {
  margin-bottom: -3px;
}

.btn-floating {
  position: fixed;
  right: 25px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 0;
  z-index: 9999;
  color: white;
  transition: 0.2s;
}

.btn-floating:hover {
  width: auto;
  padding: 0 20px;
  cursor: pointer;
}

.btn-floating span {
  font-size: 16px;
  margin-left: 5px;
  transition: 0.2s;
  line-height: 0px;
  display: none;
}

.btn-floating:hover span {
  display: inline-block;
}

/* zalo */
.btn-floating.zalo {
  bottom: 85px;
  background-color: #269ee4;
}

.btn-floating.zalo:hover {
  background-color: #1f78ca;
}

/* email */
.btn-floating.email {
  background-color: #d62828;
  bottom: 25px;
}

.btn-floating.email:hover {
  background-color: #cc2323;
}

/* zalo */
.btn-floating.face {
  bottom: 145px;
  background-color: #ffffff;
}

.btn-floating.face:hover {
  background-color: #ffffff;
}
</style>
