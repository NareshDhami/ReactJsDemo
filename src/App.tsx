import ProductList from './Components/ProductList';
import './App.css';
import CreateProduct from './Components/CreateProduct';
import Product from './Models/Product';
import { useState } from 'react';

function App() {
  const initialState: Product={
    id: -1,
    name: "",
    qty: 0
  };

  const [products, setProduct] = useState<Product[]>([])
  const [editProduct, setEditProduct] = useState<Product>(initialState);

  function handleProductSave(product: Product){
    let productsCopy : Product[] = [];
    console.log('insiding save form...')
    //Add new product.
    if( product.id <= 0)
    {
      const id = products.length + 1;
      const productCopy = {...product, id: id};
      productsCopy = [...products, productCopy];
    }
    else
    {
      Object.assign(productsCopy,products);
      const editedProduct = productsCopy.filter(x=> x.id == product.id)[0];
      const editIndex = productsCopy.indexOf(editedProduct);
      productsCopy[editIndex] = product;
    }

    setProduct(productsCopy);
    ClearFormFields();
  }
  
  function handleEdit(id: number){
    console.log(`id: ${id}`);
    const filteredProduct: Product = products.filter( x=> x.id == id)[0];
    console.log(`handle edit: ${JSON.stringify(filteredProduct)} `);
    setEditProduct(filteredProduct);
  }

  function handleClearForm(){
    ClearFormFields();
  }

  function ClearFormFields(): void{
    setEditProduct(initialState);
  }

  return (
    <div className="App">
      <header style = {{color: "white", minHeight: "50px"}} className="App-header" >
        <h2>React App in type script</h2>
      </header>
      <CreateProduct onSave={handleProductSave} product={editProduct} onClearForm={handleClearForm} />
      <ProductList products={products} onEdit={ handleEdit } />
    </div>
  );
}

export default App;