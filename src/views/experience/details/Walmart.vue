<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <under-construction></under-construction>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import UnderConstruction from '../../../components/UnderConstruction'

export default {
  'under-construction': UnderConstruction
}
</script>
