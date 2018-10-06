<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <div class="image flex">
            <v-img
              style="justify-content: center"
              src="/images/company-logos/Trimble-logo.jpg"
            ></v-img>
          </div>
          <v-card-title primary-title>
            <div class="headline">Trimble Navigation Ltd.</div>
          </v-card-title>
          <v-card-actions style="justify-content: center;">
            <return-to-experience></return-to-experience>
          </v-card-actions>
        </v-card>
        <br>
        <div class="text-xs-center">
          <h2>Manufacturing Test Technician</h2>
          <h2>May 2017 &mdash; July 2017</h2>
          <h3>Description</h3>
          <p>
            Use proprietary python robot framework software to test electrical
            Internet of Things (IOT) units, clean and label units after
            refurbishment, transport units to designated area for shipment as
            well as other projects as assigned.
          </p>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ReturnToExperience from '../../../components/ReturnToExperience'

export default {
  components: {
    'return-to-experience': ReturnToExperience
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
image.flex {
  display: flex;
  justify-content: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
