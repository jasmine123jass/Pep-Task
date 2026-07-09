import { useState } from "react";
import { Link } from "react-router-dom";
import { getWeather } from "../services/weatherApi";
import "../styles/Attendance.css";

function Attendance() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const [studentName, setStudentName] = useState("");
  const [status, setStatus] = useState("Present");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch {
      alert("City not found");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Attendance Saved Successfully!");

    console.log({
      studentName,
      status,
      city,
    });

    setStudentName("");
    setStatus("Present");
  };

  return (
    <div className="attendance-container">

      <Link to="/">⬅ Home</Link>

      <h1>Attendance Sheet</h1>

      <div className="weather-box">

        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={fetchWeather}>
          Get Weather
        </button>

      </div>

      {weather && (

        <div className="weather-card">

          <h2>{weather.name}</h2>

          <p>
            🌡 Temperature :
            {weather.main.temp} °C
          </p>

          <p>
            💧 Humidity :
            {weather.main.humidity}%
          </p>

          <p>
            🌥 Condition :
            {weather.weather[0].main}
          </p>

          <p>
            💨 Wind :
            {weather.wind.speed} m/s
          </p>

        </div>

      )}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) =>
            setStudentName(e.target.value)
          }
          required
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>Present</option>
          <option>Absent</option>
        </select>

        <button type="submit">
          Mark Attendance
        </button>

      </form>

    </div>
  );
}

export default Attendance;