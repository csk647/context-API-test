import Header from "./components/Header";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  return (
    <>
      <Header />
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <First />
        </div>
        <div style={{ width: "50%" }}>
          <Second />
        </div>
      </div>
    </>
  );
}

export default App;
