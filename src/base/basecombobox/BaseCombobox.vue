<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="title m-b-5">{{ title }}</div>
    <div class="selected" :style="{ width: width + 'px', height: height + 'px' }" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="arrow" :style="{ top: toparrow + '%' }" :class="{ expanded: open }"></div>
    <div class="items" :class="{ selectHide: !open }" :style="{ width: width + 'px' }">
      <div
        class="child-item"
        v-for="(option, i) of options"
        :key="i"
        @click="selected = option.value;open = false;$emit('input', option.id);">
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCombobox",
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0].value
        : null,
      open: false,
    };
  },
  props: {
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    toparrow: {
      type: Number,
      default: null,
    },
    topvalue: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    default: {
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  mounted() {
    console.log("combobox", this.selected);
    this.$emit("input", this.selected);
  },
  updated() {},
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/BaseCombobox.scss";
</style>
