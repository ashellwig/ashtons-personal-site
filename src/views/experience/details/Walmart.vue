<template>
  <v-container>
    <div>
    <work-experience-short
      v-for="detail in details"
      v-bind:key="detail.image"
      v-bind:details="detail"
    ></work-experience-short>
    </div>
    <div class="text-xs-center">
      <h4>Detailed Achievements</h4>
      <br>
      <v-layout fluid grid-list-md>
        <v-flex v-for="achievement in achievements" :key="achievement.content">
          <v-card>
            <v-card-text v-html="achievement.content"></v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
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
        image: '/images/company-logos/walmart.jpg',
        company: 'Walmart Stores Inc.',
        jobTitle: 'Inventory Control Systems Specialist',
        start: 'May 2016',
        end: 'October 2016',
        fullDescription: `
          Use a Raymond Corp Order Picker Truck (5200-5600) to palletize or bin
          orders for independant electrical or construction contractors.
          `
      }],
      achievements: [{
        content: `
          Increased unloaded cases per labor hour  from 150 -> 225
          <strong>which resulted in</strong> a quicker transition to stocking
          the sales floor and increased interaction with customers resulting in
          better customer relations was reached.
          `
      }]
    }
  }
}
</script>
