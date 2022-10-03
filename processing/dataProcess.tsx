import { Product } from "../types/products";
export const productsDescription = (_products: Product[]): JSX.Element[] => {
  const productsArr = _products.map((p: Product) => {
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
