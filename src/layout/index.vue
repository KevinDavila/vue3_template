<template>

    <Sidebar>
        
    </Sidebar>
   
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import Sidebar from './components/Sidebar.vue';
export default defineComponent({
    name: 'Layout',   
    components: {
    Sidebar,
  },
})
</script>