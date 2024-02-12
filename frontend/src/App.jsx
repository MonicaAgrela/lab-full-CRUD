import "./App.css";
import { Routes, Route } from "react-router-dom";
import BeersListPage from "./pages/BeersListPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";
import EditBeerPage from "./pages/EditBeerPage";
//import Navbar from "../components/Navbar";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/beers" element={<BeersListPage></BeersListPage>}></Route>
        <Route path="/new-beer" element={<AddBeerPage></AddBeerPage>}></Route>
        <Route
          path="/beers/:beerID/edit"
          element={<EditBeerPage></EditBeerPage>}
        ></Route>
        <Route
          path="/beers/:beerID"
          element={<BeerDetailsPage></BeerDetailsPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
