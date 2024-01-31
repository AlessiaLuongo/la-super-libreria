import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComponentMyNav from "./components/ComponentMyNav";
import ComponentFooter from "./components/ComponentFooter";
import ComponentWelcome from "./components/ComponentWelcome";
import ComponentAllTheBooks from "./components/ComponentAllTheBooks";
import horror from "../src/data/horror.json";
import history from "../src/data/history.json";

function App() {
  return (
    <div>
      <header>
        <ComponentMyNav />
      </header>
      <main className="main-bg">
        <ComponentWelcome />

        <ComponentAllTheBooks libri={horror} />
        {/* <ComponentAllTheBooks libri={history} /> */}
      </main>
      <footer>
        <ComponentFooter />
      </footer>
    </div>
  );
}

export default App;
