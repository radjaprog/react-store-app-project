import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import customerService from "../services/CustomerService";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SingleProduct() {
  const { productId } = useParams();
  const history = useHistory();

  const [customers, setCustomers] = useState(customerService.getAll());
  const [selectedCustomerId, setSelectedCustomerId] = useState();

  const [product, setProduct] = useState(ProductService.get(productId));

  const handleChangeSelectedCustomerId = ({ target }) => {
    setSelectedCustomerId(target.value);
  };

  //console.log(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCustomerId) {
      alert("Please select customer");
    } else {
      const updatedProduct = ProductService.decrement(productId);
      if (!updatedProduct) {
        alert("Nema na lageru da li si slep");
      } else {
        setProduct({
          ...product,
          count: updatedProduct.count,
        });

        customerService.addProduct(selectedCustomerId, {
          ...product,
          count: 1,
        });
      }
    }
  };

  const handleCancel = () => {
    history.push("/products");
  };

  return (
    <>
      <div>
        <h1>Details</h1>
        <p>
          Name: <strong>{product.name}</strong>
        </p>
        <p>
          Count: <strong>{product.count}</strong>
        </p>
      </div>
      {product.count <= 0 ? (
        <>
          <h4>Nema dovoljno proizvoda na lageru</h4>
          <button>Go back to all products</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <select
            onChange={handleChangeSelectedCustomerId}
            value={selectedCustomerId}
          >
            <option selected disabled hidden>
              Odaberi korisnika
            </option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
                {customer.surname}
              </option>
            ))}
          </select>
          <button type="submit">Confirm</button>
          <Link to="/products">Cancel</Link>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
}
