<template>
  <div class="container">
    <h1>Pessoas</h1>
    <ul class="lista">
      <div class="loading" v-if="isLoading">
        <loader
          type="rect"
          :quantidade="6"
        />
      </div>
      <li v-for="pessoa in pessoas" :key="pessoa.name">
        <span>
          <router-link :to="`/pessoa/${pessoa.url}`">
            {{ pessoa.name }}
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
      pessoas: {},
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
      this.getPeoples(this.pagination.next.url);
    },
    prevPage() {
      this.getPeoples(this.pagination.prev.url);
    },
    getPeoples(page = '') {
      this.$http.get(`people/${page}`)
        .then((response) => {
          this.isLoading = false;
          this.pessoas = response.data.results;

          if (response.data.previous) {
            this.pagination.prev.url = this.$URLHelper.getPage(response.data.previous);
            this.pagination.prev.show = true;
          } else this.pagination.prev.show = false;

          if (response.data.next) {
            this.pagination.next.show = true;
            this.pagination.next.url = this.$URLHelper.getPage(response.data.next);
          } else this.pagination.next.show = false;

          this.pessoas.forEach((pessoa) => {
            // eslint-disable-next-line no-param-reassign
            pessoa.url = this.$URLHelper.getTrueURL(pessoa.url);
          });
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getPeoples();
  },
};
</script>

<style lang="scss" scoped>

</style>
