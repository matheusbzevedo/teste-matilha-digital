<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link to="/" exact>Início</router-link>
      </li>
      <li>
        <router-link to="/filmes">Filmes</router-link>
      </li>
      <li>
        <router-link to="/veiculos">Veículos</router-link>
      </li>
      <li>
        <router-link to="/naves">Naves</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>

.router-link-active {
  color: white;
}

</style>
