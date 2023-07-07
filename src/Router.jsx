import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import SingleCustomer from "./pages/SingleCustomer";
import SingleProduct from "./pages/SingleProduct";
import Posts from "./pages/AppPosts";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/customers">
        <AppCustomers />
      </Route>
      <Route path="/customers/:customerId">
        <SingleCustomer />
      </Route>
      <Route exact path="/products">
        <AppProducts />
      </Route>
      <Route path="/products/:productId">
        <SingleProduct />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
    </Switch>
  );
}

// Route exact path , exact i path su propovi
