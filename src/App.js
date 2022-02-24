import React, {useState} from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  async function fetcher() {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=8d0c5794a5f8d7a4014012f1a986d373`);
    var res = await data.json();
    const result = setWeather(res)
  }

  return (
    <div className="App">
      <div className='main'>
        <input value={query} onChange= {event => setQuery(event.target.value)} onKeyPress = {fetcher} type = "text"/>
        <div className="top">
          <div className="name">
            <p>
              {weather.name}
            </p>
          </div>
          <div className="temp">
            {weather.main ? <h1>{Math.round((weather.main.temp)*(5/9))}°F</h1> : null}
          </div>
        </div>
        <div className="down">
          <div className="wind">
            {weather.wind ? <p>{weather.wind.speed} MPH</p> : null}
          </div>
          <div className="humidity">
            {weather.main?<p>{weather.main.humidity}</p> : null}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;