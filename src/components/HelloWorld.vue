<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>
<template>
  <h1>{{ msg }}</h1>

  <v-car variant="outlined">
    <v-btn type="button" @click="count++">count is {{ count }}</v-btn>
    <v-card-actions>
      <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    </v-card-actions>

  </v-car>
  <v-text-field label="Label"></v-text-field>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
