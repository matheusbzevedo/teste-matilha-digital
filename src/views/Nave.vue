<template>
  <div class="container">
    <div class="content">
      <div class="loader" v-if="isLoading">
        <loader
          :quantidade="4"
        />
      </div>
      <div v-else>
        <h1>{{ nave.name || "" }}</h1>
        <span>modelo: {{ nave.model || "" }}</span>
        <span>Tripulantes: {{ nave.crew || "" }}</span>
        <span>Custo em créditos: {{ nave.cost_in_credits || "" }}</span>
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
      nave: {},
    };
  },
  methods: {
    getStarship(id = this.$route.params.id) {
      this.$http.get(`/starships/${id}/`)
        .then((response) => {
          this.nave = response.data;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getStarship();
  },
  activated() {
    this.nave = {};
    this.isLoading = true;
    this.getStarship();
  },
};
</script>

<style lang="scss" scoped>

</style>
