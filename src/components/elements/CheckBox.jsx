const Checkbox = ({ name, checkboxValues, handleCheckboxChange, label }) => {
  return (
    <>
      <div className="form-check form-switch fs-2">
        <input
          className="form-check-input checkbox-switch"
          type="checkbox"
          role="switch"
          id={name}
          checked={checkboxValues[name]}
          onChange={() => handleCheckboxChange(name)}
        />
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
