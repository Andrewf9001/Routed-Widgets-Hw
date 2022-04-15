import { useState } from "react";

const TruncateWords = () => {
  const [truncText, setTruncText] = useState("");
  const [maxTrunc, setMaxTrunc] = useState(1);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleTruncate = (str, max) => {
    const strLength = str.length;

    try {
      if (max < strLength) {
        setTruncText(`${str.slice(0, max)}...`);
        setError(false);
      } else {
        setError(true);
        setErrorText("Max value greater than length of string");
      }
    } catch (error) {
      setErrorText("Truncate Error");
    }
  };

  const handleReset = () => {
    setTruncText("");
    setMaxTrunc(1);
    setError(false);
    setErrorText("");
  };

  return (
    <div className="truncate-container">
      <div className="text-area-wrapper">
        <textarea
          onChange={(e) => setTruncText(e.target.value)}
          type="text"
          value={truncText}
        />
      </div>

      <div className="button-num-wrapper">
        <input
          type="number"
          min="1"
          max="50"
          value={maxTrunc}
          onChange={(e) => setMaxTrunc(e.target.value)}
        />
        <button onClick={() => handleTruncate(truncText, maxTrunc)}>
          Truncate
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>

      {!error ? <p>{truncText}</p> : <p>{errorText}</p>}
    </div>
  );
};

export default TruncateWords;
