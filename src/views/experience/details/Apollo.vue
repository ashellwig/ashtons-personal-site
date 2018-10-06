<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-img
            style="justify-content: center;"
            src="/images/company-logos/apollo.png"
          ></v-img>
          <v-card-title primary-title>
            <div class="headline">
              Apollo Digital Asset Exchange
            </div>
          </v-card-title>
          <v-card-actions style="justify-content: center;">
            <return-to-experience></return-to-experience>
          </v-card-actions>
        </v-card>
        <br>
        <div class="text-xs-center">
          <h2>Backend Engineer Intern</h2>
          <h2>August 2018 &mdash; Present</h2>
          <h3>Description</h3>
          <p>
            Software development engineering intern for Node.js backend. Use
            of modules and ES6 async functions to create a centralized digital
            asset exchange. Modules used include Chart.js, CCXT, ta-lib.
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
