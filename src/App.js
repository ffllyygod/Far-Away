import React, { useState } from "react";
import { Stats } from "./components/Stats";
import { PackingLists } from "./components/PackingLists";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";

function App() {
  const [items, setItems] = useState([]);

  function handleNewItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleNewItem} />
      <PackingLists items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
