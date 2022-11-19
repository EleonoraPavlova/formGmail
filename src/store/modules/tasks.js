import mutations from "../mutations"

export default {
  namespaced: true,
  state() {
    const collection = JSON.parse(localStorage.getItem("saveTask")) || []
    return { collection }
  },
  getters: {
    activeTasksCount(state) {
      const activeTasks = state.collection.filter((item) => item.active)
      return activeTasks.length
    }
  },
  mutations: {
    //task - {}
    addTask(state, task) {
      state.collection.push({ ...task, active: false })
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
    toggleActive(state, index) {
      state.collection[index].active = !state.collection[index].active
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
    deleteTask(state, index) {
      state.collection.splice(index, 1)
      localStorage.setItem('saveTask', JSON.stringify(state.collection))

    },
    saveTask(state, payload) {
      //payload - its {}
      state.collection[payload.index] = payload.value
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },

  }
}
