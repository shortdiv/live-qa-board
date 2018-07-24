<template>
  <transition
    name="notification"
    v-if="hasNotifications"
  >
    <form-notification
      :status="status"
      @remove-notification="removeNotification()"
    />
  </transition>
</template>

<script>
  import FormNotification from './FormNotification.vue';
  export default {
    name: 'notification-container',
    components: {
      FormNotification
    },
    props: {
      status: {
        type: Object
      }
    },
    methods: {
      removeNotification () {
        this.hasNotifications = false
      }
    },
    watch: {
      status() {
        this.hasNotifications = true
      }
    },
    data () {
      return {
        hasNotifications: false
      }
    }
  }
</script>

<style lang="scss">
  .notification-enter-active,
  .notification-leave-active {
    transition: all .3s ease;
  }
  .notification-enter,
  .notification-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>