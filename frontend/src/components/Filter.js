import { useEffect, useState } from "react";

const Filter = (props) => {
  const { array, name, setCheckboxArray, checkboxArray, placeholder } = props;
  const [showCount, setShowCount] = useState(6);
  const [textInput, setTextInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(array);

  const ShowMore = () => {
    setShowCount(array.length);
  };
  const ShowLess = () => {
    setShowCount(6);
  };
  const handleChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setCheckboxArray([...checkboxArray, checkboxValue]);
    } else {
      setCheckboxArray(
        checkboxArray.filter((value) => value !== checkboxValue)
      );
    }
  };

  const handleInput = (options) => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(textInput.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handleInput(array);
  }, [textInput]);

  return (
    <div className="certification">
      <h4>{name}</h4>
      <input
        className="certification-filter"
        type="text"
        placeholder={placeholder}
        onChange={(event) => setTextInput(event.target.value)}
      />
      <br />
      {(filteredOptions.length < 1 && (
        <p style={{ textAlign: "center", color: "red" }}>No Results Found</p>
      )) ||
        filteredOptions.slice(0, showCount).map((doc, i) => (
          <div className="certification-list" key={i}>
            <input type="checkbox" id="" value={doc} onChange={handleChange} />
            <label>{doc}</label>
          </div>
        ))}
      {showCount < filteredOptions.length && (
        <div>
          <p className="expand-certification" onClick={ShowMore}>
            Show All
          </p>
          <span className="expand-certification-span" onClick={ShowMore}>
            {filteredOptions.length}
          </span>
        </div>
      )}
      {showCount === filteredOptions.length && filteredOptions.length !== 6 && (
        <p className="expand-certification" onClick={ShowLess}>
          Show less
        </p>
      )}
    </div>
  );
};

export default Filter;
