import './App.css';
import axios from 'axios';


function App() {
  async function fetcher() {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Eindhoven&appid=8d0c5794a5f8d7a4014012f1a986d373`);
    var res = await data.json();
    console.log(res);
  }
  return (
    <div className="App">
      <div className='main'>
        <div className="top">
          <div className="name">
            <p>
              
            </p>
          </div>
          <div className="temp">
            18°F
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
