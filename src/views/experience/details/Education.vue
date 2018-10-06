<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">
              Education Details
            </div>
          </v-card-title>
        </v-card>
        <br>
        <!-- <return-to-experience></return-to-experience> -->
        <under-construction></under-construction>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { ReturnToExperience } from '../../../components/ReturnToExperience'
import { UnderConstruction } from '../../../components/UnderConstruction'

export default {
  components: {
    'return-to-experience': ReturnToExperience,
    'under-construction': UnderConstruction
  }
}
</script>
