<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
      </v-layout>
    </v-slide-y-transition>
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
        title: '421 Hemp / Mrs. Green\'s Remedies',
        path: '/experience/mgr',
        brief: 'Fullstack Developer, CTO',
        image: '/images/company-logos/MGR.png'
      }, {
        title: 'Trimle Navigation Ltd.',
        path: '/experience/trimble',
        brief: 'Manufacturing Test Technician',
        image: '/images/company-logos/Trimble-logo.png'
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
