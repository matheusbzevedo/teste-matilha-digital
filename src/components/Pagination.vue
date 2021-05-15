<template>
  <div class='pagination'>
    <button v-if="prevShow" @click="prev()">&lt;</button>
    <button v-if="nextShow" @click="next()">&gt;</button>
  </div>
</template>

<script>
export default {
  props: {
    prevShow: {
      type: Boolean,
      default: false,
    },
    nextShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    prev() {
      this.$emit('prevPage');
    },
    next() {
      this.$emit('nextPage');
    },
  },
};
</script>

<style lang="scss" scoped>

  .pagination {
    margin-top: 20px;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
</style>
