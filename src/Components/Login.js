import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);



  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input name="username" defaultValue="User Name" ref={register} />
      <input name="password" type="password" defaultValue="Password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}