import { useState } from "react";
import SignUpForm from "./components/SignUpForm";

import Input from "./components/Input";

import "./App.css";
function App() {
  const [data, setData] = useState({
    firstName: "",
    familyName: "",
    checked: false,
    favouriteTechno: ""
  });

  const { firstName, familyName, checked, favouriteTechno } = data;

  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;

    setData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    // send an async request
    //sendData(data);
  };

  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <Input
          desc="familyName"
          value={familyName}
          onChange={handleChange}
          label="Nom de famille"
          type="text"
        />
        <Input
          desc="firstName"
          value={firstName}
          onChange={handleChange}
          label="Prénom"
          type="text"
        />
        {/*  //@ TODO : utiliser le Comp. Input à la place */}
        <div>
          <label htmlFor="isMajor">Cliquez si vous êtes majeurs</label>
          <input
            id="isMajor"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            name="checked"
          />
        </div>
        {/* Radio Button */}
        <h3>Quelle est techno préférée ?</h3>
        <div>
          <input
            type="radio"
            value="ReactJS"
            checked={favouriteTechno === "ReactJS"}
            name="favouriteTechno"
            onChange={handleChange}
          />
          <label htmlfor="">ReactJS</label>
        </div>
        <div>
          <input
            type="radio"
            value="NodeJS"
            checked={favouriteTechno === "NodeJS"}
            name="favouriteTechno"
            onChange={handleChange}
          />
          <label htmlfor="">NodeJS</label>
        </div>
        <div>
          <input
            type="radio"
            value="Typescript"
            checked={favouriteTechno === "Typescript"}
            name="favouriteTechno"
            onChange={handleChange}
          />
          <label htmlfor="">TypeScript</label>
        </div>
        <button>Valider mes informations</button>
      </form>
    </div>
  );
}

export default App;
