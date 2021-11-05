<template>
    <div class="holder" v-if="weather">
        <ion-card class="card">
            <ion-img :src="'http://openweathermap.org/img/wn/'+ weather.current.weather[0].icon+'@2x.png'"></ion-img>
            <ion-title>{{weather.timezone}}</ion-title>
            <ion-title>{{weather.current.temp+' °C'}}</ion-title>
            <ion-title>{{weather.current.feels_like+' °C'}}</ion-title>
            <ion-title >{{weather.current.weather[0].main}}</ion-title>
            <ion-title >{{weather.current.weather[0].description}}</ion-title>
        </ion-card>
    </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted ,watch} from 'vue'
import { useWeather } from './weather.service'

export default defineComponent({
    setup () {
        const {weather, fetchWeather} = useWeather()

        onMounted(fetchWeather)
        return {
            weather,
        }
    }
})
</script>

<style scoped>
    .holder{
        padding-top: 30px;
    }
    ion-img{
        height: 100px;
    }

</style>