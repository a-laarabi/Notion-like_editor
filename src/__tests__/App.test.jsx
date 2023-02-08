import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <App />
    );
   expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('creates a new heading with "# "', () => {
    const { getByTestId, getByText } = render(<App />);
    const editor = getByTestId('editor');

    fireEvent.focus(editor);
    fireEvent.change(editor, { target: { innerText: '# Test' } });
    fireEvent.keyDown(editor, { key: 'Enter', code: 13 });

    expect(getByText('h1')).toBeInTheDocument();
  });

  it('opens the cmdPopup with "/"', () => {
    const { getByTestId, getByText } = render(<App />);
    const editor = getByTestId('editor');

    fireEvent.focus(editor);
    fireEvent.change(editor, { target: { innerText: '/' } });

    expect(getByText('/')).toBeInTheDocument();
    expect(getByText('/h1')).toBeInTheDocument();
  });

  it('closes the cmdPopup with "Escape" key', () => {
    const { getByTestId, queryByText } = render(<App />);
    const editor = getByTestId('editor');

    fireEvent.focus(editor);
    fireEvent.change(editor, { target: { innerText: '/' } });
    fireEvent.keyDown(editor, { key: 'Escape', code: 27 });

    expect(queryByText('/')).toBeNull();
    expect(queryByText('/h1')).toBeNull();
  });

  it('creates a new text with "Enter" key', () => {
    const { getByTestId, getByText } = render(<App />);
    const editor = getByTestId('editor');

    fireEvent.focus(editor);
    fireEvent.change(editor, { target: { innerText: 'Test text' } });
    fireEvent.keyDown(editor, { key: 'Enter', code: 13 });

    expect(getByText('Test text')).toBeInTheDocument();
  });
});

