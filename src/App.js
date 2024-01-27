import logo from './assets/images/instagramLogo.png';
import './App.css';
import { Link } from "react-router-dom";

const estadosInstagram = [
  {
    nombre: "Elizabeth",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  },
  {
    nombre: "Elizabeth",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  },
  {
    nombre: "Felipe",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  },
  {
    nombre: "Elizabeth",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  },
  {
    nombre: "Batman",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  },
  {
    nombre: "Robin",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  },
  {
    nombre: "German",
    img: "https://...",
    estado: "https://...",
    textoEstado: "Mi primera pizza..jummi"
  }
];

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <WrapperStates />
    </div>
  );
}

export default App;


const WrapperStates = () => {

  const onStateClick = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className='wrapper-states'>
      { estadosInstagram.map((profile) => {
          return (<div id={profile.nombre} className='state'onClick={onStateClick} key={profile.nombre}>
            <Link to={"estado?id="+profile.nombre}><img src={logo} /></Link>
            
            <span>{profile.nombre}</span>
          </div>)})
      } 
    </div>
  )
}