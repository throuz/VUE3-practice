import { createStore } from "vuex";
import * as types from './mutations_type.js'

// Create a new store instance.
const store = createStore({
    state: {
        count: 0,
        info: [],
        account: 'weijfgwioejfiowelfjiweo'
    },
    mutations: {
        [types.INCREASE](state) {
            state.count += 1;
        },
        [types.DECREASE](state) {
            state.count -= 1;
        }
    },
    actions: {
        actionIncrease({ commit }) {
            commit(types.INCREASE);
        },
        actionDecrease({ commit }) {
            commit(types.DECREASE);
        }
    },
    getters: {
        getCount(state) { return state.count }
    }
})

export default store;