<template>
    <div>
      <!-- Buttons for selecting screen size -->
      <div class="d-flex ">
        <button @click="setScreen('phone')">Phone</button>
        <button @click="setScreen('tablet')">Tablet</button>
        <button @click="setScreen('web')">Web</button>
      </div>
  
      <!-- Iframe with dynamic size -->
      <div>
        <iframe
          src="./template/templatemo_568_digimedia/homepage_1.html"
          :width="iframeWidth"
          :height="iframeHeight"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TemplateWeb",
    data() {
      return {
        screen: "web", // Default screen size
      };
    },
    computed: {
      iframeWidth() {
        // Set iframe width based on selected screen
        if (this.screen === "phone") return "375px";
        if (this.screen === "tablet") return "768px";
        return "100%"; // Default for web
      },
      iframeHeight() {
        // Set iframe height (you can adjust this as needed)
        return "1000px";
      },
    },
    methods: {
      setScreen(screen) {
        // Update the selected screen
        this.screen = screen;
      },
    },
  };
  </script>
  
  <style>
  /* Optional: Add some styles for buttons */
  button {
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>