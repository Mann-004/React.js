

export default function WeatherCard({ weather}) {
  const { location, current } = weather;



  return (
    <div className="bg-white text-black rounded-lg p-6 w-96 shadow-lg text-center">
      <h2 className="text-xl font-semibold">{location.name}, {location.country}</h2>
      <p className="text-sm text-gray-600 mb-2">{location.localtime}</p>
      <img
        src={`https:${current.condition.icon}`}
        alt="icon"
        className="mx-auto"
      />
      <p className="text-4xl font-bold">{current.temp_c}°C</p>
      <p className="capitalize">{current.condition.text}</p>
      <div className="flex justify-between text-sm mt-4">
        <p>Humidity: {current.humidity}%</p>
        <p>Wind: {current.wind_kph} kph</p>
      </div>
     
    </div>
  );
}
