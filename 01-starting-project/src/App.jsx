// react useState Hook is used to track the state in a fucntion component
import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
// to import the images from assets using default exports
// import coreComponentImg from "./assets/components.png";

// importing named exports
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";

function App() {
  // important useSatate() is used on the top level
  // useState accepts intial state and return two values [first,second]
  // first one is for the current state
  // second one is for the fucntion that updates the state
  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = 'Please select a button';
  // event Handler function
  function handleSelect(selectedButton) {
    // selectedButton can be => 'componet' 'jsx' 'state' 'props'
    // console.log('Hello AK');
    // console.log(selectedButton);     // to check which button is selected

    // so here we have passed the updated state data
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      {/* we have to include html tag(ie. name of the function) inorder to execute the 
      custom component and we can also use self closing tag ie(<Header />)*/}
      <Header></Header>
      <main>
        {/* Now here in this section we have used the "CoreConcept" ie.props */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* 
            <CoreConcept
              title= {CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> 
            */}

            {/* So here i have used the spread operator which pulls out all the key value pairs from object 
            and it is same as the above syntax*/}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* we can also used the down mentioned approached and there is another syntax for the label()attribute*/}
            {/* <TabButton label="Components2"></TabButton> */}
            {/* now adding anonymous fucntion to execute the handler function with arguments */}
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/* Add Dynamic Content here */}
          {/* here we have added the current state data */}
          {/* {selectedTopic} */}

          {/* we want to render this tab when some button is clicked , so we someting called ternary operator*/}
          {!selectedTopic ? (
            <p>Please select the topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}


          {/*   Another way
          {!selectedTopic && <p>Please select the topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          */}
        </section>
      </main>
    </div>
  );
}

export default App;
