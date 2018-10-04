<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">
            Welcome to Ashton's Personal Website
          </div>
        <v-divider></v-divider>
        </v-card-title>
        <div class="image flex">
          <v-img
            style="justify-content: center"
            width="450px"
            src="/images/dogtraining.jpg"
          />
        </div>
      </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
image.flex {
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
