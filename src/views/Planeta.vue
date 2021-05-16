<template>
  <div class="container">
    <div class="content">
      <div class="loader" v-if="isLoading">
        <loader
          :quantidade="4"
        />
      </div>
      <div v-else>
        <h1>{{ planeta.name || "" }}</h1>
        <span>População: {{ planeta.population || "" }}</span>
        <span>Clima: {{ planeta.climate || "" }}</span>
        <span>Gravidade: {{ planeta.gravity || "" }}</span>
        <span>Terreno: {{ planeta.terrain || "" }}</span>
      </div>
    </div>
    <button class="back" @click="$router.go(-1)">voltar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      planeta: {},
    };
  },
  methods: {
    getPlanet(id = this.$route.params.id) {
      this.$http.get(`planets/${id}/`)
        .then((response) => {
          this.isLoading = false;
          this.planeta = response.data;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getPlanet();
  },
  activated() {
    this.planeta = {};
    this.isLoading = true;
    this.getPlanet();
  },
};
</script>

<style lang="scss" scoped>

</style>
