<script>
  export default {
    data() {
      return {
        accounts: []
      }
    },
    // On mount fetch accounts data
    mounted() {
      this.axios
        .get('http://localhost:3000/api/v1/accounts')
        .then(response => (
          this.accounts = response.data.records
        ))
    }
  }
</script>

<template>
  <div>
    <h1>My Accounts</h1>
    <h3 v-if="accounts.length === 0">
      No account was created yet.
    </h3>
    <div v-else>
      <h3>
        Here are your following accounts:
      </h3>
      <div v-for="account in accounts">
        Id: {{account.id}} - {{account.name}} - {{account.description}}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
