import { useState } from 'react';
import Footer from './components/footer';
import NavBar from './components/navBar';
import ProductPage from './components/productPage';

function App() {
  const [items, setItems] = useState([]);

  const removeItem = (itemToRemove) => {
    setItems(prevState => prevState.filter(item => item.name !== itemToRemove.name));
  }

  return (
    <div className="max-w-5xl mx-auto">
      <NavBar items={items} removeItem={removeItem} />
      <ProductPage setItems={setItems} />
      <Footer />
    </div>
  );
}

export default App;
