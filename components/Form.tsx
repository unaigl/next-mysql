import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Product } from "../types/products";

//TODO Review types
interface HandleProps {
  target: (EventTarget & HTMLInputElement) /*  */ | HTMLTextAreaElement;
}

const Form = () => {
  const router = useRouter();

  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: 0,
  });

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await axios.get("/api/products/" + router.query.id);
        const product: Product = result.data["0"];
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    };
    if (router.query.id) fetchProduct();
  }, [router.query.id]);

  const handlePost: React.FormEventHandler<HTMLFormElement> = async (
    e: any
  ) => {
    e.preventDefault();

    if (router.query.id) {
      try {
        await axios.put("/api/products/" + router.query.id, {
          name: product.name,
          description: product.description,
          price: product.price,
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post("/api/products", {
          name: product.name,
          description: product.description,
          price: product.price,
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = ({ target: { name, value } }: HandleProps) => {
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
          {router.query.id ? "Update product" : "Create product"}
        </button>
      </form>
    </>
  );
};

export default Form;
