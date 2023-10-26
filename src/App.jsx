import GlobalStyles from "./shared/Global";
import Nav from "./components/nav/Nav";
import Hero from "./pages/hero/Hero";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <Nav />
        <Hero />
      </div>
    </>
  );
}

export default App;
