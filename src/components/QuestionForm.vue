<template>
  <div>
    <form name="ask-question" method="post">
      <input type="hidden" name="form-name" value="qa-question" />
      <p>
        <label>
          Your Name:
          <input type="text" name="name">
        </label>
      </p>
      <p>
        <label v-for="panelist in panelists">
          <input
            type="radio"
            name="panelist"
            :value="panelist"
            :checked="askPerson === panelist"
          >
          <span>Ask {{ panelist }}</span>
        </label>
      </p>
      <p>
        <label>
          Your Question:
          <textarea
             ref="input"
             name="question"
             placeholder="Question Goes Here"
          />
        </label>
      </p>
      <p>
        <button type="submit" class="button">Ask a question</button>
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'question-form',
    data () {
      return {
        panelists: ["Chris Fritz", "Evan You", "Both"],
        askPerson: "Both",
      }
    }
  }
</script>

<style scoped>
form {
  margin-top: 3em;
  padding: 3em;
  background: #fff;
  color: rgba(14,30,37,0.54);
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 6px 0 rgba(14,30,37,0.12);
  box-shadow: 0 1px 6px 0 rgba(14,30,37,0.12);
}
</style>