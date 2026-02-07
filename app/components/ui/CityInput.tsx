
import { ChangeEvent, useState } from "react";

type CityInputProps = {
    onChange: (event: ChangeEvent<HTMLInputElement, Element>) => void;
    city: string;
}

export function CityInput({onChange, city}: CityInputProps) {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="city">Enter a city:</label>
            <input 
                className="p-4 mt-2 border rounded-2xl border-white"
                type="text" 
                id="city" 
                name="city"
                value={city}
                autoComplete="off"
                onChange={onChange}
                placeholder="Enter a City"
                 />
        </div>
    )
}