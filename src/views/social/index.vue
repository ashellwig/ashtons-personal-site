<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">
              Social Network Profiles
            </div>
          <v-divider></v-divider>
          </v-card-title>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
    <v-container fluid grid-list-xl>
      <v-layout row wrap align-center justify-space-around>
        <v-layout v-bind="binding">
          <v-flex v-for="profile in profiles" :key="profile.name">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`"
                class="mx-auto"
                :href="profile.link"
                target="_blank">
                <div class="image flex">
                  <v-img :src="profile.image" :height="profile.height" contain></v-img>
                </div>
                <v-card-title>
                  <div class="headline" v-html="profile.username"></div>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      profiles: [{
        name: 'Gitlab-Mgr',
        username: '@ashellwig-mgr',
        link: 'https://gitlab.com/in/ashellwig-mgr',
        image: '/images/social-logos/gitlab/logo/logo-extra-whitespace.png',
        height: '128px'
      }, {
        name: 'Github',
        username: '@ashellwig',
        link: 'https://github.com/ashellwig',
        image: 'images/social-logos/github/GitHub-Logos/GitHub_Logo.png',
        height: '128px'
      }, {
        name: 'Twitter',
        username: '@hellwigashton',
        link: 'https://twitter.com/hellwigashton',
        image: '/images/social-logos/twitter/Twitter-Logos/Twitter_Logo_Blue/Twitter_Logo_Blue.png',
        height: '128px'
      }, {
        name: 'LinkedIn',
        username: '/in/ahellwig',
        link: 'https://linkedin.com/in/ahellwig',
        image: '/images/social-logos/linkedin/for-screen/2-Color/Logo-2C-128px-R.png',
        height: '128px'
      }, {
        name: 'Gitlab',
        username: '@ashellwig',
        link: 'https://gitlab.com/in/ashellwig',
        image: '/images/social-logos/gitlab/logo/logo-extra-whitespace.png',
        height: '128px'
      }]
    }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true

      return binding
    }
  }
}
</script>

<style>
.image.flex {
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
