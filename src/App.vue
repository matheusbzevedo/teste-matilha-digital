<template>
  <div id="app">
    <Menu />
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
  components: { Menu },
};
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    background: #cacaca;
  }
</style>
