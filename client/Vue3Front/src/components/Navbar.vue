<script>
  export default {
    computed: {
      username() {
        return this.$route.params.username
      },
    },
    methods: {
      goToAccountsPage() {
        if (isAuthenticated) {
          this.$router.push('/accounts')
        } else {
          this.$router.push('/login')
        }
      },
    }
  }
</script>

<template>
  <div id="main-navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/accounts">Accounts</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<style scoped lang="scss">
  #main-navbar {
    height: 50px;
    border-bottom: hsla(160, 100%, 37%, 1) 1px solid;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    justify-content: flex-end;
    padding: 1rem 2rem;
  }
</style>
