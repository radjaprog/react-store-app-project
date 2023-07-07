import React from "react";
import { Link } from "react-router-dom";

export default function CustomerListItem({
  customer,
  onDeleteSingleCustomer,
  josJedanProp,
}) {
  const { name, surname, id } = customer;

  return (
    <div>
      Name: <strong>{name}</strong> Surname: <strong>{surname}</strong>
      <button onClick={() => onDeleteSingleCustomer(id)}>Remove</button>
      <Link to={`/customers/${id}`}>Latest Purchases</Link>
    </div>
  );
}
