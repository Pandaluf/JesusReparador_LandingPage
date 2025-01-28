import './App.css'
import NavBar from "../components/navbar/NavBar.jsx";
import CarouselFade from "../components/carouselfade/CarouselFade.jsx";
import Footer from "../components/footer/Footer.jsx";

function App() {

  return (
    <>
    <NavBar />
    <CarouselFade />
    <div className="welcome">
      <h1>¡Bienvenido al colegio "Jesús Reparador"!</h1>
      <h1>Donde los sueños de tus hijos se convierten en nuestra misión</h1>
    </div>
    </>
  )
}

export default App
