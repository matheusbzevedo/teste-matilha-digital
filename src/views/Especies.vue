<template>
  <div class="container">
    <h1>Espécies</h1>
    <ul class="lista">
      <div class="loading" v-if="isLoading">
        <loader
          type="rect"
          :quantidade="6"
        />
      </div>
      <li v-for="especie in especies" :key="especie.name">
        <span>
          <router-link :to="`/especie/${especie.url}`">
            {{ especie.name }}
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
      especies: {},
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
      this.getSpecies(this.pagination.next.url);
    },
    prevPage() {
      this.getSpecies(this.pagination.prev.url);
    },
    getSpecies(page = '') {
      this.$http.get(`species/${page}`)
        .then((response) => {
          this.isLoading = false;
          this.especies = response.data.results;

          if (response.data.previous) {
            this.pagination.prev.url = this.$URLHelper.getPage(response.data.previous);
            this.pagination.prev.show = true;
          } else this.pagination.prev.show = false;

          if (response.data.next) {
            this.pagination.next.show = true;
            this.pagination.next.url = this.$URLHelper.getPage(response.data.next);
          } else this.pagination.next.show = false;

          this.especies.forEach((especie) => {
            // eslint-disable-next-line no-param-reassign
            especie.url = this.$URLHelper.getTrueURL(especie.url);
          });
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getSpecies();
  },
};
</script>

<style lang="scss" scoped>

</style>
