import React from "react";
import ProductItemProps from "../Models/ProductItemProps";
 
 const ProductItem: React.FC<ProductItemProps> = ({product, onEdit, onDelete}) => {
   const {id, name, qty} = product;

    function handleEdit(id: number): void {
        onEdit(id);
    }

    return (        
        <tr key={id}> 
            <td key={id}>{ id }</td>  
            <td>{ name }</td>
            <td>{ qty }</td>
            <td><button onClick={() => handleEdit(id)}>Edit</button> &nbsp; <button onClick={() => onDelete(id)}>Delete</button></td>
            <td></td>                     
        </tr>                  
    )
}

export default ProductItem;
