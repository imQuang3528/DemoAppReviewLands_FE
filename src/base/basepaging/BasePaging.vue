<template>
  <div class="wrap-paging">
    <div class="wrap-content-left">
      Tổng số: <b>{{ totalRows }}</b> bản ghi
    </div>
    <div class="wrap-content-right">
      <div class="title-content-right">Số bản ghi/trang</div>
      <div class="dropdown">
        <BaseCombobox
          :options="lstCombo"
          class="select m-t-10"
          :width="56"
          :height="30"
          :default="15"
          :toparrow="38"
        />
      </div>

      <div class="content-right">
        <div class="text-paging">
          <div class="start">{{startRowNumber}}</div>
          <div> - </div>
          <div class="end">{{endRowNumber}}</div>
          <div style="width: 80px">bản ghi</div>
        </div>
        <div class="back-left cursor"><i class="bx bx-chevron-left"></i></div>
        <div class="back-right cursor"><i class="bx bx-chevron-right"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasePaging",
  data() {
    return {
      lstCombo: [
        { id: 10, value: 10 },
        { id: 25, value: 25 },
        { id: 35, value: 35 },
        { id: 45, value: 45 },
      ],
      // số lượng bản ghi của 1 page
      pageSize: {
        type: Number,
        default: 15,
      },
      // Tổng số trang
      totalPage: {
        type: Number,
        default: 0,
      },
      //tổng số bản ghi
      totalRows: {
        type: Number,
        default: null,
      },
      // Trang hiện tại
      currentPageIndex: {
        type: Number,
        default: 1,
      },
      startRowNumber: {
        type: Number,
        default: 0,
      },
      endRowNumber: {
        type: Number,
        default: 0,
      },
      visibleNext: {
        type: Boolean,
        default: false,
      },
      visibleBack: {
        type: Boolean,
        default: false,
      },
    };
  },
  props: {
    defaultPageSize: {
      type: Number,
      default: null,
    },
    totalRecord: {
      type: Number,
      default: null,
    },
  },
  created() {
    this.totalRows = this.totalRecord;
    this.handleInitPaging();
  },
  methods: {
    // khởi tạo paging
    handleInitPaging() {
      this.currentPageIndex = 1;
      this.totalPage = Math.ceil(this.totalRows / this.pageSize);
      if (this.totalPage > 1) {
        this.visibleNext = true;
        this.visibleBack = false;
      }
      if (this.totalPage == 1) {
        this.visibleNext = false;
        this.visibleBack = false;
      }
      this.handleCalculatePaging();
    },
    /**
     * Hàm tính toán paging
     */
    handleCalculatePaging() {
      if (this.totalRows == 0) {
        this.endRowNumber = 0;
        this.visibleNext = false;
        this.visibleBack = false;
      } else {
        this.startRowNumber = (this.currentPageIndex - 1) * this.pageSize + 1;
        this.endRowNumber = this.startRowNumber + this.pageSize - 1;
      }
    },
    handleNextPage() {
      if (this.currentPageIndex == this.totalPage - 1) {
        this.visibleNext = false;
      }
      if (this.currentPageIndex < this.totalPage) {
        this.currentPageIndex++;
        this.handleCalculatePaging();
        this.visibleBack = true;
      }
      if (this.currentPageIndex == 1) {
        this.visibleBack = false;
      }
    },
    handleBackPage() {
      if (this.currentPageIndex == 2) {
        this.visibleBack = false;
      }
      if (this.currentPageIndex > 1) {
        this.currentPageIndex--;
        this.handleCalculatePaging();
        this.visibleNext = true;
      }
      if (this.currentPageIndex == this.totalPage) {
        this.visibleNext = true;
      }
    },
    eventPageChanged() {
      let param = {
        Key: "",
        Skip: this.startRowNumber - 1,
        Take: this.endRowNumber,
        CurrentPage: this.currentPageIndex,
      };
      this.$emit("onPageChange", param);
    },
  },
};
</script>
<style lang="scss">
.wrap-paging {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #f5f5f5;
  height: 60px;
  .wrap-content-right {
    display: flex;
    align-items: center;
    .content-right {
      display: flex;
      align-items: center;
      .text-paging {
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding-top: 10px;
      }
      .back-left {
        font-size: 24px;
        padding-top: 10px;
      }
      .back-right {
        font-size: 24px;
        padding-top: 10px;
      }
    }
    .title-content-right {
      margin-right: 10px;
      padding-top: 10px;
    }
  }
}
</style>