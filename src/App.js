import "./styles/App.css";
import HeaderLayout from "./components/HeaderLayout";
import SignUp from "./components/SignUp";
import FooterLayout from "./components/FooterLayout";

function App() {
  return (
    <div className="App">
      <div className="header-main">
        <header>
          <div id="logo">
            <HeaderLayout />
          </div>
        </header>
        <main>
          <div>
            <SignUp />
          </div>
        </main>
      </div>
      <div>
        <footer>
          <FooterLayout />
        </footer>
      </div>
    </div>
  );
}

export default App;
