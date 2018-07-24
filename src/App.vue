<template>
  <div id="app">
    <QuestionForm />
  </div>
</template>

<script>
import QuestionForm from './components/QuestionForm.vue';

export default {
  name: "app",
  components: {
    QuestionForm
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
