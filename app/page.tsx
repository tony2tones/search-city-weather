'use client';

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "./components/ui/Card";
import { CityInput } from "./components/ui/CityInput";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Button } from "./components/ui/Button";
import { WeatherDisplaySkeleton } from "./components/ui/SkeletonLoader";

export default function Home() {
  const [cityInput, setCityInput] = useState<string>('');
  const [searchCity, setSearchCity] = useState<string>('');

  // useQuery handles the fetching, loading state (isFetching) and caching automatically
  const { data: weather, isFetching } = useQuery({
    // the queryKey uniquely identifies the searchCity query for caching
    queryKey: ['weather', searchCity],
    queryFn: () => fetch(`/api/weather?city=${searchCity}`).then(res => res.json()),
    enabled: !!searchCity, // Only fetch when searchCity has a value
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCityInput(event.target.value);
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchCity(cityInput); // This triggers the query
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full min-h-40 max-w-3xl flex-col items-center px-16 bg-white dark:bg-black">
        <form onSubmit={handleSubmit}>
          <Card title="City weather search">
            <CityInput onChange={handleInputChange} city={cityInput} />
            <div className="text-center">
              <Button name='Check weather' isLoading={isFetching} disabled={!cityInput.length} /> 
            </div>
          </Card>
        </form>
        <div className="min-h-72">
          {isFetching && <WeatherDisplaySkeleton />}
          {weather && !isFetching && <WeatherDisplay weatherResponse={weather} />}
        </div>
      </main>
    </div>
  );
}