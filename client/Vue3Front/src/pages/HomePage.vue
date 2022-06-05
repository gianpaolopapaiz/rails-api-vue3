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
  <h1>Home</h1>
</template>

<style scoped>
</style>
