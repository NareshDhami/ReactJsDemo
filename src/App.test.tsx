import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('render app component:', () => {
  render(<App />);

  let saveBtn = screen.getByText('Save');
  fireEvent.click(saveBtn);
  expect(saveBtn).toHaveBeenCalledTimes(1);
  
});
