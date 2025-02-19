import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('ProductItem Component', () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  const product = {
    id: 1,
    name: 'Sample Product',
    qty: 10,
  };

  it('renders product details correctly', () => {
    render(<ProductItem product={product} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    // Assert product details are rendered
    expect(screen.getByText(product.id)).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.qty)).toBeInTheDocument();
  });

  it('calls onEdit with correct product id when edit button is clicked', () => {
    render(<ProductItem product={product} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledWith(product.id);
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  it("test case", () => {
     expect(1).toBe(1);
  });
});
