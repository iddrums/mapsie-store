<template>
   <nuxt-link :to="productLink" class="product-preview">
       <article>
          <div
          class="product-thumbnail"
          :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
         <div class="product-content">
         <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
       </div>
     </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
      }
    },
    computed: {
      productLink() {
        return this.isAdmin ? '/admin/' + this.id : '/products/' + this.id
      }
    }
  }


</script>
<style scoped>
.product-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .product-preview {
    width: 400px;
    margin: 10px;
  }
}

.product-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.product-content {
  padding: 10px;
  text-align: center;
}

a:hover .product-content,
a:active .product-content {
  background-color: #ccc;
}
</style>
