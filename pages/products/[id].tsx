import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { Product } from "../../types/products";
import axios from "axios";

interface Props {
  product: Product[];
}

const CardOptions = (props: Props) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/products/${id}`);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const product = props.product[0];

  return (
    <Layout>
      <div className="p-6 bg-white dark:bg-gray-800">
        <p>Name: {product.name}</p>
        <p>Description: {product.name}</p>
        <p>Price: {product.name}</p>
      </div>

      <div className="mt-7 flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
          onClick={() => {
            if (!product.id)
              return console.log(product.name, "Product not available");
            return handleDelete(product.id);
          }}
        >
          delete
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded"
          onClick={() => router.push("/products/edit/" + product.id)}
        >
          Edit
        </button>
      </div>
    </Layout>
  );
};

export default CardOptions;

export const getServerSideProps = async ({ query }: any) => {
  const res = await axios.get("http://localhost:3000/api/products/" + query.id);

  return {
    props: {
      product: res.data,
    },
  };
};
