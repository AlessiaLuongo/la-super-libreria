import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComponentMyNav from "./components/ComponentMyNav";
import ComponentFooter from "./components/ComponentFooter";
import ComponentWelcome from "./components/ComponentWelcome";
import ComponentAllTheBooks from "./components/ComponentAllTheBooks";

function App() {
  return (
    <div>
      <header>
        <ComponentMyNav />
      </header>
      <main className="main-bg">
        <ComponentWelcome />

        <ComponentAllTheBooks />
      </main>
      <footer>
        <ComponentFooter />
      </footer>
    </div>
  );
}

export default App;
