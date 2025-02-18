import React from 'react';
import ProductItem from "./ProductItem"
import Product from '../Models/Product';

export default function ProductList(props: any){
   
    if(!props.products){
        return (
            <b>No product created yet.</b>
        )
    }

    function handleEdit(id: number){
     props.onEdit(id);
    }

    return ( 
    <>
        <h1>Product List</h1> 
        {
        props.products && (
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
              props.products.map( (item: Product) => <ProductItem key={item.id}  product = {item} onEdit ={handleEdit} />)                  
            }
            </tbody>
        </table>
       )
       }
    </>
)
}
