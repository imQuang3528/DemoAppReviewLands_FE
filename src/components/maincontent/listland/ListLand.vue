<template>
  <div class="hello">
    <h1>ListLand</h1>
    <DxDataGrid :data-source="lstListLand" >
     <DxColumn
      data-field="Danh sách bất động sản"
      data-type="string"
    /> 
     <DxColumn
      data-field="id_cate_review"
      data-type="string"
    /> 
    </DxDataGrid>
  </div>
</template>

<script>
import ListLand from "@/apis/listland";
import {DxDataGrid,DxColumn} from "devextreme-vue/data-grid";
export default {
  name: "ListLand",
  data() {
    return {
      lstListLand: [],
      objListLand: {
        Id_list_land: String,
        Title: String,
        Id_cate_review: String,
        Created_by: String,
        Created_date: null,
        Update_by: String,
        Update_date: null,
        Status: Number,
        Entity_Status: Number,
      },
    };
  },
  components: {
    DxDataGrid,
    DxColumn
  },
  created() {
    ListLand.getListLand().then((res) => {
      if (res && res.success) {
        this.lstListLand = res.data[0];
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
