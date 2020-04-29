<template>
  <article class="container">
    <header>
      <h1 class="title">Lista de Etiquetas</h1>
    </header>
    <section class="card">
      <TagsList />
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TagsList from '../components/TagsList.vue'

@Component({
  components: {
    TagsList
  }
})
export default class Index extends Vue {}
</script>

<style>
header {
  width: 100%;
}
.container {
  height: 100vh;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  margin-bottom: 0.2em;
}
.card {
  box-shadow: -3px 22px 40px 5px rgba(138, 135, 138, 1);
  transition: 0.3s;
  width: 80%;
  margin: 30px auto 50px auto;
  min-height: 80%;
}

@media only screen and (max-width: 320px) {
  .title {
    font-size: 35px;
  }
}

@media only screen and (min-width: 321px) and (max-width: 470px) {
  .title {
    font-size: 39px;
  }
}

@media only screen and (max-width: 812px) and (orientation: landscape) {
  header {
    margin-top: 10px;
  }
}
</style>
