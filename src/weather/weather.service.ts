import { Geolocation } from '@capacitor/geolocation'
import { ref } from 'vue'


const weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=f7d5accca3d6e830f0676cc25a612464&units=metric'


// ref when data change vue re-rend all component using const wheater
const weather = ref()

export function useWeather(){
    return{
        weather,
        fetchWeather,
    }
}

async function fetchWeather() {
    const { coords } = await Geolocation.getCurrentPosition();
    const response = await fetch(weatherUrl+'&lat='+coords.latitude+'&lon='+coords.longitude+'&units=standard')
    weather.value = await response.json()
}