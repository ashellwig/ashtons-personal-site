<template>
  <v-container fluid>
    <v-snackbar
      v-model="snackbar"
      color="info"
      :timeout="6000"
      vertical
      bottom>
      More Projects available on
      <router-link to="/social">
        Github
      </router-link>
      <v-btn dark flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
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
        <v-layout row wrap justify-space-between>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
              <div class="image flex">
                <v-img src="images/language-logos/cpp.png" width="250px" />
              </div>
              <v-card-actions>
                <v-dialog v-model="cppDialog" width="500">
                  <v-btn slot="activator" color="red lighten-2">
                    See Projects
                  </v-btn>
                  <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                      C++ Projects
                    </v-card-title>
                    <v-card-text>
                      <div class="list flex">
                        <v-list three-line subheader>
                          <v-list-tile v-for="project in cppProjects" :key="project.name">
                            <v-list-tile-action>
                              <v-btn icon flat :href="project.link" target="_blank">
                                <v-icon>
                                  {{ project.icon }}
                                </v-icon>
                              </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title v-text="project.name" />
                              <v-list-tile-sub-title>
                                <strong>Role: </strong> {{ project.role }}
                              </v-list-tile-sub-title>
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
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
              <div class="image flex">
                <v-img src="images/language-logos/nodejs-new-pantone-black.png" width="250px" />
              </div>
              <v-card-actions>
                <v-dialog v-model="nodeDialog" width="500">
                  <v-btn slot="activator" color="red lighten-2">
                    See Projects
                  </v-btn>
                  <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                      Node.js Projects
                    </v-card-title>
                    <v-card-text>
                      <div class="list flex">
                        <v-list three-line subheader>
                          <v-list-tile v-for="project in nodeProjects" :key="project.name">
                            <v-list-tile-action>
                              <v-btn icon flat :href="project.link" target="_blank">
                                <v-icon>
                                  {{ project.icon }}
                                </v-icon>
                              </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title v-html="project.name"></v-list-tile-title>
                              <v-list-tile-sub-title>
                                <strong>Role:</strong>
                                {{ project.role }}
                              </v-list-tile-sub-title>
                              <v-list-tile-sub-title v-html="project.brief"></v-list-tile-sub-title>
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
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
              <div class="image flex">
                <v-img src="images/language-logos/ruby-logo/ruby-logo-R.png" width="250px" />
              </div>
              <v-card-actions>
                <v-dialog v-model="rubyDialog" width="500">
                  <v-btn slot="activator" color="red lighten-2">
                    See Projects
                  </v-btn>
                  <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                      Ruby Projects
                    </v-card-title>
                    <v-card-text>
                      <div class="list flex">
                        <v-list three-line subheader>
                          <v-list-tile v-for="project in rubyProjects" :key="project.name">
                            <v-list-tile-action>
                              <v-btn icon flat :href="project.link" target="_blank">
                                <v-icon>
                                  {{ project.icon }}
                                </v-icon>
                              </v-btn>
                            </v-list-tile-action>
                            <v-list-tile-content>
                              <v-list-tile-title v-html="project.name" />
                              <v-divider></v-divider>
                              <v-list-tile-sub-title>
                                <strong>Role:</strong>
                                {{ project.role }}
                              </v-list-tile-sub-title>
                              <v-list-tile-sub-title v-html="project.brief"></v-list-tile-sub-title>
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
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faGitlab)

export default {
  data () {
    return {
      snackbar: true,
      cppDialog: false,
      nodeDialog: false,
      rubyDialog: false,
      cppProjects: [{
        name: 'generator-cpp-csc',
        role: 'Creator',
        brief: 'Generates a C++ Makefile project for CSC160 at FRCC',
        link: 'https://github.com/ashellwig/generator-cpp-csc.git',
        icon: 'fab fa-github'
      }],
      nodeProjects: [{
        name: 'generator-elm-mdl',
        role: 'Creator',
        brief: 'Scaffolds a project in pure elm with material design',
        link: 'https://github.com/ashellwig/generator-elm-mdl.git',
        icon: 'fab fa-github'
      }, {
        name: 'LaTeX-Workshop',
        role: 'Contributer',
        brief: 'Suite of tools to compile latex documents within Visual Studio Code',
        link: 'https://github.com/James-Yu/LaTeX-Workshop.git',
        icon: 'fab fa-github'
      }, {
        name: 'CannExchange',
        role: 'Creator',
        brief: 'An asset-exchange type website dedicated to professionals in the Hemp industry',
        link: 'https://gitlab.com/ashellwig-mgr/cannex.git',
        icon: 'fab fa-gitlab'
      }],
      rubyProjects: [{
        name: 'jekyll',
        role: 'Contributer',
        brief: 'A blog-aware static site generator written in Ruby',
        link: 'https://github.com/jekyll/jekyll.git',
        icon: 'fab fa-github'
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
.list.flex {
  display: flex;
  justify-content: center;
  justify-content: space-around;
}
</style>
