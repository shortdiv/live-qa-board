<template>
  <div class="question-form">
    <notification-container
      :status="status"
    />
    <form method="post" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="ask-question" />
      <ul>
      <li>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            @input="ev => form.name = ev.target.value"
            >
        </label>
      </li>
      <li>
        <p>Ask:</p>
        <label
          :class="{
            'pick-panelist': true,
            'checked':form.askPerson === panelist,
            'disabled': ifEvan(panelist)
          }"
          v-for="panelist in panelists"
        >
          <input
            type="radio"
            name="panelist"
            @input="ev => form.askPerson = ev.target.value"
            :value="panelist"
            :disabled="ifEvan(panelist)"
            :checked="form.askPerson === panelist"
          >
          <span>{{ panelist }}</span>
        </label>
      </li>
      <li>
        <label>
          Your Question:
          <textarea
             ref="input"
             name="question"
             @input="ev => form.question = ev.target.value"
             placeholder="Question Goes Here"
          />
        </label>
      </li>
      </ul>
      <button type="submit" class="submit-button">Ask a question</button>
    </form>
  </div>
</template>

<script>
import NotificationContainer from "./NotificationContainer.vue";
export default {
  name: "question-form",
  components: {
    NotificationContainer
  },
  data() {
    return {
      panelists: ["Chris Fritz", "Evan You", "Both"],
      form: {
        askPerson: "Chris Fritz",
        name: "",
        question: ""
      },
      sent: false,
      status: {}
    };
  },
  methods: {
    ifEvan(person) {
      return person === "Evan You" || person === "Both";
    },
    removeNotification() {
      this.sent = false;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "ask-question",
          ...this.form
        })
      })
        .then(() => {
          this.$router.push("thanks");
        })
        .catch(() => {
          this.$router.push("404");
        });
    }
  }
};
</script>

<style lang="scss">
body {
  text-align: left;
}

li {
  margin-bottom: 1em;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p,
label {
  color: #64b587;
  font-weight: bold;
}

.pick-panelist {
  display: block;
  position: relative;
  color: rgba(14, 30, 37, 0.54);
  font-weight: 300;
  font-size: 1.35em;
  padding: 10px 10px 10px 30px;
  margin: 10px auto;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;

  &.disabled {
    opacity: 0.5;
  }

  &:before {
    content: "";
    display: inline-block;
    border: 5px solid #64b587;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 30px;
    left: 20px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;

    + .checked {
      background: red;
    }
  }
}

.checked {
  &:before {
    background: white;
  }
  &:after {
    content: "";
    display: block;
    background: #64b587;
    border-radius: 100%;
    height: 15px;
    width: 15px;
    top: 20px;
    left: 40px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
    position: absolute;
  }
}

.question-form {
  position: relative;
}

form {
  background: rgb(248, 248, 248);
  padding: 3em;
  background: #fff;
  color: rgba(14, 30, 37, 0.54);
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
  box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
}

input[type="text"],
textarea {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 6px 14px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  color: #0e1e25;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
textarea {
  height: 200px;
}
span {
  margin-left: 15px;
  vertical-align: top;
}

.submit-button {
  width: 100%;
  padding: 20px 60px;
  outline: none;
  background-color: #64b587;
  border: none;
  border-radius: 5px;
  box-shadow: 0 9px #95a5a6;
  font-size: 1.2em;
  color: white;

  &:hover {
    cursor: pointer;
  }
}
</style>