<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  font: inherit;
  background-color: purple;
  color: white;
  padding: 5px;
  cursor: pointer;
  border: 1px solid purple;
}

.button:hover,
.button:active {
  background-color: purple;
  border: 1px solid purple;
}

.inverted {
  background-color: white;
  color: purple;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: purple;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: purple;
  border: 1px solid transparent;
  color: white;
}
</style>
