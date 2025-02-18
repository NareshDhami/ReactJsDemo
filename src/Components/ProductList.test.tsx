import { fireEvent, render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import Product from "../Models/Product";


describe("product list component tests", () => {
    let funcCall = jest.fn;

    let products: Product[] = [{
        id: 1,
        name: 'Sample Product one',
        qty: 10,
      },
      {
      id: 2,
      name: 'Sample Product two',
      qty: 11,
    }
    ]

    it("render the list.", ()=> {       
        render(<ProductList products = {products}/>);
        expect(screen.getByRole('table')).toBeInTheDocument();        
        expect(screen.getByText("Sample Product one")).toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("10",)).toBeInTheDocument();
    })
});