import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useForm, useFormState } from "react-hook-form";
import { Input, InputTwo } from "./components/Input";

function App() {
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
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <Input register={register} name="test" />
        <InputTwo setValue={setValue} register={register} name="test2" />
        {dirtyFields.firstName && dirtyFields.test && <p>Field is dirty.</p>}
        <input type="submit" />
      </form>
    </div>
  );
}
export default App;
