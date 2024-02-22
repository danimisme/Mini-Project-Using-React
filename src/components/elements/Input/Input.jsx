const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <input
      type={type}
      className="form-control"
      name={name}
      id={name}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
