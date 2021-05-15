<template>
  <div class="container">
    <h1>Filmes</h1>
    <ul class="lista">
      <div class="loading" v-if="isLoading">
        <loader
          type="rect"
          :quantidade="6"
        />
      </div>
      <li v-for="filme in filmes" :key="filme.episode_id">
        <span>
          <router-link :to="`/filme/${filme.url}`">
            {{ filme.title }}
          </router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      filmes: [],
    };
  },
  created() {
    this.$http.get('films/')
      .then((response) => {
        this.isLoading = false;
        this.filmes = response.data.results;
        this.filmes.forEach((filme) => {
          // eslint-disable-next-line no-param-reassign
          filme.url = this.$URLHelper.getTrueURL(filme.url);
        });
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped lang="scss">

</style>
