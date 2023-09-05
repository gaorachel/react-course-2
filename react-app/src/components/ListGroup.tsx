import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

export default function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {heading} </h1>
      <ul className="list-group">
        {/* {items.length === 0 ? <p> No item found </p> : null} */}
        {items.length === 0 && <p> No item found </p>}
        {items.map((item, index) => {
          return (
            <li
              className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
              key={item}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
