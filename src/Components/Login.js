import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [userName, updateUserName] = useState('')


  function handleClick(e) {
    let user = e.target.classList.contains('username')
    console.log(user)
    updateUserName(user)
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input name="username" defaultValue="User Name" ref={register} />
      <input name="password" type="password" defaultValue="Password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" onClick={handleClick} />

      <h2>Welcome, {userName}</h2>
    </form>
  );
}