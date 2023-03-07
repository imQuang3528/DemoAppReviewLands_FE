<template>
  <div class="wrap-control-radio m-t-5">
    <div class="title bold">{{title}}</div>
    <div class="sub-wrap-option">
        <div v-for="item in lstOption" :key="item.Id">
            <div class="wrap-option">
                <input type="radio" :name="item.NameGroup" :value="item.Value" :checked="value==item.Value" @change="handleEmitValue($event)">
                <label :for="item.Id" class="m-l-3 f-s-14">{{item.LabelTitle}}</label>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  data() {
    return {
     
    };
  },
  props: {
    //tiêu đề input
    title: {
      type: String,
      default: null,
    },
    lstOption:{
        default:[]
    },
    value:{
        default:null
    }
  },
  methods: {
    //convert chuối sang dạng DL nguyên thủy
    handleConvertData(valueString){    
      switch (valueString.toLowerCase().trim()){
        case 'true':
          return true;
        case 'false':
          return false;
        default:
          if(typeof(parseInt(valueString))=="number"){
            return parseInt(valueString);
          }
          return Boolean(valueString);
      }
    },
    handleEmitValue(e){
      let value=this.handleConvertData(e.target.value);
      this.$emit("onSelectedEvent",value);
    }
  }
  // computed:{
  //   listener(){
  //     let me=this;
  //     return{
  //       change:(e)=>{
  //         let value=me.handleConvertData(e.target.value);
  //         this.$emit("selected",value);
  //       }
  //     }
  //   }
  // }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/BaseCombobox.scss";

.wrap-option {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.sub-wrap-option {
    display: flex;
    align-items: center;
    margin-block: 3px;
}

input[type="radio"] {
    width: 18px;
    height: 18px;
}
</style>
