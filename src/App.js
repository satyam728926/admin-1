import './style.css';
import './responsive.css';
import './register.css';
import Header from './components/Header';
import Register from './components/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
function App() {
  return (
    <div className="App">
       <Header/>
      <Router>
        <Routes>
        <Route   path ="/register" element={<Register/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;
