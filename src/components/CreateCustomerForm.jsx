import React from "react";

export default function CreateCustomerForm({
  newCustomer,
  setNewCustomer,
  onCreateNewCustomer,
}) {
  return (
    <form onSubmit={onCreateNewCustomer}>
      <input
        required
        type="text"
        value={newCustomer.name}
        onChange={({ target }) =>
          setNewCustomer({ ...newCustomer, name: target.value })
        }
      />
      <input
        required
        type="text"
        value={newCustomer.surname}
        onChange={({ target }) =>
          setNewCustomer({ ...newCustomer, surname: target.value })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}
