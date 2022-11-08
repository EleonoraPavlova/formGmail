export default
  {
    namespaced: true,//имена работают только в этом файле
    // в state трансформировать нельзя!
    state() {
      return {
        count: 0
      }
    },
    getters: {
      //можно трансформировать данные, не трансформируя state при этом
      count(state) {
        if (state.count > 150) {
          return 0
        }
        return state.count
      },
      doubleCount(state, getters, rootState, rootGetters) {
        // console.log('rootState', rootState) глобальные состояния из index.js можно вызвать тут
        // console.log('rootGetters', rootGetters)
        return getters.count * 2
      },
    },
    mutations: {
      //setTimeout нельзя сюда
      increment(state) {
        state.count++
      },
      reset(state) {
        state.count = 0
      },
      add(state, payload) {
        state.count += payload.value
      }
    },
    actions: {
      //запрос к серверу
      //асинхронные действия - dispatch использовать 
      incrementAsync(context, payload) {
        setTimeout(() => {
          context.commit('add', payload)
        }, 150)
      }
    },
  }