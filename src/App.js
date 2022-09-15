import './App.css';
import NavBar from "./components/NavBar/NavBar.js"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

const App = () => {

const dash = "Bienvenidos a Tienda Montessori";


  return ( <>
    <NavBar />
    <ItemListContainer greeting={dash}/>
  </>
  )

};

export default App;
