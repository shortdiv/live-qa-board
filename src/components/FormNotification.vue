<template>
  <div class="notification">
    <div class="notification---icon">
      <i class="fa" :class="iconClass" />
    </div>
    <div>
      <p v-text="status.text"></p>
    </div>
    <button
      type="button"
      class="notification--remove"
      @click="removeNotification()"
    >
      <i class="fa fa-times" />
    </button>
  </div>
</template>

<script>
  export default {
    name: "form-notification",
    props: {
      status: {
        type: Object
      },
    },
    methods: {
      removeNotification () {
        clearTimeout(this.countdown)
        this.$emit('remove-notification')
      }
    },
    computed: {
      iconClass () {
        switch(this.status.code) {
          case 'success':
             return 'fa-check'
          case 'error':
            return 'fa-exclamation'
        }
      }
    },
    mounted () {
      this.countdown = setTimeout(this.removeNotification, 3000)
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    position: absolute;
    z-index: 5;
    box-sizing: border-box;
    top: 10px;
    right: 10px;
    height: 100px;
    width: 179px;
    padding: 20px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border-radius: 3px;
    padding-bottom: 40px;
    background: white;

    &--remove {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 15px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  button {
    border: none;
  }
</style>

