import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addList, toggle, clear, deleteItem } from "./actions";

const App = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          placeholer="listeye ekle"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            props.addList(text);
          }}
        >
          Ekle
        </button>
      </div>
      <div className="liste">
        <table>
          {props.list.map((item) => (
            <tr>
              <td key={item.id} className={item.completion ? "yapildi" : ""}>
                {item.baslik}{" "}
              </td>
              <td>
                {" "}
                <i
                  className="bi bi-check2-square"
                  onClick={() => {
                    props.toggle(item.id);
                  }}
                ></i>
              </td>
              <td>
                <i
                  className="bi bi-trash"
                  onClick={() => {
                    props.deleteItem(item.id);
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <button onClick={() => props.clear()} className="temizle">
          Tamamlananları Temizle
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps, { addList, toggle, clear, deleteItem })(
  App
);

/* export default App; */
