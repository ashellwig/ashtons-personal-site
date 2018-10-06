import Vue from 'vue'
import ReturnToExperience from './ReturnToExperience'

export const WorkExperienceShort = Vue.component('WorkExperienceShort', {
  components: {
    'return-to-experience': ReturnToExperience
  },
  props: [
    'details'
  ],
  template: `
    <v-container fluid>
      <div class="work-experience-short">
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <v-card>
              <v-img
                style="justify-content: center;"
                :src="details.image"
              ></v-img>
              <v-card-title primary-title>
                <div class="headline">{{ details.company }}</div>
              </v-card-title>
              <v-card-actions>
                <return-to-experience></return-to-experience>
              </v-card-actions>
            </v-card>
            <br>
            <div class="text-xs-center">
              <h2>{{ details.jobTitle }}</h2>
              <h2>{{ details.start }} &mdash; {{ details.end }}</h2>
              <h3>Description</h3>
              <p>{{ details.fullDescription }}</p>
            </div>
          </v-slide-y-transition>
        </v-layout column>
      </div>
    </v-container>
    `
})

export default WorkExperienceShort
