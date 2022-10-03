import axios from "axios";
import Form from "../components/Form";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import { Product, Products } from "../types/products";

function NewPage() {
  return (
    <Layout>
      <div className="h-5/6 grid place-items-center">
        <Form />
      </div>
    </Layout>
  );
}
export default NewPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<Product[]>("http://localhost:3000/api/products");

  return {
    props: {
      products: res.data,
    },
  };
};
