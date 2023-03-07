<template>
  <div class="popup-category-review">
    <DxPopup
      class="wrap-popup-cate-review"
      title="Danh mục review"
      :visible="visiblePopup"
      @hiding="onHiding"
      width="500"
      height="290"
    >
      <div class="wrap-content-popup">
        <BaseInput
          :title="'Danh mục'"
          :typeInput="'text'"
          :width="460"
          :height="36"
          :tabindex="1"
          v-model="objModel.TITLE"
        />
        <BaseCombobox
          :title="'Trạng thái'"
          :options="lstCombo"
          class="select m-t-10"
          :tabindex="2"
          :width="460"
          :height="36"
          :default="'Không hoạt động'"
          :toparrow="60"
          v-model="objModel.STATUS"
        />
      </div>
      <div class="wrap-popup-footer">
        <div class="content-popup-footer">
          <div class="button-close cursor">Không</div>
          <div
            class="btn btn-primary button-save cursor"
            @click="handleSave"
          >
            Lưu
          </div>
        </div>
      </div>
    </DxPopup>
  </div>
</template>

<script>
import CateReviewService from "@/apis/categoryReview";
import { DxPopup } from "devextreme-vue/popup";
export default {
  name: "PopupCategoryReview",
  data() {
    return {
      lstCate: [],
      objModel: {
        ID: "",
        TITLE: "",
        CREATED_BY: null,
        CREATED_DATE: null,
        UPDATED_BY: null,
        UPDATED_DATE: null,
        STATUS: 0,
        ENTITY_STATUS: 0,
      },
      lstCombo: [
        { id: this.$ms.enum.Status.Active, value: "Hoạt động" },
        { id: this.$ms.enum.Status.InActive, value: "Dừng hoạt động" },
      ],
    };
  },
  props: {
    visiblePopup: {
      type: Boolean,
      default: false,
    },
    objectCate: {
      type: Object,
      default: null,
    },
  },
  components: {
    DxPopup,
  },
  created() {},
  mounted() {
    this.objModel = this.objectCate;
  },
  updated() {
    this.objModel = this.objectCate;
  },
  methods: {
    onHiding() {
      this.$emit("onVisiblePopup", false);
    },
    handleChangeValue(data) {
      this.objModel.TITLE = data;
    },
    handleSelectValue(data) {
      this.objModel.STATUS = data;
    },
    /**
     * Hàm lưu
     */
    handleSave() {
      CateReviewService.handleSaveCategory(this.objModel).then((res) => {
        if (res && res.success) {
          this.objModel = {};
          this.$emit("onVisiblePopup", false, true);
        }
      });
    },
    handleFileUpload(e) {
      if (e.target.files && e.target.files[0]) {
        let fileSelected = e.target.files[0];
        if (!this.$ms.commonFn.validateImage(fileSelected)) {
          return false;
        } else {
          let reader = new FileReader();
          reader.readAsDataURL(fileSelected);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/categoryreview/catereview.scss";
</style>
