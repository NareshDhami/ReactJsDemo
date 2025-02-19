import React from 'react';
import ProductItem from "./ProductItem"
import Product from '../Models/Product';
import ProductListProps from '../Models/ProductListProps'; 
import { RootState } from '../Models/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../Models/ProductSlice';

const ProductList : React.FC<ProductListProps> = ({ products, onEdit, onDelete }) => {
    const storeProducts = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch();

    if(!products) {
        return (
            <b>No product created yet.</b>
        )
    }

    function handleEdit(id: number){
      onEdit(id);
      console.log('Inside handle edit.' + id);
    }

    function handleRemove(id: number){
        onDelete(id);
    }

    return ( 
    <>
        <h1>Product List</h1> 
        {
            storeProducts.length !== 0 ? (
            <table id='productList'>
                <thead>
                    <tr key="headerRow">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody key="productListBody">
                {
                  storeProducts.map((item: Product) => <ProductItem key={item.id}  product={item} onEdit={handleEdit} onDelete={handleRemove} />)                  
                }
                </tbody>
            </table>
         ):
         <b>No product.</b>
       }
    </>
)
}

export default ProductList;
