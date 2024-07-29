import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx'
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {

  return (
    // here the Provider is the part of the context object created using createContext
    // it is used to supply the context value to the component tree
    // Provider wraps the part of the component tree and accepts a value prop which will
    // be provided to the Cosumer to access the context value
    <CartContextProvider>
      <Header />
      {/* <Shop onAddItemToCart={handleAddItemToCart} /> */}

      {/* here in the above shop component we have passed the handleAddItemToCart function and then it is passed
      to the product component from shop so to reduce the passing of the function from nested component we can use
      this syntax where we have passed the product component as the children prop to shop to reduce prop drilling*/}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product}/>
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
