import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Form from "../components/Form";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
      <Form />
    </div>
  );
};

export default Home;
