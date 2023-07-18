<template>
<div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
    <p class="text-3xl font-bold">Cyberpuerta</p>
    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
        <v-text-field label="SKU"></v-text-field>
        <div>{{ response }}</div>
        <v-btn type="button"  @click="getProduct()" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Check availability</v-btn>     
    </div>
    
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
    setup(){
        let response = ref('')
        const  getProduct = async () => {

            const res =  await axios.get('http://localhost:3000/api/products/MS-W1103A/pna',{
            headers:{
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY4OTI3MjkzNH0.HnH1ECY7KQ8uuicF5UkAM9HlK9huIdah3QKsEUl5abo'
            }
        })

        console.log(res.data)
        response.value = res.data
        }
       
        return{
            response,
            getProduct
        }
    }
})
</script>