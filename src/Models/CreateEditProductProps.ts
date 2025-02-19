import Product from "./Product";

export default interface CreateEditProductProps {
    product: Product;
    onSave: (product:Product) => void;
    onClearForm: () => void;
}