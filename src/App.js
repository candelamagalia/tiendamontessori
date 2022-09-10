import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/PropGreeting.jsx"
import MiComponente from "./ItemCount";

const App = () => {

const dash = "Bienvenidos a Tienda Montessori";

const unaFuncion = (count) => {
  console.log("un mensaje");
}

  return ( <>
    <NavBar />
    <ItemListContainer greeting={dash}/>
    <MiComponente stock={5} funcion={unaFuncion}/>
  </>
  )

};

export default App;
