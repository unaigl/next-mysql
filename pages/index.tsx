import type { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { Product, Products } from "../types/products";
import Layout from "../components/Layout";
import { ProductCard } from "../components/productCard";

const Home = (props: Products): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <br />
        {props.products &&
          props.products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </Layout>
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
