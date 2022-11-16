import mutations from "../mutations"

export default {
  state() {
    const collection = JSON.parse(localStorage.getItem("saveTask")) || []

    return { collection }
  },
  mutations: {
    addTask(state, task) {
      state.collection.push(task)
      localStorage.setItem('saveTask', JSON.stringify(state.collection))


    }
  }
}