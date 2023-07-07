import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import CreateCustomerForm from "../components/CreateCustomerForm";
import CustomerListItem from "../components/CustomerListItem";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    surname: "",
  });

  const handlerDeleteSingleCustomer = (id) => {
    const response = CustomerService.delete(id);

    if (response) {
      setCustomers([...customers.filter((customer) => customer.id !== id)]);
    }
  };

  const handlerCreateCustomer = (e) => {
    e.preventDefault();
    const newCustomerResponse = CustomerService.create(newCustomer);

    if (newCustomerResponse) {
      setCustomers([...customers, newCustomerResponse]);
    }
  };

  return (
    <div>
      <div>
        <CreateCustomerForm
          newCustomer={newCustomer}
          setNewCustomer={setNewCustomer}
          onCreateNewCustomer={handlerCreateCustomer}
        />
      </div>
      <div>
        <h2>Customer list</h2>
        {customers.map((customer) => (
          <CustomerListItem
            key={customer.id}
            customer={customer}
            onDeleteSingleCustomer={handlerDeleteSingleCustomer}
            josJedanProp="neki string"
          />
        ))}
      </div>
    </div>
  );
}
