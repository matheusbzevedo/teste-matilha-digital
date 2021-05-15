<template>
  <div class="loader">
    <vue-skeleton-loader class="componente" v-for="c in quantidade" :key="c"
      :type="type"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import VueSkeletonLoader from 'skeleton-loader-vue';

export default {
  components: { VueSkeletonLoader },
  props: {
    type: {
      type: String,
      default: 'rect',
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 19,
    },
    quantidade: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped lang="scss">

 .componente {
    margin-top: 5px;
 }

</style>
