import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Happy" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.instagram.com/junejung345/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irene Andrews
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ivandrews557?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-react-project-hw.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
