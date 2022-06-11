<script setup>
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
</template>

<style lang="scss">
@import "./assets/base.css";

main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-weight: normal;
  height: calc(100vh - 50px);
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

.default-button {
  border: 1px solid hsla(160, 100%, 37%, 1);
  padding: 0.5rem 0.8rem;
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
