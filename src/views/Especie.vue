<template>
  <div class="container">
    <div class="content">
      <div class="loader" v-if="isLoading">
        <loader
          :quantidade="4"
        />
      </div>
      <div v-else>
        <h1>{{ especie.name || "" }}</h1>
        <span>Língua: {{ especie.language || "" }}</span>
        <span>Designação: {{ especie.designation || "" }}</span>
        <span>Classificação: {{ especie.classification || "" }}</span>
        <span>Média de vida: {{ especie.average_lifespan || "" }}</span>
        <span>Média de Altura: {{ especie.average_height || "" }}</span>
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
      especie: {},
    };
  },
  methods: {
    getSpecie(id = this.$route.params.id) {
      this.$http.get(`species/${id}/`)
        .then((response) => {
          this.isLoading = false;
          this.especie = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.getSpecie();
  },
  activated() {
    this.especie = {};
    this.isLoading = true;
    this.getSpecie();
  },
};
</script>

<style lang="scss" scoped>

</style>
