import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react';
import App from './App';

jest.mock('antd/es', () => require('antd'));

describe('App interactions', () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  test('keeps the edit and delete alerts tied to the selected publication', () => {
    render(<App />);

    fireEvent.click(screen.getByAltText('https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png'));
    fireEvent.click(screen.getByRole('button', { name: /Edit$/ }));

    expect(window.alert).toHaveBeenLastCalledWith("J'update la publcation avec l'id : 2");

    fireEvent.click(screen.getByRole('button', { name: /Delete$/ }));

    expect(window.alert).toHaveBeenLastCalledWith("Je supprime la publcation avec l'id : 2");
  });

  test('keeps the upload alert content unchanged', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Upload a picture$/ }));
    fireEvent.change(screen.getByTitle('Description'), {
      target: { value: 'My description' },
    });
    fireEvent.change(screen.getByPlaceholderText('Add space between users'), {
      target: { value: '@THP ' },
    });
    fireEvent.change(screen.getByPlaceholderText('input # to write hashtags'), {
      target: { value: '#React ' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Upload' }));

    expect(window.alert).toHaveBeenCalledWith(
      "J'upload une image avec la description : My description et les hashtags #React et les mentions @THP"
    );
  });

  test('updates the displayed profile and closes its modal', async () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Edit account$/ }));
    fireEvent.change(document.querySelector('#firstname'), {
      target: { value: 'Updated' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Update' }));

    expect(screen.getByText('Updated Project')).toBeInTheDocument();
    await wait(() => {
      expect(screen.getByText('Edit your account').closest('.ant-modal-wrap')).not.toBeVisible();
    });
  });
});
