import React from "react";
import { Link } from "react-router-dom";

export default function ProductListItem({
  product,
  onIncrementCount,
  onDecrementCount,
}) {
  const { name, count, id } = product;

  return (
    <div>
      Name: <strong> {name} </strong> Count: <strong> {count} </strong>
      <button onClick={() => onIncrementCount(product.id)}>+</button>
      <button onClick={() => onDecrementCount(product.id)}>-</button>
      <Link to={`/products/${id}`}>Buy</Link>
    </div>
  );
}
