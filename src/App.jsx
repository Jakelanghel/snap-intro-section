import GlobalStyles from "./shared/Global";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <Nav />
      </div>
    </>
  );
}

export default App;
