/**
 * Vuex actions
 */

export default {
  saveUserName (context, userName) {
    context.commit('saveUserName', userName)
  },

  saveCartCount ({ commit }, count) {
    commit('saveCartCount', count)
  }
}