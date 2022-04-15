import { useState } from "react";

const CapitalizeFirst = () => {
  const [capFirst, setCapFirst] = useState("");
  const [capLast, setCapLast] = useState("");
  const [lowerRest, setLowerRest] = useState(false);
  const [capFullName, setCapFullName] = useState("");

  const capitalizeName = (e, fName, lName, lower = false) => {
    e.preventDefault();

    const fullName = `${fName} ${lName}`;
    const firstChar = fullName.charAt(0);
    const secondStrHalf = lower
      ? fullName.slice(1).toLowerCase()
      : fullName.slice(1);

    setCapFullName(`${firstChar.toUpperCase()}${secondStrHalf}`);
  };

  return (
    <div className="capitalize-container">
      <form
        onSubmit={(e) => capitalizeName(e, capFirst, capLast, lowerRest)}
        className="capitalize-form-wrapper"
      >
        <div className="name-wrapper">
          <label>First Name: </label>
          <input type="text" onChange={(e) => setCapFirst(e.target.value)} />
        </div>

        <div className="name-wrapper">
          <label>Last Name: </label>
          <input type="text" onChange={(e) => setCapLast(e.target.value)} />
        </div>

        <div className="cap-buttons-wrapper">
          <button type="submit">Capitalize</button>
          <button onClick={() => setLowerRest(!lowerRest)}>
            Lower Letters
          </button>
        </div>
      </form>

      <p className="full-name">{capFullName}</p>
    </div>
  );
};

export default CapitalizeFirst;
