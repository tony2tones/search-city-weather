export function WeatherDisplaySkeleton() {
    return (
        <div className="flex gap-2 ">
            <div className="flex flex-col p-4 m-4 gap-3 animate-pulse">
                <div className="h-8 w-32 bg-gray-300 rounded" />
                <div className="h-6 w-20 bg-gray-300 rounded" />
                <div className="h-6 w-40 bg-gray-300 rounded" />
            </div>
            <div className="p-4 m-4 gap-3 animate-pulse">
                <div className="w-48 h-48 bg-gray-300 rounded" />
            </div>

        </div>
    );
}