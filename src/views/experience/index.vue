<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Work Experience</div>
          </v-card-title>
        </v-card>
      </v-layout>
      </v-slide-y-transition>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="card in cardData" :key="card.title">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
              >
                <div class="image flex">
                  <v-img :src="card.image" width="150px" class="text-xs-center"/>
                </div>
                <v-divider/>
                <v-card-title primary-title>
                  <div>
                    <div class="headline" v-text="card.title"></div>
                    <div v-text="card.brief"></div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn dark color="blue" :to="card.path">Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      cardData: [{
        title: 'IBM',
        path: '/experience/ibm',
        brief: 'GTS Solutions, Del, & Transf.',
        image: '/images/company-logos/IBM_logo.svg'
      }, {
        title: '421 Hemp',
        path: '/experience/mgr',
        brief: 'Fullstack Developer, CTO',
        image: '/images/company-logos/MGR.png'
      }, {
        title: 'Trimle Navigation Ltd.',
        path: '/experience/trimble',
        brief: 'Manufacturing Test Technician',
        image: '/images/company-logos/Trimble-logo.jpg'
      }, {
        title: 'Apollo DAE',
        path: '/experience/apollo',
        brief: 'Backend Development Intern',
        image: '/images/company-logos/apollo.png'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image.flex {
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
