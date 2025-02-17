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
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
            {
              props.products.map( (item: any) => <ProductItem product = {item} onEdit ={handleEdit} />)                  
            }
            </tbody>
        </table>
       )
       }
    </>
)
}
