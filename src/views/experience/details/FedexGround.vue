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
        image: '/images/company-logos/FedExGround.svg.png',
        company: 'FedEx Ground',
        jobTitle: 'Package Handler',
        start: 'March 2017',
        end: 'May 2017',
        fullDescription: `
          Temporary M-F Daytime Sort shift (1:00pm-finish). Load and unload
          trailers and sort packages for delivery. Hazard Communications
          Standard trained and certified.
          `
      }]
    }
  }
}
</script>
