<template>
  <DxPopup
    :visible="visiblePopup"
    :title="titlePopup"
    width="450"
    height="200"
    class="content-top"
  >
    <div class="wrap-content-popup title">
      {{ contentPopup }}
    </div>
    <div class="wrap-popup-footer">
      <div class="content-popup-footer">
        <div class="button-close cursor">Không</div>
        <div class="btn btn-danger button-save cursor" @click="handleConfirm()">Có, xóa dữ liệu</div>
      </div>
    </div>
  </DxPopup>
</template>

<script>
import { DxPopup } from "devextreme-vue/popup";

export default {
  name: "PopupConfirmDelete",
  data() {
    return {};
  },
  props: {
    //tiêu đề popup
    titlePopup: {
      type: String,
      default: "",
    },
    //check ẩn hiển popup
    visiblePopup: {
      type: Boolean,
      default: false,
    },
    //nội dung popup
    contentPopup: {
      type: String,
      default: "",
    },
  },
  components: {
    DxPopup,
  },
  methods:{
    handleConfirm(){
      this.$emit("onConfirmDelete",true);
    }
  }
};
</script>

<style scoped lang="scss">
::v-deep .dx-overlay-wrapper .dx-overlay-content .dx-popup-content {
  padding: unset;
}
.wrap-content-popup {
  height: 90px;
  padding: 24px 20px;
  font-family: "Open Sans", sans-serif !important;
  font-size: 14px !important;
}
</style>