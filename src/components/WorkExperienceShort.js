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
                contain
                height="150px"
                style="justify-content: center;"
                :src="details.image"
              ></v-img>
              <v-card-title primary-title>
                <div class="headline">{{ details.company }}</div>
              </v-card-title>
              <v-card-actions style="justify-content: center;">
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
          </v-layout>
        </v-slide-y-transition>
      </div>
    </v-container>
    `
})

export default WorkExperienceShort
