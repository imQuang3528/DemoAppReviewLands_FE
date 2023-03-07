<template>
  <div class="sidebar-container" :class="{ shrinkmode: !isCollap }">
    <div class="wrap-logo">
      <i class="bx bx-landscape"></i>
      <span class="logo-name" v-show="isCollap">ReviewLandAdmin</span>
    </div>
    <ul class="nav-links">
      <!-- Render list menu -->
      <li v-for="item in listMenu" :key="item.id" @click="handleShowSubmenu(item.id)">
        <div class="menu-icon" @click="handleRedirect(item.linkTo)">
          <div> 
            <i v-bind:class="item.icon"></i>
            <span v-show="isCollap">{{ item.menu }}</span>
          </div>
          <i
            v-show="item.subIcon"
            class="bx bx-chevron-down arrow"
            v-bind:class="{ arrowup: item.isShowSubIcon }"
          ></i>
        </div>
        <!-- Render menu con -->
        <transition v-if="item.subMenu.length > 0">
          <ul class="sub-menu" v-bind:class="{ show: item.isShowSubIcon }">
            <li v-for="sub in item.subMenu" :key="sub.subId" @click="handleRedirect(sub.linkTo)" >
               {{sub.subTitle}}
            </li>                   
          </ul>
        </transition>
      </li>
    </ul>
    <div class="wrap-collap" @click="handleCollapSideBar">
      <div class="collap-in" v-if="isCollap">
        <i class="bx bx-chevrons-left box-collap-in"></i>
        <span class="content-collap">Thu gọn</span>
      </div>
      <div class="collap-out" v-if="!isCollap">
        <i class="bx bx-chevrons-right box-collap-out"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCateDropped: false,
      isDetailDropped: false,
      isCollap: true,
      listMenu: [
        {
          id: 0,
          menu: "Trang chủ",
          icon: "bx bxs-grid",
          subIcon: "",
          subMenu: [],
        },
        {
          id: 1,
          menu: "Danh mục review",
          icon: "bx bx-category-alt",
          subIcon: "",
          subMenu: [],
          linkTo: "/category-review",
        },
        {
          id: 2,
          menu: "Danh mục",
          icon: "bx bx-collection",
          subIcon: true,
          isShowSubIcon: false,
          subMenu: [
            {
              subId: 0,
              subTitle: "Danh sách Homestay",
              linkTo: "/list-homestay",
            },
            {
              subId: 1,
              subTitle: "Danh mục bất động sản",
              linkTo: "/list-land",
            },
            { 
              subId: 2, 
              subTitle: "Danh mục nhà trọ",
              linkTo: "/list-rented-house",
            },
            { 
              subId: 3, 
              subTitle: "Danh mục nhà ở",
              linkTo: "/list-house",
            },
          ],
        },
        {
          id: 3,
          menu: "Chi tiết bài viết",
          icon: "bx bx-detail",
          subIcon: true,
          isShowSubIcon: false,
          subMenu: [
            { subId: 0, subTitle: "Chi tiết bài viết 1" },
            { subId: 1, subTitle: "Chi tiết bài viết 2" },
            { subId: 2, subTitle: "Chi tiết bài viết 3" },
          ],
        },
      ],
    };
  },
  methods: {
    handleCollapSideBar(){
      this.isCollap = !this.isCollap
      this.$emit("collapSideBarEvent")
    },
    handleShowSubmenu(value) {
      this.listMenu.forEach((item) => {
        if (item.id === value) {
          item.isShowSubIcon = !item.isShowSubIcon;
        } else {
          item.isShowSubIcon = false;
        }
      });
    },
    /**
     * Hàm điều hướng
     */
    handleRedirect(value){
      this.$router.push(value);
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sidebar/sidebar.scss";
</style>
