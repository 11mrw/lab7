import React from 'react';
import './App.css';
import dalLogo from './dal-logo-horizontal-white.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Creative React App!</h1>
        <p>This app showcases my creativity and learning journey in React.</p>
        <img src={dalLogo} className="App-logo" alt="custom logo" />
        <p>
          Explore the world of React by modifying <code>src/App.js</code>.
        </p>
        <div>
          <button
            className="App-button"
            onClick={() => alert('Thank you for visiting!')}
          >
            Click Me
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About React
        </a>
      </header>
      <main>
        <section>
          <h2>About This App</h2>
          <p>
            This app was built using React as part of a learning project. It includes interactive features and showcases responsive design.
          </p>
        </section>
        <section>
          <h2>Why React?</h2>
          <p>
            React is a powerful library for building user interfaces. It allows developers to create reusable components and manage state effectively.
          </p>
        </section>
      </main>
      <footer>
        <p>© 2024 My React App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
