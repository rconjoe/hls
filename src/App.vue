<template>
  <v-app>
    <v-app-bar
      app
      src="https://i.gifer.com/Q8k5.gif"
      prominent
      hide-on-scroll
    >
    <template v-slot:img="{ props }">
    <v-img
        v-bind="props"
        position="15% 100%">
    </v-img>
    </template>
    <v-spacer />
      <div class="d-flex align-center">
        <v-img
          class="poop"
          contain
          max-height=200
          max-width=300
          src="https://cdn.discordapp.com/attachments/433426588860678165/713589588358332426/Joe_Logo.png"
        />
      </div>

      <v-spacer />

    </v-app-bar>

    <v-main>
      <v-container>
        <Stream />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Stream from './components/Stream'
export default {
  name: 'App',

  components: {
    Stream,
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>
.poop {
    padding-top: 18px;
}
</style>
