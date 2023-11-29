import './App.css';
import AppTitle from './components/AppTitle';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LaunchesPage from './pages/LaunchesPage';
import Spacecraftpage from './pages/SpacecraftPage';
import AstronautsPage from './pages/AstronautsPage';
import SpacestationsPage from './pages/SpacestationsPage';
import SpacewalksPage from './pages/SpacewalksPage';

function App() {
  const queryClient = new QueryClient()
  const pageTitles = ['Launches', 'Spacecraft', 'Astronauts', 'Spacestations', 'Spacewalks'];

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppTitle />
        <BrowserRouter>
          <Menu titles={pageTitles} />
          <Routes>
              <Route path='/launches' element={<LaunchesPage />} />
              <Route path='/spacecraft' element={<Spacecraftpage />} />
              <Route path='/astronauts' element={<AstronautsPage />} />
              <Route path='/spacestations' element={<SpacestationsPage />} />
              <Route path='/spacewalks' element={<SpacewalksPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
