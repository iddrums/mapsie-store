<template>
  <form @submit.prevent="onSubmit">
        <AppControlInput v-model="editedProduct.title">Title</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedProduct.description">Description</AppControlInput>
        <AppControlInput v-model="editedProduct.price">Price</AppControlInput>
        <AppControlInput v-model="editedProduct.thumbnail">Thumbnail Link</AppControlInput>
        <AppControlInput control-type="textarea" v-model="editedProduct.previewText">Preview Text</AppControlInput>
        <AppButton type="submit">Submit</AppButton>
        <AppButton type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</AppButton>
      </form>
</template>


<script>
export default {
  props: {
    product: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editedProduct: this.product
      ? { ...this.product }
      : {
        title: '',
        description: '',
        price: '',
        thumbnail: '',
        previewText: ''
      }
    }
  },
  methods: {
    onSubmit() {
      // Submit the product
      this.$emit('submit', this.editedProduct)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    }
  }
}
</script>
