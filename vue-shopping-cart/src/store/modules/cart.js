import * as types from  '../mutation-types'
const state = {
    added: []
}
const getters = {
     cartProducts: (state, getters, rootState) => {
         return state.added.map(({ id, quantity }) =>{
             const product = rootState.products.all.find(product => product.id === id)
             return{
                 title: product.title,
                 price: product.price,
                 quantity
             }
         })
     },
     cartTotalPrice: (state, getters) => {
         return getters.cartProducts.reduce((total, product) => {
             return total + product.price * product.quantity
         },0)
     }
}
const mutations = {
    [types.ADD_TO_CART](state, {id}){
        const record = state.added.find(product => product.id === id)
        if(!record){
            state.added.push({
                id,
                quantity: 1
            })
        }else {
            record.quantity++
        }
    }
}
const actions = {

}
export default {
   state,
   getters,
   mutations,
   actions 
}