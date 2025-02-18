import ProductList from './Components/ProductList';
import './App.css';
import CreateProduct from './Components/CreateProduct';
import Product from './Models/Product';
import { useState, useEffect } from 'react';
import { stringify } from 'querystring';
import { json } from 'stream/consumers';

function App() {

  const initialState: Product = {
    id: -1,
    name: "",
    qty: 0
  };

  const [products, setProduct] = useState<Product[]>([])
  const [editProduct, setEditProduct] = useState<Product>(initialState);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(2); //default pageSize = 2.
  const [sortOrder, setSortOrder] = useState<string>("asc"); 
  const [sortBy, setSortBy] = useState<string>("Id");

  useEffect( () => {
    const url = `http://localhost:5041/api/product?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortBy=${sortBy}`;
    console.log("Calling url: "+ url);
  
    //get products
  const fetchData = async () => {
  try {
    //call loading function.
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(JSON.stringify(result));
    // setData(result);
  } catch (err) {
    // setError(err.message);
    console.log("an error occured.");
  } finally {
    // setLoading(false);
  }
 };

 fetchData();

  }, []); //with [] renders only once.
  
 // Post data
  useEffect( () => {
    const url = `http://localhost:5041/api/product`;
    console.log("Calling url: "+ url);
  
  //get products
  const fetchData = async () => {
  try {

  const requestInfo = {
      method: "Post",
      header: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editProduct)
    };

    //call loading function.
    const response = await fetch(url, requestInfo);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(JSON.stringify(result));
    // setData(result);
  } catch (err) {
    // setError(err.message);
    console.log("an error occured.");
  } finally {
    // setLoading(false);
  }
 };

 fetchData();

  }, [editProduct]); //effect runs with change in editProduct

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
    <>
      <header style = {{color: "white", minHeight: "50px"}} className="App-header" >
        <h2>React App in type script</h2>
      </header>
      <CreateProduct onSave={handleProductSave} product={editProduct} onClearForm={handleClearForm} />
      <ProductList products={products} onEdit={ handleEdit } />
    </>
  );
}

export default App;