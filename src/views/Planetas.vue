<template>
  <div class="container">
    <h1>Planetas</h1>
    <ul class="lista">
      <div class="loading" v-if="isLoading">
        <loader
          type="rect"
          :quantidade="6"
        />
      </div>
      <li v-for="planeta in planetas" :key="planeta.name">
        <span>
          <router-link :to="`/planeta/${planeta.url}`">
            {{ planeta.name }}
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
      planetas: {},
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
      this.getPlanets(this.pagination.next.url);
    },
    prevPage() {
      this.getPlanets(this.pagination.prev.url);
    },
    getPlanets(page = '') {
      this.$http.get(`planets/${page}`)
        .then((response) => {
          this.isLoading = false;
          this.planetas = response.data.results;

          if (response.data.previous) {
            this.pagination.prev.url = this.$URLHelper.getPage(response.data.previous);
            this.pagination.prev.show = true;
          } else this.pagination.prev.show = false;

          if (response.data.next) {
            this.pagination.next.show = true;
            this.pagination.next.url = this.$URLHelper.getPage(response.data.next);
          } else this.pagination.next.show = false;

          this.planetas.forEach((planeta) => {
            // eslint-disable-next-line no-param-reassign
            planeta.url = this.$URLHelper.getTrueURL(planeta.url);
          });
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getPlanets();
  },
};
</script>

<style lang="scss" scoped>

</style>
