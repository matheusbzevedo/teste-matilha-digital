<template>
  <div class="container">
    <div class="content">
      <div class="loader" v-if="isLoading">
        <loader
          :quantidade="4"
        />
      </div>
      <div v-else>
        <h1>{{ veiculo.name || "" }}</h1>
        <span>modelo: {{ veiculo.model || "" }}</span>
        <span>Tripulantes: {{ veiculo.crew || "" }}</span>
        <span>Custo em créditos: {{ veiculo.cost_in_credits || "" }}</span>
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
      veiculo: {},
    };
  },
  methods: {
    getVehicle(id = this.$route.params.id) {
      this.$http.get(`vehicles/${id}/`)
        .then((response) => {
          this.veiculo = response.data;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getVehicle();
  },
  activated() {
    this.isLoading = true;
    this.veiculo = {};
    this.getVehicle();
  },
};
</script>

<style lang="scss" scoped>

</style>
