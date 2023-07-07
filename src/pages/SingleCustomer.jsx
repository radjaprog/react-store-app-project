import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

export default function SingleCustomer() {
  const { customerId } = useParams();

  const [customer, setSingleCustomer] = useState(
    CustomerService.get(customerId)
  );

  return (
    <div>
      <h1>Single customer</h1>
      Name: <strong>{customer.name}</strong>
      Surname: <strong>{customer.surname}</strong>
      <h2>Users products</h2>
      <ul>
        {customer.products ? (
          customer.products.map((product, index) => (
            <li key={index}>
              <h6>Product: {product.name}</h6>
              <p>Count: {product.count}</p>
              <p>Datum: {product.created_at}</p>
            </li>
          ))
        ) : (
          <li>No products</li>
        )}
      </ul>
    </div>
  );
}
