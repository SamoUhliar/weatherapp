<template>
    <div>
        <current-wheather></current-wheather>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import CurrentWheather from './current-weather.vue'

export default defineComponent({
    components:{
        CurrentWheather,
    },
    setup () {
        
        return{}
    }
})
</script>

<style>

</style>