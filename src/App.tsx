import React from "react";
import List from "./List";
import Header from "./Header";
import data from "./data.json";
import "./App.css";

interface Person {
  name: string;
  description: string;
  link: string | null;
}

const ListItemContent: React.FC<Person> = React.memo(
  ({ name, description, link }) => (
    <div>
      <strong>{name}</strong>
      <p>{description}</p>
      {link && <a href={link}>{link}</a>}
    </div>
  )
);

function App() {
  const [selected, setSelected] = React.useState<number[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    if (selected.includes(value)) {
      setSelected((prev) => prev.filter((item) => item !== value));
    } else {
      setSelected((prev) => [...prev, value]);
    }
  };

  return (
    <div className="app">
      <Header selected={selected} />
      <main>
        <List onChange={onChange}>
          {data.map((item, index) => (
            <ListItemContent key={index} {...item} />
          ))}
        </List>
      </main>
    </div>
  );
}

export default App;
