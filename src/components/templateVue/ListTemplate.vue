<template>
    <div>
        <!-- Tabs -->
        <div class="d-flex">
            <button 
                @click="selectTab(0)" 
                :class="{ active: selectedTab === 0 }"
            >
                Doanh nghiệp
            </button>
            <button 
                @click="selectTab(1)" 
                :class="{ active: selectedTab === 1 }"
            >
                Thương mại điện tử
            </button>
            <button 
                @click="selectTab(2)" 
                :class="{ active: selectedTab === 2 }"
            >
                Web Cưới
            </button>
            <button 
                @click="selectTab(3)" 
                :class="{ active: selectedTab === 3 }"
            >
                Quản lý cửa hàng
            </button>
            <button 
                @click="selectTab(4)" 
                :class="{ active: selectedTab === 4 }"
            >
                Profile
            </button>
        </div>

        <!-- Tab Content -->
        <div>
            <div id="doanhNghiep" v-show="selectedTab === 0">doanhNghiep</div>
            <div id="TMDT" v-show="selectedTab === 1">TMDT</div>
            <div id="wedding" v-show="selectedTab === 2">wedding</div>
            <div id="qlyCuaHang" v-show="selectedTab === 3">qlyCuaHang</div>
            <div id="profile" v-show="selectedTab === 4">profile</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListTemplate",
    data() {
        return {
            selectedTab: 0, // Tab được chọn mặc định
        };
    },
    methods: {
        selectTab(index) {
            this.selectedTab = index; // Cập nhật tab được chọn
        },
    },
};
</script>

<style scoped>
/* Styles for buttons */
button {
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    border-radius: 4px;
}

button.active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
}

button:hover {
    background-color: #0056b3;
    color: white;
}

/* Styles for tab content */
div[id] {
    margin-top: 20px;
    font-size: 16px;
}
</style>