import { useEffect, useState } from "react";
import { getCurrentWeatherbycoords,getWeatherForecast,getCurrentWeather } from "../Services/WeatherApi";


export const useWeather=()=>{
    const[currentWeather,setCurrentWeather]=useState(null);
    const[forecast,setForecast]=useState(null);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    const[units,setUnits]=useState('C');
    const fetchWeatherByCity=async(city)=>{
        setLoading(true);
        setError(null);
        try{
const [weatherData,forecastData]=await Promise.all([
    getCurrentWeather(city),
    getWeatherForecast(city)
]);
setCurrentWeather(weatherData);
setForecast(forecastData);
        }
        catch(err){
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');  

        }
        finally{
            setLoading(false)
        }
    }

const fetchWeatherByLocation=async()=>{
    if(!navigator.geolocation){
        setError('Geolocation is not supported by your browser');
        return;
    }
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(async(position)=>{
        try{
const{latitude,longitude}=position.coords;
const weatherData=await getCurrentWeatherbycoords(latitude,longitude);
setCurrentWeather(weatherData);

//fetch forecast by current location
const forecastData=await getWeatherForecast(weatherData.name);
setForecast(forecastData);
        }
        catch(err){
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');  

        }
        finally{
            setLoading(false)
        }
    

    },(error)=>{
        setError('Unable to retrieve your location');
        setLoading(false);
    }

)


}
const toggleUnit=()=>{
    setUnits((prevUnit)=>(prevUnit==='C' ? 'F' : 'C'));
}
useEffect(()=>{
    fetchWeatherByCity('New York');
},[]);
return({
    currentWeather,
    forecast,
    loading,
    error,
    units,
    fetchWeatherByCity,
    fetchWeatherByLocation,
    toggleUnit

})
}
