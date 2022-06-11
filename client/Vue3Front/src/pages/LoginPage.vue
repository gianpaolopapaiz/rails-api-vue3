<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        console.log('login...')
        this.axios
          .post()

      }
    }
}
</script>

<template>
  <div class="main-page">
    <div class="form-container">
      <div class="form-title">
        <h2>Login</h2>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password">
      </div>
      <div class="form-buttons">
        <input type="submit"
               class="default-button"
               value="Login"
               @click="login()">
      </div>
      <div class="form-other">
        <p>Don't have an account?</p>
        <router-link to="/create_credentials">Create credentials</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-page {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-container {
    border: 1px solid hsla(160, 100%, 37%, 1);
    padding: 2rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    .form-title {
      margin: 0 auto;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      row-gap: 0.3rem;
      input {
        background-color: var(--color-background);
        border: 1px solid hsla(160, 100%, 37%, 1);
        color: var(--color-text);
      }
    }
    .form-buttons {
      margin-top: 0.8rem;
      margin-bottom: 0.4rem;
    }
    .form-other {
      display:flex;
      column-gap: 10px;
    }
  }
</style>
