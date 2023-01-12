import { ChangeEvent } from "react";
import { useForm, UseFormRegister, UseFormSetValue, useFormState } from "react-hook-form";

export interface InputProps {
  name: string;
  register: UseFormRegister<any>;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props.register(props.name, {
        onChange(event) {
          console.log("onChange", event.target.value);
        },
      })}
      placeholder="test"
    />
  );
};

interface InputTwoProps extends InputProps {
  setValue: UseFormSetValue<any>;
}

export const InputTwo = (props: InputTwoProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    props.setValue(props.name, e.target.value);
  };
  const { onChange: _onChange, onBlur: _onBlue, ...methods } = props.register(props.name);
  return <input {...methods} onChange={onChange} placeholder="test2" />;
};
