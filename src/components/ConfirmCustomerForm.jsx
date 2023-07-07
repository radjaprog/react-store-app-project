import React from "react";

export default function ConfirmCustomerForm({ onConfirmCustomer }) {
  return (
    <form onSubmit={onConfirmCustomer}>
      <button type="submit">Confirmasd</button>
    </form>
  );
}
