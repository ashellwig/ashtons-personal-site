<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title>
              <div class="headline">International Business Machines</div>
            </v-card-title>
          <v-card-actions style="justify-content: center">
            <return-to-experience/>
          </v-card-actions>
        </v-card>
        <v-card>
          <v-img src="/images/company-logos/IBM_logo.svg"></v-img>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ReturnToExperience from '../../../components/ReturnToExperience'

export default {
  components: { 'return-to-experience': ReturnToExperience }
}
</script>

<style scoped>
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
