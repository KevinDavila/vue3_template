<template>
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <p class="text-3xl font-bold">Accounts</p>
        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <v-text-field label="eshop name" v-model="eshopName"></v-text-field>
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
            let eshopName = ref('')
            let userName = ref({
                name: eshopName
            })
            const headers = {
          // Tus encabezados aquí, por ejemplo:
            Authorization: 'Bearer '+import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json',
            };
            const  getProduct = async () => {
            try{
                console.log(userName.value)
                const res =  await axios.post(import.meta.env.VITE_API_URL+'RSdk2GDxa7/user/getUsers',userName.value, {headers})
            console.log(res)
            response.value = res.data
            
            }catch(e){
                let error = e
                console.log(e)
                response.value = 'Request failed with status code '+error.response.status+' : '+error.response.statusText  
            }              
        }
        
            return{
                response,
                eshopName,
                getProduct
            }
        }
    })
    </script>