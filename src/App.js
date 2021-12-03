import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './components/NavBar.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar/>
        <Routes>
          <Route path='/' exact component={<Home/>}/>
          <Route path='products/*'  component={<Products/>}/>
          <Route path='reports/*' component={<Reports/>}/>
        </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
