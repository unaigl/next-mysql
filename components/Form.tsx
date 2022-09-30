import React from "react";
import axios from "axios";

const Form = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async () => {
    await axios.post("/api/products", {
      name: "awdwa",
      description: "adwdwdw",
      price: 23,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>tip something</h3>
      <input placeholder="tip" />
      <button bg-dark>submit</button>
    </form>
  );
};

export default Form;
