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
                
            >
            <v-spacer></v-spacer>
            </v-list-item>
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
            <v-app-bar density="compact">
            <template v-slot:prepend>
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            </template>
            <v-app-bar-title>Dashboard</v-app-bar-title>
                <v-menu>
                <template v-slot:activator="{props}">
                <v-btn icon="mdi-dots-vertical" v-bind="props">
                </v-btn>
                </template>
                <v-list>
                <v-list-item @click="handleClick(item.value)" v-for="(item, i) in items" :key="i" :value="item.value">
                    <v-list-item-action>{{ item.title }}</v-list-item-action>
                </v-list-item>
                </v-list>
                </v-menu>
    
            </v-app-bar>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const items = [
    { title: 'Log Out', icon:'mdi-logout-variant', value:"logout"},
    ]
const handleClick = (value: string)=>{
    if(value == 'logout'){
        localStorage.setItem('userLoggedIn', 'false')
        router.push('/')
    }
    console.log(value)
    }
</script>