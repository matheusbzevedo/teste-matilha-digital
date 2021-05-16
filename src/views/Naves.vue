<template>
  <div class="container">
    <h1>Naves</h1>
    <ul class="lista">
      <div class="loading" v-if="isLoading">
        <loader
          type="rect"
          :quantidade="6"
        />
      </div>
      <li v-for="nave in naves" :key="nave.model">
        <span>
          <router-link :to="`/nave/${nave.url}`">
            {{ nave.name }}
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
      naves: {},
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
      this.getStarships(this.pagination.next.url);
    },
    prevPage() {
      this.getStarships(this.pagination.prev.url);
    },
    getStarships(page = '') {
      this.$http.get(`starships/${page}`)
        .then((response) => {
          this.isLoading = false;
          this.naves = response.data.results;

          if (response.data.previous) {
            this.pagination.prev.url = this.$URLHelper.getPage(response.data.previous);
            this.pagination.prev.show = true;
          } else this.pagination.prev.show = false;

          if (response.data.next) {
            this.pagination.next.show = true;
            this.pagination.next.url = this.$URLHelper.getPage(response.data.next);
          } else this.pagination.next.show = false;

          this.naves.forEach((nave) => {
            // eslint-disable-next-line no-param-reassign
            nave.url = this.$URLHelper.getTrueURL(nave.url);
          });
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getStarships();
  },
};
</script>

<style lang="scss" scoped>

</style>
