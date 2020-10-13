<template>
  <component :class="classes" :is="tag ? tag : 'button'">
    <slot />
  </component>
</template>
<script>
import { cnButton } from "./index";

export default {
  name: "Button",
  props: {
    tag: "",
  },
  computed: {
    classes() {
      return cnButton({});
    },
  },
};
</script>
<style>
.Button {
  border: 1px solid #FF5722;
}
</style>