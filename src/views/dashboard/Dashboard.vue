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
</template>