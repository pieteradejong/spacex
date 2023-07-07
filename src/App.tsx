import { useState, useEffect } from 'react';
import './App.css';
import LaunchComp from './components/LaunchComp';
import { Launch } from 'types/Launch';

function App() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v5/launches/upcoming");
      const data: Launch[] = await response.json();
      console.log(data);
      setLaunches(data);
    }
    fetchLaunches();
  }, []);

  return (
    <>
      <div>
      <h1>Launches</h1>
      {
        launches.map((launch) => 
          (
            <LaunchComp launch={launch} />
          )
        )
      }
      </div>
    </>
  )
}

export default App
