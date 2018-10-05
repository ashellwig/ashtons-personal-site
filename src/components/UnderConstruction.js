import Vue from '../../node_modules/vue/dist/vue'

export const UnderConstruction =
  Vue.component('UnderConstruction', {
    data () {
      return {
        alert: true
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    },
    template: `
      <div class="alert-banner">
        <v-alert
          v-model="alert"
          :value="true"
          type="error"
          dismissable
          icon="fas fa-exclamation-triangle"
        >
          This page is still under construction.
        </v-alert>
        <div class="text-xs-center">
          <v-btn
            color="primary"
            dark
            @click="goBack"
          >
            Go Back
          </v-btn>
        </div>
      </div>
      `
  })

export default UnderConstruction
