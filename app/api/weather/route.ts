import { NextRequest, NextResponse } from "next/server";

/*
    * Using Nextjs API routes to create request on the server
    * to avoid sharing sensitve information
    * such as API key and responses
* */

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = process.env.weatherAPI;

export async function GET(request:NextRequest) {
    // extract search params city
   const city = request.nextUrl.searchParams.get('city');

   if(!city) {
    return NextResponse.json({success: false, message: 'Please enter a valid city', status: 400})
   }

   try{
       const data = await fetch(`${baseUrl}${city}&appId=${apiKey}`);
       const result = await data.json();

       // Check if OpenWeatherMap returned an error
       if (result.cod !== 200) {
           return NextResponse.json({
               success: false,
               message: result.message || 'City not found',
               status: result.cod
           });
       }

       return NextResponse.json({ data: result, success: true, status: 200 })

   } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong';
    return NextResponse.json({success: false, message, status: 500})
   }
}