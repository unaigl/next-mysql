import React, { EventHandler } from "react";
import axios from "axios";

const Form = () => {
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: 0,
  });

  const handlePost: React.FormEventHandler<HTMLFormElement> = async () => {
    await axios.post("/api/products", {
      name: product.name,
      description: product.description,
      price: product.price,
    });
  };

  // const handleGet = async () => {
  //   const log = await axios.get("/api/products");
  //   console.log(log);
  // };

  const handleChange = ({ target: { name, value } }) => {
    /* como parametro -> event: React.ChangeEvent<HTMLInputElement>  -> NO FUNCIONA*/
    // const name = event.target.name as string;
    // const value = event.target.name as string | number;
    setProduct({ ...product, [name]: value });
  };

  return (
    <>
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handlePost}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="name"
            id="name"
            name="name"
            onChange={handleChange}
            value={product.name}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Product Price:
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            name="price"
            placeholder="10.00"
            onChange={handleChange}
            value={product.price}
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="description"
            className="block text-gray-700 dark:text-white font-bold mb-2 text-sm"
          >
            Write a Description
          </label>
          <textarea
            name="description"
            id="description"
            // rows="2"
            placeholder="Product description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            onChange={handleChange}
            value={product.description}
          ></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Create product
        </button>
      </form>
    </>
  );
};

export default Form;
