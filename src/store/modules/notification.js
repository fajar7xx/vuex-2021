export const namespaced = true

export const state = {
  notifications: []
}

let nextId = 1
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      // using object distraction
      ...notification,
      id: nextId++
    })
  },
  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export const actions = {
  add({ commit }, notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
