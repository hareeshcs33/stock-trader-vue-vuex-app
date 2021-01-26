import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        products: [
            {name: 'Mango', price: 50},
            {name: 'Banana', price: 40},
            {name: 'Chikku', price: 70},
            {name: 'Orange', price: 80},
            {name: 'Lemon', price: 20}
        ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice(state, payload) {
            state.products.forEach(product => {
                product.price -= payload;
            });
        },
        increment (state) {
            state.count++
        },
        increase (state, payload) {
            state.count = state.count + payload;
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000);
        }
    }
})