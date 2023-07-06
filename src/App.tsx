import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v5/launches/upcoming");
      const data = await response.json();
      console.log(data);
      setLaunches(data);
    }
    fetchLaunches();
  }, []);

  return (
    <>
      <p>Launches</p>
      {
        launches.map((launch: any) => 
          (
            <div className="launch" key={launch.id}>
              <p>{launch.name}</p>
              <p>{launch.date_utc}</p>
            </div>
          )
        )
      }
    </>
  )
}

export default App
