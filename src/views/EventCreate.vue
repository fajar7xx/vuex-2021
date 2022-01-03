<template>
  <div>
    <!-- <h1>Create an Event, {{userName}}</h1>
    <p>This event was create by {{userName}}</p> -->
    <!-- <h1>Create an Event, {{user.name}}</h1>
    <p>This event was created by {{user.id}}</p>
    <p>There are {{catLength}} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">{{category}}</li>
    </ul> -->
    <!-- <p>{{getEvent(1)}}</p> -->
    <!-- <p>{{getEventById(3)}}</p> -->
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label for="category">Select a category</label>
      <select v-model="event.category" id="category">
        <option v-for="cat in categories" :key="cat">{{cat}}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label for="title">Title</label>
        <input type="text" v-model="event.title" id="title" placeholder="Add an event" />
      </div>

      <div class="field">
        <label for="description">Description</label>
        <input type="text" v-model="event.description" id="description" placeholder="Add a description" />
      </div>

      <div class="field">
        <label for="location">
          <input type="text" v-model="event.location" id="location" placeholder="Add a location" />
        </label>
      </div>

      <h3>When is your event?</h3>
      <div class="field">
        <label for="date">Date</label>
        <datepicker v-model="event.date" placeholder="select a date" id="date" />
      </div>

      <div class="field">
        <label for="time">Select a time</label>
        <select id="time" v-model="event.time">
          <option v-for="time in times" :key="time">{{time}}</option>
        </select>
      </div>

      <input type="submit" value="Submit" class="button -fill-gradient">
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
// import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          // redirect to route
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          // clear data after POST completed
          this.event = this.createFreshEventObject
        })
        .catch(() => {
          console.log('there was a problem creating your event')
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id,
        user,
        category: '',
        organize: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendances: []
      }
    }
  }
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name
  //   },
  //   userId() {
  //     return this.$store.state.user.id
  //   }
  // }
  // di ubah menggunakan vuex
  // computed: mapState({
  //   // userName: state => state.user.name,
  //   // userId: state => state.user.id,
  //   // categories: state => state.categories
  //   //karena top level state ini cara ringkas nya
  //   categories: 'categories',
  //   user: 'user'
  // })
  //alternatifnya
  // computed: {
  //   catLength() {
  //     return this.$store.getters.catLength
  //   },
  //   // getEvent() {
  //   //   return this.$store.getters.getEventById
  //   // },
  //   // dibua versi vuex nya
  //   ...mapGetters(['getEventById']),
  //   ...mapState(['user', 'categories'])
  // }
}
</script>
<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
