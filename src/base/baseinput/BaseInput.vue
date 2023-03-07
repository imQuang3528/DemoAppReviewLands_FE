<template>
  <div class="wrap-control-input">
    <label class="title-input m-b-5">{{ title }}</label>
    <input
      class="control-input"
      :type="typeInput"
      :value="value"
      :placeholder="'Nhập nội dung'"
      :style="{ width: width + 'px', height: height + 'px' }"
      :tabindex="tabindex"
      @input="updateInput" 
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
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
    //loại input
    typeInput: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    value: {
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  computed: {
  },
  methods: {
    updateInput(event) {
      this.$emit("input", event.target.value);
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/BaseInput.scss";
</style>
