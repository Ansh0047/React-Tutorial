
export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {/* 
  
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))} 
        
        */}
        {/* so to achieve component composition we have move the above code to the App.jsx file where it added in 
        between the Shop tags and passed here as the children prop in order to reduce the overhead of passing the 
        props to every children */}
        {children}
      </ul>
    </section>
  );
}
