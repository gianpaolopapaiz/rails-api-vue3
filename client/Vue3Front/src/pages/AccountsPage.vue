<script>
  import axios from "axios";
  export default {
    mounted() {
      console.log('Mounted')
      axios
          .get('http://localhost:3000/api/v1/accounts')
          .then(response => (
              console.log(response)
          ))
    }
  }
</script>

<template>
  <div>
    <h1>Accounts Page</h1>
    <h3>
      You’ve successfully created a project with.
    </h3>
  </div>
</template>

<style scoped>
</style>
