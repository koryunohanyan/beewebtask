import { useState } from "react";
import SlateComponent from "./SlateComponent";

const SlateItems = (props) => {
  const [something, setSomething] = useState([]);
  const [text, setText] = useState("");

  const Add = () => {
    const value = [
      {
        type: "title",
        children: [{ text: text ? text : "untitled" }],
      },
      {
        type: "paragraph",
        children: [
          {
            text: "add something here",
          },
        ],
      },
    ];
    setSomething((prev) => [...prev, value]);
    setText("");
  };

  return (
    <div style={{marginLeft:"10px", cursor:"grab"}} draggable={true}>
      <div style={{padding:"2px", color:"white"}}>{props.title}</div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="add title"
      />
      <button
        style={{ background: "white", border: "2px solid grey" }}
        onClick={Add}
      >
        +
      </button>
      
      <div style={{ color: "grey" }}>
        {something?.map((item, idx) => (
          <div key={idx}>

            <SlateComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlateItems;
