import type { NextPage, GetServerSideProps } from "next";
// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import axios, { AxiosResponse } from "axios";
import { Product, Products } from "../types/products";
import { MouseEventHandler, useState } from "react";

const Home = (props: Products): JSX.Element => {
  const [info, setInfo] = useState(false);

  // para modificar el createdAt y extraer la hora
  const showInfo: MouseEventHandler<HTMLButtonElement> = () => {
    setInfo(!info);
  };
  const productsDescription = (): JSX.Element[] => {
    const productsArr = props.products.map((p: Product) => {
      const { createdAT } = p;
      if (!createdAT) return "someday";
      const idx = createdAT.toString().split(" ");
      let hour = idx[4];
      if (!hour) {
        let idx = createdAT.indexOf("T");
        let sub = createdAT.toString().substring(idx + 1, idx + 9);
        hour = sub;
      }
      console.log(createdAT, createdAT.toString(), hour);
      return ` ${p.name} with price of ${p.price}, for ${p.description} buyed at ${hour} XXX`;
    });
    const products = productsArr.map((pr, key) => <p key={key}>{pr}</p>);
    return products;
  };

  return (
    <div className={styles.container}>
      <Form />
      <br />
      <br />
      <button
        onClick={showInfo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Show products
      </button>
      <br />
      {info && productsDescription()}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: products } = await axios.get<Product[]>( // extraemos la propiedad "data" y se la asignamos a "products"
    "http://localhost:3000/api/products"
  );
  return {
    props: {
      products,
    },
  };
};

export default Home;
