<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <div class="image flex">
            <v-img
              width="100px"
              style="justify-content: center"
              src="/images/company-logos/IBM_logo.svg"
            />
          </div>
          <v-card-title primary-title>
              <div class="headline">International Business Machines</div>
            </v-card-title>
          <v-card-actions style="justify-content: center">
            <return-to-experience/>
          </v-card-actions>
        </v-card>
        <br>
        <div class="text-xs-center">
          <h2>Global Technology Services: Solutions, Del, &amp; Transf.</h2>
          <h2>July 2017 &mdash; November 2017</h2>
          <h3>Description</h3>
          <h4>State Street Investment Bank</h4>
          <h5>Centralized Technical Services</h5>
          <p>
            Level 1.5 CTS Agent, administrator rights to remote into State
            Street virtual desktops and physical machines after initial
            troubleshooting as failed on other teams. Mainly services the U.S.
            and India. Support Active Directory and configuration of multiple
            server types.
          </p>
          <h4>Anthem Healthcare</h4>
          <h5>Enterprise IT Service Desk</h5>
          <p>
            Receive incoming calls from employees for issues ranging from
            mapping of drives to password resets.
          </p>
          <h4>Responsibilities</h4>
          <div class="list flex">
            <v-list>
              <v-list-tile
                v-for="item in resp"
                :key="item.content"
              >
              <v-list-tile-content>
                <v-list-tile-title v-text="item.content"></v-list-tile-title>
              </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </div>
          <h4>Detailed Achievements</h4>
          <div class="list flex">
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>
                    Master the Mainframe pt 2 Competetor
                  </v-list-tile-title>
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
      resp: [{
        content: 'Configure Windows 7, 10, Enterprise 2012-16, RHEL 7, and z/OS'
      }, {
        content: 'Develop troubleshooting and process documentation (Linux)'
      }, {
        content: 'Deploy and maintain Windows 10 and Enterprise Server 2012-16'
      }, {
        content: 'Deploy Microsoft Office 365'
      }, {
        content: 'Troubleshoot and repair computers'
      }]
    }
  },
  components: { 'return-to-experience': ReturnToExperience }
}
</script>

<style scoped>
.image.flex {
  display: flex;
  justify-content: center;
}
.list.flex {
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
