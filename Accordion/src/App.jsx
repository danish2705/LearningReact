import Accordion from "./Accordion";
import "./App.css";

const accordionItems = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" },
];

function App() {
  return (
    <div className="wrapper">
      <Accordion items={accordionItems} />;
    </div>
  );
}

export default App;
