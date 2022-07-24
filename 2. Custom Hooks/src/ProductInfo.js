import { useResource } from "./useResource";

export const ProductInfo = ({ productId }) => {
  const product = useResource(`http://localhost:8080/products/${productId}`);

  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price} years</p>
      <p>Description</p>
      <h3>{description}</h3>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
};
