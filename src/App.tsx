import './App.css';
import AppTitle from './components/AppTitle';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LaunchesPage from './pages/LaunchesPage';
import RocketsPage from './pages/RocketsPage';
import CrewsPage from './pages/CrewsPage';

function App() {
  const queryClient = new QueryClient()
  const pageTitles = ['Launches', 'Capsules', 'Cores', 'Crews', 'Dragons', 'Payloads', 'Rockets', 'Ships'];

  // useEffect(() => {
  //   const fetchLaunches = async () => {
  //     const response = await fetch(URL_LAUNCHES_UPCOMING);
  //     const data: Launch[] = await response.json();
  //     console.log(data);
  //     setLaunches(data);
  //   }
  //   fetchLaunches();
  // }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppTitle />
        <BrowserRouter>
          <Menu titles={pageTitles} />
          <Routes>
              <Route path='/launches' element={<LaunchesPage />} />
              <Route path='/rockets' element={<RocketsPage />} />
              <Route path='/crews' element={<CrewsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
