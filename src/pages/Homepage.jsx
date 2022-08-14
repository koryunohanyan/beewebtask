import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import SlateItems from "../components/Slate";

function HomePage() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const [todoArray, setTodoArray] = useState([
    { id: 1, order: 1, name: "Need to do" },
    { id: 2, order: 2, name: "In the process" },
    { id: 3, order: 3, name: "Ready" },
  ]);
  
  const [value, setValue] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
  const signOut = () => {
    dispatch(removeUser());
  };
  function dragStartHandler(e, item) {
    console.log(item, "drag");
    setCurrentItem(item);
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dropHandler(e, item) {
    e.preventDefault();
    setTodoArray(
      todoArray.map((i) => {
        if (i.id === item.id) {
          return { ...i, order: currentItem.order };
        }
        if (i.id === currentItem.id) {
          return { ...i, order: item.order };
        }
        return i;
      })
    );
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const AddColumn = () => {
    if (todoArray.length < 5) {
      setTodoArray([
        ...todoArray,
        {
          id: todoArray.length + 1,
          order: todoArray.length + 1,
          name: value ? value : "something",
        },
      ]);
      setValue("");
    }
  };

  return isAuth ? (
    <div
      style={{ backgroundColor: "#433649", height: "100vh", padding: "1rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "white" }}>Welcome {email}</h2>
        <button
          onClick={signOut}
          style={{
            backgroundColor: "#433649",
            border: "none",
            cursor: "pointer",
            color: "white",
          }}
        >
          logout from {email}
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          {todoArray.sort(sortCards).map((item, idx) => (
            <div
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, item)}
              draggable={true}
              cursor="grab"
              key={idx}
            >
              <SlateItems title={item.name} />
            </div>
          ))}
        </div>
        <div
          style={{
            opacity: "0.7",
            alignSelf: "flex-start",
            marginLeft: "10px",
          }}
        >
          <div style={{ color: "white" }}>add column</div>

          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            style={{
              background: "white",
            }}
            onClick={AddColumn}
          >
            add column
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

export default HomePage;
