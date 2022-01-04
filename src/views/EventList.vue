<template>
  <div>
    <h1>Events for {{user.user .name}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 }}" rel="prev">Previous</router-link> | 
    </template>
    <router-link :to="{ name: 'event-list', query: { page: page +  1 }}" rel="next">Next</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
// import EventService from '@/services/EventService.js'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  // data() {
  //   return {
  //     events: []
  //   }
  // }, //dihapus karena pakai vuex state
  created() {
    // EventService.getEvents()
    //   .then(response => {
    //     this.events = response.data
    //   })
    //   .catch(error => {
    //     console.log('There was an error:', error.response)
    //   }) //move to vuex
    // event/fetchEvents => namespace/method
    this.$store.dispatch('event/fetchEvents', {
      perPage: 2,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      // this.modulesName.stateName
      return this.event.eventsTotal > this.page * this.perPage
    },
    // ...mapState(['events', 'eventsTotal', 'user']) 
    // ubah mapState agar referensi ke module name
    ...mapState(['event', 'user'])
  }
}
</script>
