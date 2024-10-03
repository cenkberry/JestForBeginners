import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'app/page';

// Example 1
test('Render the all of component and find text with screen.getByText() function', () => {
  render(<App />)
  screen.getByText(/"This is the text for test"/i);
})

// Example 2
test('Render the all of component and find the button role="testbutton"', () => {
  render(<App />)
  screen.getByRole("testbutton");
})

// Example 3
test('Render the all of component and find the specific div role="heading" aria-level="1"', () => {
  render(<App />)
  screen.getAllByRole('heading', { level: 1 });
})

// Example 4
test('Render the all of component and find the specific label by label text', () => {
  render(<App />)
  screen.getByLabelText("Username Label:")
})

// Example 5
test('Render the all of component and find the specific input by input placeholder', () => {
  render(<App />)
  screen.getByPlaceholderText("placeholder text for test")
})

// Example 6
test('Render the all of component and find the specific input by input value', () => {
  render(<App />)
  screen.getByDisplayValue(/input value for test/i);
})

// Example 7
test('Render the all of component and find image by image alt text', () => {
  render(<App />)
  screen.getByAltText(/Jest Logo/i);
})

// Example 8
test('Render the all of component and find the specific div by title attribute', () => {
  render(<App />)
  screen.getByTitle('attTitle');
})

// Example 9
test('Render the all of component and find the specific div by data-testid="custom-element"', () => {
  render(<App />)
  screen.getByTestId('custom-element');
})

// Example 10
test('User Event - click test to button', () => {
  render(<App />)
  userEvent.click(screen.getByRole('clickable-button'));
})