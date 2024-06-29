import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  return (
    // <Fragment></Fragment , this empty tag is an alternative to the fragment
    <>
      <Header />
      <main>
        {/* we have moved the (core-concepts) section into new CoreConcepts componet */}
        {/* in the same way for the (examples) section */}
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
