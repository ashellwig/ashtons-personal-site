<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align center>
        <v-card>
          <v-card-title>
            <div class="headline">
              My Favorite Projects
            </div>
          </v-card-title>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
    <v-container>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto">
                <div class="image flex">
                  <v-img src="images/language-logos/cpp.png" width="250px"/>
                </div>
                <v-card-actions>
                  <v-dialog
                  v-model="cppDialog"
                  width="500">
                    <v-btn slot="activator" color="red lighten-2">
                      See Projects
                    </v-btn>
                    <v-card>
                      <v-card-title class="headline grey lighten-2"
                        primary-title>
                        C++ Projects
                      </v-card-title>
                      <v-card-text>
                        <div class="list flex">
                          <v-list>
                            <v-list-tile
                              two-line
                              v-for="project in cppProjects"
                              :key="project.name"
                            >
                              <v-list-tile-action>
                                <v-btn icon flat :href="project.link" target="_blank">
                                  <v-icon>
                                    {{ project.icon }}
                                  </v-icon>
                                </v-btn>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title v-text="project.name"/>
                                <v-list-tile-sub-title v-text="project.brief"></v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-list>
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </v-card-actions>
              </v-card>
          </v-hover>
        </v-layout>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)

export default {
  data () {
    return {
      cppDialog: false,
      cppProjects: [{
        name: 'generator-cpp-csc',
        brief: 'Generates a C++ Makefile project for CSC160 at FRCC',
        link: 'https://github.com/ashellwig/generator-cpp-csc.git',
        icon: 'fab fa-github'
      }],
      webProjects: [{
        name: '',
        brief: '',
        link: '',
        icon: ''
      }]
    }
  }
}
</script>

<style scoped>
.image.flex {
  display: flex;
  justify-content: center;
  justify-content: space-around
}
</style>
