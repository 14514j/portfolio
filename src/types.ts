export interface WeatherData {
  current: {
    temp: number;
    humidity: number;
    windSpeed: number;
    description: string;
    icon: string;
  };
  hourly: Array<{
    time: string;
    temp: number;
    icon: string;
  }>;
  daily: Array<{
    date: string;
    tempMax: number;
    tempMin: number;
    icon: string;
    description: string;
  }>;
}

export interface Location {
  lat: number;
  lon: number;
  name: string;
}