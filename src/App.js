import './App.css';
import { Routes, Route } from 'react-router-dom';

//React slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlaysPage from './pages/Plays.page';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movie/:id' element={<MoviePage/>}/>
      <Route path= '/plays' element={<PlaysPage />}/>
      <Route/>
    </Routes>
  );
}

export default App;
