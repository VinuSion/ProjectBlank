<template>
  <label class="switch">
    <input type="checkbox" v-model="checked" @change="onChange">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  props: {
    defaultChecked: Boolean // defines default value for the switch so that it can send it to app.vue.
  },
  data() {
    return { // when switch is clicked, it will call back to the onChange function to set it to true.
      checked: this.defaultChecked
    }
  },
  methods: {
    onChange() { // this is the function that will check to change the default value.
      this.$emit('input', this.checked) // it also emits the method back to the parent as props.
    }
  }
}
</script>