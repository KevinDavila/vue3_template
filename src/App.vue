<script setup lang="ts">

</script>

<template>
        <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        permanent
      >
        <v-list>
          <v-list-item
            prepend-icon="mdi-account-circle"
            title="Compufax"
            subtitle="API"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-account-multiple" title="Home" value="Home" link href="/"></v-list-item>
          </router-link>
          <router-link to="/cyberpuerta">
            <v-list-item prepend-icon="mdi-folder" title="Cyberpuerta" value="Cyberpuerta" link></v-list-item>
          </router-link>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <router-view></router-view>
      </v-main>
    </v-layout>
   <!--  <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        permanent
      >
        <v-list>
          <v-list-item
            prepend-icon="mdi-account-circle"
            title="Compufax"
            subtitle="API"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/">
            <v-list-item prepend-icon="mdi-account-multiple" title="Home" value="Home" link href="/"></v-list-item>
          </router-link>
          <router-link to="/cyberpuerta">
            <v-list-item prepend-icon="mdi-folder" title="Cyberpuerta" value="Cyberpuerta" link></v-list-item>
          </router-link>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <router-view></router-view>
      </v-main>
    </v-layout> -->
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
