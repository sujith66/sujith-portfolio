import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import { About, Home, Post, SinglePost ,Project, NavBar} from './components';

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route element={<Home />} path='/' exact/>
        <Route element={<About />} path=''/>
        <Route element={<SinglePost />} path='/post/:id'/>
        <Route element={<Post />} path='/post'/>
        <Route element={<Project />} path='/project'/>
      </Routes>
    </Router>
  );
}

export default App;
