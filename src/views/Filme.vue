<template>
  <div class="container">
    <div class="content">
      <div class="loader" v-if="isLoading">
        <loader
          :quantidade="5"
        />
      </div>
      <div v-else>
        <h1>{{ filme.title || "" }}</h1>
        <blockquote>{{ filme. opening_crawl || "" }}</blockquote>
        <span>Produtor: {{ filme.producer || "" }}</span>
        <span>Diretor: {{ filme.director || "" }}</span>
        <span>Data de lançamento: {{ filme.release_date || "" }}</span>
      </div>
    </div>
    <button class="back" @click="$router.go(-1)">voltar</button>
  </div>
</template>

<script>
import * as moment from 'moment';
import Loader from '../components/Loader.vue';

moment.locale('pt-br');

export default {
  components: { Loader },
  data() {
    return {
      isLoading: true,
      filme: {},
    };
  },
  methods: {
    getFilm(id = this.$route.params.id) {
      this.$http.get(`films/${id}/`)
        .then((response) => {
          this.filme = response.data;
          this.filme.release_date = moment(this.filme.release_date).format('L');
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getFilm();
  },
  activated() {
    this.filme = {};
    this.isLoading = true;
    this.getFilm();
  },
};
</script>

<style lang="scss" scoped>

  .container {

    blockquote {
      background-color: #ddd;
      padding: 8px;
      border-radius: 8px;
      max-width: 600px;
      margin-bottom: 20px;
      line-height: 30px;
      box-shadow: 8px 7px #eee;
    }
  }

</style>
