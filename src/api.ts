const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeatherData(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    
    return {
      current: {
        temp: Math.round(data.current.temp),
        humidity: data.current.humidity,
        windSpeed: Math.round(data.current.wind_speed),
        description: data.current.weather[0].description,
        icon: data.current.weather[0].icon,
      },
      hourly: data.hourly.slice(1, 25).map((hour: any) => ({
        time: new Date(hour.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' }),
        temp: Math.round(hour.temp),
        icon: hour.weather[0].icon,
      })),
      daily: data.daily.slice(1, 6).map((day: any) => ({
        date: new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
        tempMax: Math.round(day.temp.max),
        tempMin: Math.round(day.temp.min),
        icon: day.weather[0].icon,
        description: day.weather[0].description,
      })),
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export async function searchLocation(query: string) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
    );
    const data = await response.json();
    
    return data.map((item: any) => ({
      lat: item.lat,
      lon: item.lon,
      name: `${item.name}, ${item.country}`,
    }));
  } catch (error) {
    console.error('Error searching location:', error);
    throw error;
  }
}