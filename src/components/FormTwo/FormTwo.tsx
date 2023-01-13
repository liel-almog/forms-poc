import { ChangeEvent } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import classes from "./form-two.module.scss";

export interface FormTwoProps {}

export const FormTwo = (props: FormTwoProps) => {
  const methods = useForm({
    defaultValues: {
      test: "",
      test2: "",
      test3: "",
      firstName: "asd",
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <input {...methods.register("firstName")} placeholder="First Name" />
        <NestedInput />
        <NestedInputTwo />
        <NestedInputThree />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

const NestedInput = () => {
  const { register } = useFormContext();
  return <input placeholder="test" {...register("test")} />;
};

const NestedInputTwo = () => {
  const { register, setValue } = useFormContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("It works!");
    setValue("test2", e.target.value);
  };
  return <input placeholder="test2" {...register("test2")} onChange={handleChange} />;
};

const NestedInputThree = () => {
  const { register } = useFormContext();
  return (
    <input
      placeholder="test3"
      {...(register("test3"),
      {
        onChange: () => {
          console.log("It works too (or three)!");
        },
      })}
    />
  );
};
