import Vue from 'vue'
import Vuex from 'vuex'
// import EventService from '@/services/EventService.js'

// import all modules
import * as user from '@/store/modules/user' //or ./modules/user
import * as event from '@/store/modules/event'
import * as notification from '@/store/modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  },
  state: {
    categories: [
      'sustainability',
      'education',
      'food',
      'community',
      'nature',
      'animal welfare',
      'housing'
    ],
    // todos: [
    //   { id: 1, text: '....', done: true },
    //   { id: 2, text: '....', done: false },
    //   { id: 3, text: '....', done: true },
    //   { id: 4, text: '....', done: false }
    // ],
  //   events: [],
  //   event: {}
  },
  // mutations: {
  //   ADD_EVENT(state, event) {
  //     state.events.push(event)
  //   },
  //   SET_EVENTS(state, events) {
  //     state.events = events
  //   },
  //   SET_EVENT_TOTAL(state, eventsTotal) {
  //     state.eventsTotal = eventsTotal
  //   },
  //   SET_EVENT(state, event) {
  //     state.event = event
  //   }
  // },
  // actions: {
  //   createEvent({ commit }, event) {
  //     // EventService.postEvent(event)
  //     return EventService.postEvent(event).then(() => {
  //       commit('ADD_EVENT', event)
  //     })
  //   },
  //   fetchEvents({ commit }, { perPage, page }) {
  //     EventService.getEvents(perPage, page)
  //       .then(response => {
  //         console.log('Total events are ' + response.headers['x-total-count'])
  //         commit('SET_EVENTS', response.data)
  //       })
  //       .catch(error => {
  //         console.log('There was an error:', error.response)
  //       })
  //   },
  //   fetchEvent({ commit, getters }, id) {
  //     let event = getters.getEventById(id)

  //     if (event) {
  //       commit('SET_EVENT', event)
  //     } else {
  //       EventService.getEvent(id)
  //         .then(response => {
  //           commit('SET_EVENT', response.data)
  //         })
  //         .catch(error => {
  //           console.log('There was an error:', error.response)
  //         })
  //     }
  //   }
  // },
  // getters: {
  //   catLength: state => {
  //     return state.categories.length
  //   },
  //   doneTodos: state => {
  //     return state.todos.filter(todo => todo.done)
  //   },
  //   // activeTodosCount: (state, getters) => {
  //   //   return state.todos.length - getters.doneTodos.length
  //   // },
  //   // alternatif
  //   activeTodosCount: state => {
  //     return state.todos.filter(todo => !todo.done).length
  //   },
  //   // dynamic getters
  //   getEventById: state => id => {
  //     return state.events.find(event => event.id === id)
  //   }
  // }
  // move to modules
})
