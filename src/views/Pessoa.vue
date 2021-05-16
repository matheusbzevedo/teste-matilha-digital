<template>
  <div class="container">
    <div class="content">
      <div class="loader" v-if="isLoading">
        <loader
          :quantidade="4"
        />
      </div>
      <div v-else>
        <h1>{{ pessoa.name || "" }}</h1>
        <span>Nascimento: {{ pessoa.birth_year || "" }}</span>
        <span>Altura: {{ pessoa.height || "" }}</span>
        <span>Massa: {{ pessoa.mass || "" }}</span>
        <span>Gênero: {{ pessoa.gender || "" }}</span>
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
      pessoa: {},
    };
  },
  methods: {
    getPeople(id = this.$route.params.id) {
      this.$http.get(`people/${id}/`)
        .then((response) => {
          this.isLoading = false;
          this.pessoa = response.data;
        })
        .catch((error) => console.error(error));
    },
  },
  created() {
    this.getPeople();
  },
  activated() {
    this.pessoa = {};
    this.isLoading = true;
    this.getPeople();
  },
};
</script>

<style lang="scss" scoped>

</style>
