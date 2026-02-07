// Set WeatherInfo types
export type WeatherInfo = {
    data :
    {
        weather: Weather,
        main:
        {
            temp: number,
            feels_like: number,
            temp_min: number,
            temp_max: number,
            pressure: number,
            humidity: number,
            sea_level: number,
            grnd_level: number
        },
        clouds:
        {
            all: number
        },
        dt: number,
        sys:
        {
            type: number,
            id: number,
            country: string,
            sunrise: number,
            sunset: number
        },
        timezone: number,
        id: number,
        name: string,
        cod: number
    },
    status: number,
    success: true,  // Literal type - always true for success
};

export type WeatherError = {
    message: string,
    success: false,
    status: number,
}

export type Weather = [
    {
        id: number,
        main: string,
        description: string,
        icon: string,
    }
]

// Union type
export type WeatherResponse = WeatherInfo | WeatherError;
