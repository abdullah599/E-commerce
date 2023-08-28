import { useState } from "react";
import { loginFields } from "../Constant/formField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { loggedIn } from "../App";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [login, setLogin] = useAtom(loggedIn);
  const setLoginStat = () => {
    setLogin(!login);
  }
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <form className="mt-8 space-y-6 ]" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      {/* this one is real way */}
      {/* <FormAction handleSubmit={handleSubmit} text="Login" /> */}

      {/* this is just for testing */}
      <Link
        to="/dashboard"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[color:var(--background-color-1)] hover:bg-[color:var(--background-color-2)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--[color:var(--background-color-1)] mt-10"
        onClick={setLoginStat}
      >
        {" "}
        Login
      </Link>
    </form>
  );
}
