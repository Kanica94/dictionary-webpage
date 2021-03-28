import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>📚 Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="footer">
          <small>
            <a
              href="https://github.com/Kanica94/dictionary-webpage"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/kanicasabharwal"
              target="_blank"
              rel="noreferrer"
            >
              Kanica Sabharwal
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
