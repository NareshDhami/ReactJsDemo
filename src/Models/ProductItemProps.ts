import Product from "./Product";

export default interface ProductItemProps {
    product: Product;
    onEdit: (id:number) => void;
    onDelete: (id:number) => void;
  }