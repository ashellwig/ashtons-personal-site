import Vue from '../../node_modules/vue/dist/vue'

export const ReturnToExperience =
  Vue.component('ReturnToExperience', {
    // eslint-disable-next-line
    template: '<v-hover><v-btn slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" dark color="blue" to="/experience">Return To Experience</v-btn></v-hover>'
  })

export default ReturnToExperience
