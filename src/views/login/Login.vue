<template>
 
<div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
    <p class="text-3xl font-bold">Cyberpuerta</p>
    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <form @submit.prevent="login"> 
      <v-text-field label="Usuario" v-model="username"></v-text-field>
        <v-text-field label="Contraseña" type="password" v-model="password"></v-text-field>
        <v-btn type="submit" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</v-btn>
      </form> 
      </div>
</div>

  </template>
  <style>
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const username = ref('')
    const password = ref('')

    const router = useRouter()

    const login = () => {
      console.log(username.value)
      // Aquí puedes implementar la lógica de autenticación
      // Comprueba si las credenciales son válidas y guarda el estado de autenticación
      console.log(router)
      // Redirige al usuario a la página de dashboard después del inicio de sesión exitoso
      router.push('/dashboard')
    }

    return {
      username,
      password,
      login
    }
  }
})
</script>