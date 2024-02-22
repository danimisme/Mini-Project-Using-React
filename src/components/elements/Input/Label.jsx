const Label = ({ name, label }) => {
  return (
    <label htmlFor={name} className="form-label">
      {label}
    </label>
  );
};

export default Label;
