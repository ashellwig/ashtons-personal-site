<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-img
            style="justify-content: center"
            src="/images/company-logos/MGR.png"
          ></v-img>
          <v-card-title primary-title>
            <div class="headline">Mrs. Green&apos;s Remedies</div>
          </v-card-title>
          <v-card-actions style="justify-content: center;">
            <return-to-experience></return-to-experience>
          </v-card-actions>
        </v-card>
        <br>
        <div class="text-xs-center">
          <h2>Fullstack Engineer, Wordpress Developer, Wix Admin</h2>
          <h2>November 2017 &mdash; Now</h2>
          <h3>Description</h3>
          <P>
            Responsible for backend/database management and administration as
            well as the construction and deployment of all web-presence.
          </P>
          <h4>Detailed Achievements</h4>
          <div class="list flex">
            <v-list>
              <v-list-tile
                v-for="item in achievements"
                :key="item.content"
              >
                <v-list-tile-content>
                  <v-list-tile-title v-text="item.content"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </div>
        </div>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import ReturnToExperience from '../../../components/ReturnToExperience'

export default {
  data () {
    return {
      achievements: [{
        content: 'Built full-stack webapplication prototype for cannabis exchange using firebase, Vue.js, and Vuex'
      }, {
        content: 'Managed, developed, and deployed Wordpress version of already-made Wix site for better SEO'
      }, {
        content: 'Converted Wix site to use a database and dynamic routes' }
      ]
    }
  },
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
