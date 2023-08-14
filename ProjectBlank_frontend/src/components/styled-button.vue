<template>
  <button @click="onClick" id="button">
    <slot>Test</slot> <!-- This is a slot, it is used to hold placeholder data until you decide to add your own. -->
    <div class="shine"></div>
  </button>
</template>

<script>
export default {
  props: {
    onClick: { // These are the props placed in by this component so that a function can be sent and executed from the parent component.
      type: Function,
      required: true
    }
  }
}
</script>