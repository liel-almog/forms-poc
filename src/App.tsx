import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useForm, useFormState } from "react-hook-form";
import { Input, InputTwo } from "./components/Input";
import { FormOne } from "./components/FormOne";
import { FormTwo } from "./components/FormTwo";

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
      <h1>Form One</h1>
      <FormOne />
      <h1>Form Two</h1>
      <FormTwo />
    </div>
  );
}
export default App;
