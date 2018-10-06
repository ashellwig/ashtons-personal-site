<template>
  <v-container>
    <div>
    <work-experience-short
      v-for="detail in details"
      v-bind:key="detail.image"
      v-bind:details="detail"
    ></work-experience-short>
    </div>
  </v-container>
</template>

<script>
import { WorkExperienceShort } from '../../../components/WorkExperienceShort'

export default {
  components: {
    'work-experience-short': WorkExperienceShort
  },
  data () {
    return {
      details: [{
        image: '/images/company-logos/rexel.png',
        company: 'Rexel Holdings U.S.A.',
        jobTitle: 'Package Handler',
        start: 'May 2016',
        end: 'October 2016',
        fullDescription: `
          Use a Raymond Corp Order Picker Truck (5200-5600) to palletize or bin
          orders for independant electrical or construction contractors.
          `
      }]
    }
  }
}
</script>
