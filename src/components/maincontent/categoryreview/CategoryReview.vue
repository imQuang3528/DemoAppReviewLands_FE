<template>
  <div class="wrap-category-review">
    <div class="wrap-header-grid">
      <div class="title">
        <h1>Danh mục review</h1>
      </div>
      <div class="btn-new btn-primary cursor" @click="handleShowPopup()">
        <i class="bx bx-plus"></i>
        <span class="title-button">Thêm mới tesst</span>
      </div>
    </div>
    <div class="wrap-grid-category-review">
      <DxDataGrid :data-source="lstCate" :show-borders="true">
        <DxLoadPanel :enabled="true" />
        <DxColumn
          data-field="TITLE"
          data-type="string"
          caption="Danh mục review"
          cell-template="cellTemplate"
        />
        <DxColumn data-field="CREATED_BY" caption="Người tạo" />
        <DxColumn data-field="CREATED_DATE" caption="Ngày tạo" />
        <DxColumn data-field="STATUS" caption="Trạng thái" />
        <DxColumn cell-template="templateId"> </DxColumn>
        <template #cellTemplate="{ data }">
          <div>{{ data.value }}</div>
        </template>
        <template #templateId="{ data }">
          <div class="wrap-button">
            <div class="edit cursor">
              <i
                class="bx bx-pencil"
                @click="handleGetDetail(data.data.ID)"
              ></i>
            </div>
            <div class="delete cursor m-l-5">
              <i class="bx bx-trash" @click="handleDelete(data.data.ID)"></i>
            </div>
          </div>
        </template>
      </DxDataGrid>
    </div>
    <div class="wrap-container-paging" v-if="isCheckGetSuccess">
      <BasePaging :totalRecord="totalRecord" />
    </div>
    <div>
      <PopupCategoryReview
        v-bind:visiblePopup="visiblePopup"
        @onVisiblePopup="onVisiblePopup"
        :objectCate="objCategory"
      />
      <popup-confirm-delete
        :visiblePopup="visiblePopupDel"
        :titlePopup="'Xóa danh mục review'"
        @onConfirmDelete="onConfirmDelete"
        contentPopup="'Bạn có thực sự muốn xóa danh mục review?'"
      >
      </popup-confirm-delete>
    </div>
  </div>
</template>

<script>
import CategoryReview from "@/apis/categoryReview";
import { DxDataGrid, DxColumn, DxLoadPanel } from "devextreme-vue/data-grid";
import PopupCategoryReview from "../../popup/popupcategoryreview/PopupCategoryReview.vue";
import PopupConfirmDelete from "../../popup/basepopup/PopupConfirmDelete.vue";
export default {
  name: "CategoryReview",
  data() {
    return {
      lstCate: [],
      //biến ẩn hiển popup
      visiblePopup: false,
      //biến ẩn hiển popup xóa
      visiblePopupDel: false,
      objCategory: {
        ID: "",
        Title: "",
        CREATED_BY: "",
        CREATED_DATE: null,
        UPDATED_BY: "",
        UPDATED_DATE: null,
        STATUS: Number,
        ENTITY_STATUS: Number,
        TOTALRECORD: Number,
      },
      tempId: null,
      initParamFilter: {
        Key: "",
        Skip: 1,
        Take: 15,
      },
      totalRecord: null,
      //check xem đã lấy DL thành công hay chưa?
      isCheckGetSuccess: false,
    };
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxLoadPanel,
    PopupCategoryReview,
    PopupConfirmDelete,
  },
  created() {
    this.handleGetCate();
  },
  methods: {
    /**
     * Hàm lấy về danh mục
     */
    handleGetCate() {
      CategoryReview.getCategoryReview(this.initParamFilter).then((res) => {
        if (res.data) {
          this.lstCate = this.$ms.commonFn.deserialize(res.data)[0];
          this.totalRecord = this.lstCate[0].TOTALRECORD;
          this.isCheckGetSuccess = true;
        }
      });
    },
    /**
     * Hàm lấy về chi tiết
     */
    handleGetDetail(value) {
      CategoryReview.handleGetDetail(value).then((res) => {
        if (res && res.success) {
          this.objCategory = this.$ms.commonFn.deserialize(res.data);
          this.visiblePopup = true;
        }
      });
    },

    handleDelete(id) {
      this.visiblePopupDel = true;
      this.tempId = id;
    },
    /**
     * Hàm show popup
     */
    handleShowPopup() {
      this.visiblePopup = true;
    },
    /**
     * Hàm ẩn popup
     */
    onVisiblePopup(data, isReload) {
      this.visiblePopup = data;
      if (isReload) {
        this.handleGetCate();
        this.$toast.success("Lưu thành công");
      }
    },
    onConfirmDelete(data) {
      if (data) {
        CategoryReview.handleDeleteCateory(this.tempId).then((res) => {
          if (res && res.success) {
            this.handleGetCate();
            this.visiblePopupDel = false;
            this.$toast.success("Lưu thành công");
          }
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/categoryreview/catereview.scss";
</style>
