import { MouseEvent } from "react";

export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {/* {items.length === 0 ? <p> No item found </p> : null} */}
        {items.length === 0 && <p> No item found </p>}
        {items.map((item, index) => {
          return (
            <li className="list-group-item" key={item} onClick={handleClick}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
