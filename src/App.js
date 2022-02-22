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
            18 {weather.main ? <h1>{Math.round((5/9*(weather.main.temp - 32)))}°F</h1> : null}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
