<template>
  <div id="app">
    <Button :theme="theme?'action':false" :type="type?'link':false">Button</Button>
    <hr>
    <label>
      <input type="checkbox" v-model="theme">theme: action
    </label>
    <br>
    <label>
      <input type="checkbox" v-model="type">type: link
    </label>
    <br>
  </div>
</template>

<script>
import { compose } from "bem-vue";
import ButtonPresenter from "./components/Button/Button.vue";
import { withButtonThemeAction } from "./components/Button/_theme/Button_theme_action.js";
import { withButtonTypeLink } from "./components/Button/_type/Button_type_link";

const Button = compose(
  withButtonThemeAction,
  withButtonTypeLink
)(ButtonPresenter);

export default {
  name: "App",
  components: {
    Button
  },
  data() {
    return {
      theme: false,
      type: false
    };
  }
};
</script>

<style>
.Button {
}

.Button_theme_action:before {
  content: "Action ";
}
.Button_type_link:after {
  content: " Link";
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
