<template>
<!-- // create notificationbar for every notification in the state -->
  <div class="notification-container">
      <!-- :notification="notification" -->
      <!-- :props="object" -->
      <NotificationBar 
        v-for="notification in notifications" 
        :key="notification.id" 
        :notification="notification"/>
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar'
import { mapState } from 'vuex'
export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
}
</style>
