import NavBar from "./componentes/navBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/Itemlistcontainer"
import CartWidget from "./componentes/CartWidget/CartWidget"
const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Nuevos Ingresos"}/>

    </>
  )
}

export default App