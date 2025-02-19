import Product from "./Product";

export default interface ProductListProps {
  products: Product[];
  onEdit: (id:number) => void;
  onDelete: (id:number) => void;
}
