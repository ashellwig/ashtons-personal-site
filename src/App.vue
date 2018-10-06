<template>
  <v-app>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      :fixed="$vuetify.breakpoint.mdAndUp"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span>&copy; Ashton Hellwig 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      items: [{
        icon: 'fas fa-home',
        title: 'Home',
        path: '/'
      }, {
        icon: 'fas fa-briefcase',
        title: 'Work Experience',
        path: '/experience'
      }, {
        icon: 'fas fa-share',
        title: 'Social Networks',
        path: '/social'
      }, {
        icon: 'fas fa-file',
        title: 'Portfolio',
        path: '/portfolio'
      }],
      title: 'Ashton Hellwig\'s Personal Site'
    }
  }
}
</script>
