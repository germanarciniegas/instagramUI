import logo from "./assets/images/instagramLogo.png"
import './App.css';
import Posts from "./components/Posts/Posts";
import { Link } from "react-router-dom";



function App() {
  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
      
        <Posts />
        
    </div>
  );
}

export default App;