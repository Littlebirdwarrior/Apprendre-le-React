
//mes styles
import '@csstools/normalize.css';
/* rest of app styles */
import '../styles/App.css';

//mes composants
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from "./ShoppingList";




function App() {
  return (
      <div>
        <Banner />
        <Cart/>
        <ShoppingList/>
      </div>
  )
}

export default App