import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={() => console.log(items)} />
    </div>
  );
}

export default App;
