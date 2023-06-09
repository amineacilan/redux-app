import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addList, toggle, clear, deleteItem } from "./actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';


const App = (props) => {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div class="row">
        <Form.Group className="col-md-8" controlId="exampleForm.ControlInput1">
          <Form.Control
            placeholder="listeye ekle"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          
        </Form.Group>
        <Button className="col-md-4"
            onClick={() => {
              setText("");
              props.addList(text);
            }}
            variant="secondary"
          >
            Ekle
          </Button>{" "}
      </div>
      <div className="liste">
        <Table  bordered hover>
        <tbody>
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
          </tbody>
        </Table>
      </div>
      <div>
        <Button
          onClick={() => props.clear()}
          className="temizle"
          variant="success"
        >
          Tamamlananları Temizle
        </Button>{" "}
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
