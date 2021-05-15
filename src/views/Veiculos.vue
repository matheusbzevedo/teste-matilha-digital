<template>
  <div class="container">
    <h1>Veículos</h1>
    <ul class="lista">
      <div class="loading" v-if="isLoading">
        <loader
          type="rect"
          :quantidade="6"
        />
      </div>
      <li v-for="(veiculo, index) in veiculos" :key="index">
        <span>
          <router-link :to="`/veiculo/${veiculo.url}`">
            {{ veiculo.name }}
          </router-link>
        </span>
      </li>
    </ul>
    <pagination
      :prevShow="pagination.prev.show"
      :nextShow="pagination.next.show"
      @prevPage="prevPage()"
      @nextPage="nextPage()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      veiculos: [],
      pagination: {
        prev: {
          show: false,
          url: '',
        },
        next: {
          show: false,
          url: '',
        },
      },
    };
  },
  methods: {
    nextPage() {
      this.getVehicles(this.pagination.next.url);
    },
    prevPage() {
      this.getVehicles(this.pagination.prev.url);
    },
    getVehicles(page = '') {
      this.$http.get(`vehicles/${page}`)
        .then((response) => {
          this.isLoading = false;
          this.veiculos = response.data.results;

          if (response.data.previous) {
            this.pagination.prev.url = this.$URLHelper.getPage(response.data.previous);
            this.pagination.prev.show = true;
          } else this.pagination.prev.show = false;

          if (response.data.next) {
            this.pagination.next.show = true;
            this.pagination.next.url = this.$URLHelper.getPage(response.data.next);
          } else this.pagination.next.show = false;

          this.veiculos.forEach((veiculo) => {
            // eslint-disable-next-line no-param-reassign
            veiculo.url = this.$URLHelper.getTrueURL(veiculo.url);
          });
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getVehicles();
  },
};
</script>

<style lang="scss" scoped>

</style>
