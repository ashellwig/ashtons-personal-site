<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Work Experience</div>
          </v-card-title>
        </v-card>
        <br>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Technical Experience</div>
          </v-card-title>
        </v-card>
      </v-layout>
      </v-slide-y-transition>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="data in technicalExperience" :key="data.title">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
              >
                <div class="image flex">
                  <v-img :src="data.image" width="150px" class="text-xs-center"/>
                </div>
                <v-divider/>
                <v-card-title primary-title>
                  <div>
                    <div class="headline" v-text="data.title"></div>
                    <div v-text="data.brief"></div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn dark color="blue" :to="data.path">Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <v-card>
              <v-card-title primary-title>
                <div class="headline">Logistics &amp; Operations Experience</div>
              </v-card-title>
            </v-card>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="data in logisticsExperience" :key="data.title">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
              >
                <div class="image flex">
                  <v-img :src="data.image" contain height="150px" class="text-xs-center"/>
                </div>
                <v-divider/>
                <v-card-title primary-title>
                  <div>
                    <div class="headline" v-text="data.title"></div>
                    <div v-text="data.brief"></div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn dark color="blue" :to="data.path">Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <v-card>
              <v-card-title primary-title>
                <div class="headline">Education Details</div>
              </v-card-title>
            </v-card>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      technicalExperience: [{
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
      }],
      logisticsExperience: [{
        title: 'FedEx Ground',
        path: '/experience/fedex',
        brief: 'Package Handler',
        image: '/images/company-logos/FedExGround.svg.png'
      }, {
        title: 'Rexel Holdings U.S.A.',
        path: '/experience/rexel',
        brief: 'Order Selector, Forklift Operator',
        image: '/images/company-logos/rexel.png'
      }, {
        title: 'Walmart Stores Inc.',
        path: '/experience/walmart',
        brief: 'Inventory Control Systems Specialist',
        image: '/images/company-logos/walmart.jpg'
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
