import mutations from "../mutations"

export default {
  namespaced: true,
  state() {
    const collection = JSON.parse(localStorage.getItem("saveTask")) || []

    return { collection }
  },
  getters: {
    activeTasksCount(state) {
      const activeTasks = state.collection.filter((item) => item.active && !item.done)
      return activeTasks.length
    },
    doneTasks(state) {
      return state.collection.filter((task) => task.done)

    }
  },
  mutations: {
    //task - {}
    //для изменения состояния //commit
    addTask(state, task) {
      state.collection.unshift({ ...task, active: false, id: Math.floor(Math.random() * 1000) })
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
    toggleActive(state, id) {
      const index = state.collection.findIndex((task) => task.id == id)
      state.collection[index].active = !state.collection[index].active
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
    deleteTask(state, id) {
      const index = state.collection.findIndex((task) => task.id == id)
      state.collection.splice(index, 1)
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
    saveTask(state, payload) {
      //payload - its {}
      const index = state.collection.findIndex((task) => task.id === payload.id)
      state.collection[index] = payload
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
    toggleDone(state, id) {
      const index = state.collection.findIndex((task) => task.id == id)
      state.collection[index].done = !state.collection[index].done
      localStorage.setItem('saveTask', JSON.stringify(state.collection))
    },
  }
}
