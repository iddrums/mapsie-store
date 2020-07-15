<template>
<div class="give">
   <v-container fluid d-flex justify-center>
    <v-row justify-center class="d-flex">
      <v-col style="margin: 0 auto;" cols="12" sm="8" md="6">
       <v-card>
         <v-toolbar class="text-center" color="primary" dark>
             <v-toolbar-title>Login Form</v-toolbar-title>
        </v-toolbar>
         <form @submit.prevent="onSubmit">
          <AppControlInput type="email" v-model="email"
             name="email"
              label="Email">E-Mail Address</AppControlInput>
        <AppControlInput type="password" v-model="password"
              name="password"
              label="Password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </v-card>
      </v-col>
    </v-row>
   </v-container>
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
.give {
  margin-left: 20px;
  margin-right: 20px;
  padding-right: 30px;
  padding-left: 20px;
}
</style>

