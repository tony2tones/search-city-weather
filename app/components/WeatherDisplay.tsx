import { WeatherResponse } from "../types/types";
import { kelvinToCelsius } from "../utils/temperature";
import { WeatherIcon } from "./ui/WeatherIcons";

export function WeatherDisplay({ weatherResponse }: { weatherResponse: WeatherResponse }) {
    // Handle error case - TypeScript knows this is WeatherError when success is false
    if (!weatherResponse.success) {
        return (
            <div className="flex flex-col justify-center items-center h-full p-4">
                <h1 className="text-xl text-red-500">{weatherResponse.message}</h1>
            </div>
        )
    }

    // From here, TypeScript knows weatherResponse is WeatherInfo (success: true)
    if (weatherResponse.data == null) {
        return (<div>No data found</div>)
    }

    // destructuring the data 
    const {name, main, weather} = weatherResponse.data;

    const icon = weather[0]?.icon || '';
    const description = weather[0]?.description || '';
    const temp = main.temp || 0;

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col p-4 m-4 gap-2">
                <h1 className="text-5xl">{name}</h1>
                <h3 className="text-9xl">{kelvinToCelsius(temp)}</h3>
            <h3 className="text-4xl text-center">{description}</h3>
            </div>
            {icon && (
                <div>
                    <WeatherIcon icon={icon} />
                </div>
            )}
        </div>
    )
}