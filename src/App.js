import "./App.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>{`<JennieHellqvist/>`}</code>
        <p>Frontend Web Developer</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/jenniehellqvist/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
