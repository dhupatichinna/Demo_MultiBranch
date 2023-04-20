
import rootActions from './actions'
import rootMutation from './mutations'
import rootGetters from './getters'

export default {
    state: {
      EmployeId:null,
      EmployeData:null
    },
    mutations:rootMutation,
    actions:rootActions,
    getters:rootGetters
  };