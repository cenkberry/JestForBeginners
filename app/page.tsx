export default function App() {
  return (
    <div className="container">
      <h1>Jest Examples For Beginners</h1>
      <div className="app">

      <div className="example">
        <h2>Example 1</h2>
        <h3>Render the all of component and find text with screen.getByText() function</h3>
        <div>"This is the text for test"</div>
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 2</h2>
        <h3>Render the all of component and find the button role="test-button"</h3>
        <button role="testbutton">This is test button</button>
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 3</h2>
        <h3>Render the all of component and find the specific div role="heading" aria-level="1"</h3>
        <div role="heading" aria-level="1">div role="heading" aria-level="1"</div>
        <div role="heading" aria-level="2">div role="heading" aria-level="2"</div>
        <div role="heading" aria-level="3">div role="heading" aria-level="3"</div>
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 4</h2>
        <h3>Render the all of component and find the specific label by label text</h3>
        <label htmlFor="username-input">Username Label:</label>
        <input id="username-input" placeholder="Username Input" />
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 5</h2>
        <h3>Render the all of component and find the specific input by input placeholder</h3>
        <input placeholder="placeholder text for test" />
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 6</h2>
        <h3>Render the all of component and find the specific input by input value</h3>
        <input defaultValue="input value for test" />
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 7</h2>
        <h3>Render the all of component and find image by image alt text</h3>
        <img src="https://miro.medium.com/v2/resize:fit:796/1*bQ7s-PbY_aW3PthOt-iNFw.png" alt="Jest Logo" />
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 8</h2>
        <h3>Render the all of component and find the specific div by title attribute</h3>
        <div title="attTitle">this div has title attribute for test</div>
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 9</h2>
        <h3>Render the all of component and find the specific div by data-testid="custom-element"</h3>
        <div data-testid="custom-element">this div has data-testid="custom-element" for test</div>
      </div>

      <div>---------------------------------------------------------------------</div>

      <div className="example">
        <h2>Example 10</h2>
        <h3>User Event - click test to button</h3>
        <button role="clickable-button">Click Test</button>
      </div>

    </div>
    </div>
  )
}