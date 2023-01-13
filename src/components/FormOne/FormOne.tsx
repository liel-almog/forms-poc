import { useForm, useFormState } from "react-hook-form";
import { Input, InputTwo } from "../Input";
import classes from "./form-one.module.scss";

export interface FormOneProps {}

export const FormOne = (props: FormOneProps) => {
  const { handleSubmit, register, control, setValue } = useForm({
    defaultValues: {
      test: "",
      test2: "",
      firstName: "asd",
    },
  });

  const { dirtyFields } = useFormState({
    control,
  });

  const onSubmit = (data: any) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <Input register={register} name="test" />
      <InputTwo setValue={setValue} register={register} name="test2" />
      {dirtyFields.firstName && dirtyFields.test && <p>Field is dirty.</p>}
      <input type="submit" />
    </form>
  );
};
