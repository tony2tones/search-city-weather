export function WeatherIcon({ icon }: { icon: string }) {
    return (
        <div className="flex flex-col gap-3 p-4 m-4">
            <img
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                alt="Weather icon"
                className="w-48 h-48"
            />
        </div>
    )
}