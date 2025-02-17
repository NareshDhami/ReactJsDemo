export default function ProductItem(props: any){
   const {id, name,qty} = props.product;

    function handleEdit(id: number): void{
        props.onEdit(id);
    }

    return ( 
    <>
        
            <tr> 
                <td key={id}>{ id }</td>  
                <td>{ name }</td>
                <td>{ qty }</td>
                <td><button onClick={() => handleEdit(id)}>Edit</button></td>                           
            </tr>            
        
    </>
)
}
