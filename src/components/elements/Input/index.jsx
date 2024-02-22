import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { type, name, placeholder, label } = props;
  return (
    <div className="mb-3">
      <Label name={name} label={label} />
      <Input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
