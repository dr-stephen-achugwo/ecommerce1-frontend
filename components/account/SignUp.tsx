import React, { useRef } from "react";
import axios, { GenericHTMLFormElement } from "axios";

const dataFormSignUp: {
  id: string;
  name: string;
  type: string;
}[] = [
  {
    id: "email",
    name: "Email",
    type: "email",
  },
  {
    id: "password",
    name: "Password",
    type: "text",
  },
  {
    id: "firstname",
    name: "First Name",
    type: "text",
  },
  {
    id: "name",
    name: "Surname",
    type: "text",
  },
  {
    id: "date",
    name: "Date of Birth",
    type: "date",
  },
  {
    id: "number",
    name: "Phone Number",
    type: "number",
  },
];

const SignUp = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const email: String = e.target.elements.email.value;
    const password: String = e.target.elements.password.value;
    const name: String = e.target.elements.name.value;
    const firstname: String = e.target.elements.firstname.value;
    const birthday: Date = e.target.elements.date.value;
    const phonenumber: number = e.target.elements.number.value;

    axios.post("http://localhost:5000/api/auth/signup", {
      email,
      password,
      name,
      firstname,
      birthday,
      phonenumber,
    });

    if (formRef.current != null) {
      formRef.current.reset();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => onSubmit(e)}
      className="flex flex-col gap-5 py-10"
    >
      {dataFormSignUp.map((el, index) => (
        <div key={index}>
          <label htmlFor={el.id} className="first-letter:font-bold">
            {el.name}
          </label>
          <input
            className="w-full border-2 rounded-md p-2"
            type={el.type}
            id={el.id}
            required
            placeholder={`Saisissez votre ${el.name}`}
          />
        </div>
      ))}
      <button className="rounded-md bg-gray-200 hover:bg-main py-1 px-2 text-white duration-300 mt-5">
        R&apos;egister
      </button>
    </form>
  );
};

export default SignUp;
