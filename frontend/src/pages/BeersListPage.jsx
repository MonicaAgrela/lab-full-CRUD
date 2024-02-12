import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import Navbar from "../components/Navbar";

function BeersListPage() {
  const [beers, setBeers] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5005/beers`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/beers?name_like=${query}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div>
     
      <label>
        Search{" "}
        <input
          id="search-bar"
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        />
      </label>

      {beers &&
        beers.map((beer) => {
          return (
            <Link to={`/beers/${beer.id}`} key={beer.id}>
              <div>
                <img src={beer.image_url} width="40px" alt="" />
                <h3>{beer.name}</h3>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default BeersListPage;