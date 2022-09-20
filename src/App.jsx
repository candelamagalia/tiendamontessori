import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {

const dash = "Bienvenidos a Tienda Montessori";


  return ( <>
    <NavBar />
    <ItemListContainer greeting={dash}/>
    <ItemDetailContainer/>
  </>
  )

};

export default App;
