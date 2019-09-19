import FlowAdaptive from 'flow-adaptive'

export default {
  install(Vue, settings) {
    Vue.prototype.$flowAdaptive = null
    Vue.mixin({
      mounted() {
        Vue.prototype.$flowAdaptive = new FlowAdaptive(settings)
      },
    })
  },
}
