// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// const state = {
//     count: 0
// }
// export default new Vuex.Store({
//     state
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    baseUrl: 'http://localhost:3000',
    liveStreamId: 1,
}

const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
}

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd: ({ commit, state }) => {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync: ({ commit }) => {
        return new Promise((response, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})