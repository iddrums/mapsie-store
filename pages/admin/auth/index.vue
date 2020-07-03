<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email"
        :counter="15"
        :rules="emailRules"
        required
        name="email"
        label="Email">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="password"
        :counter="15"
        :rules="passwordRules"
        required
        name="password"
        label="Password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  data() {
    return {
      valid: true,
      isLogin: true,
       email: '',
       emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      password: '',
       passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 15) || 'Password must have less than 15 characters'
      ]
    };
  },
  methods: {
    onSubmit() {
     this.$store.dispatch('authenticateUser', {
       isLogin: this.isLogin,
       email: this.email,
       password: this.password
     })
     .then(() => {
       this.$router.push('/admin');
     });
   }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
