import { useState, useEffect } from "react";
import Product from "../Models/Product";
import CreateEditProductProps from "../Models/CreateEditProductProps";
import ValidationError from "../Models/ValidationError";


const CreateProduct:React.FC<CreateEditProductProps> = ({product, onSave, onClearForm}) => {
    const [formData, setFormData] = useState<Product>(product);
    const [errors, setErrors] = useState<ValidationError>({ name: "", qty: "" });
        
    useEffect(() => {
      setFormData(product)
    }, [product]);

    function handleChange(e:any)
    {
        const { name, value } = e.target;
        console.log(`changed field name ${name}`);
        setFormData((prevData) => ({...prevData, [name]:value }));

        setErrors((prevErrors) => ({ ...prevErrors, [name]:"" }));
    }

    function handleSubmit(e: any): void {
       e.preventDefault();
       const validationErrors = validateForm();

       if(Object.keys(validationErrors).length > 0)
       {
          console.log(`Keys: ${JSON.stringify(Object.keys(validationErrors))}`)
          console.log("onSave is not called..", JSON.stringify(validationErrors), Object.keys(validationErrors).length);
          setErrors(validationErrors);
       }
       else{
          console.log("onSave is", onSave);
          onSave(formData);
       }
    }

    function validateForm(): ValidationError{
      const newErrors: any  = {};

      if(!formData.name){
        newErrors.name = "Name is required";
      }

      if(!formData.qty){
        newErrors.qty = "Qty is required";
      }   

      return newErrors;
    }

    function handleClearForm():void
    {
      onClearForm();
    }

    return ( 
     <>
        <h3>
        { 
          formData.id < 0 ? " Add product:" : "Update Product:"
        }
        </h3>
        <form onSubmit={handleSubmit}>
        <table id="createEditForm" style={{ marginTop: "20px"}}>
          <tbody>     
                <tr> 
                    <td>Name:</td>  
                    <td>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                        {
                         errors.name && (  
                            <span style={{ color:"red"}}> { errors.name } </span> 
                        )
                        }
                        </td>
                </tr>  
                <tr>    
                    <td>Qty:</td>
                    <td>
                        <input type="text" id="qty" name="qty" value={formData.qty} onChange={handleChange}/>
                        {
                            errors.qty && (
                                <span style={{color: "red"}}>{ errors.qty }</span>
                            )
                        }
                    </td>                           
                </tr>

                <tr>
                    <td style={{ textAlign: "center" }} colSpan={2}>
                      { formData.id > 0 && (
                          <button type="button" style={{ marginRight: "16px" }} onClick={handleClearForm}>
                            Reset
                          </button>
                          
                        )}
                      <button type="submit">
                      { 
                        formData.id <= 0 ? "Save" : "Update"
                      }
                      </button>
                      </td>                           
                </tr> 
            </tbody>      
        </table>
        </form>
    </>   
)
}

export default CreateProduct;
