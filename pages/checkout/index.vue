<template>
  <v-container>
    <h2 class="display-2">Checkout Page</h2>
    <form actions>
      <v-layout>
        <v-flex x6>
            <strong>Payment address</strong>
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Address"></v-text-field>
            <v-text-field label="Zipcode"></v-text-field>
            <v-text-field label="City"></v-text-field>
            <v-text-field label="Phone"></v-text-field>
            <v-text-field label="E-mail"></v-text-field>

            <v-checkbox v-model="delivery_address" label="Gethere delivery address"></v-checkbox>
          </v-flex>
        <v-flex x6>
            <strong>Delivery address</strong>
            <div v-if="delivery_address">
              <v-text-field label="Name"></v-text-field>
              <v-text-field label="Address"></v-text-field>
              <v-text-field label="Zipcode"></v-text-field>
              <v-text-field label="City"></v-text-field>
            </div>
          <div v-else>
            <v-alert
                type="info"
                :value="true"
              >The delivery address is the same as the payment address</v-alert>
          </div>
          <v-btn color="primary" lager style="float: right;">Complete Order</v-btn>
        </v-flex>
      </v-layout>
    </form>
    <hr />

  </v-container>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      delivery_address: false
    }
  }
}
</script>

<style scoped></style>
