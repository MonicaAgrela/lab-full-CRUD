import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//import Navbar from "../components/Navbar";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerID } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/beers/${beerID}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(err);
      });
  }, [beerID]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5005/beers/${beerID}`)
      .then(navigate("/beers"))
      .catch();
  };

  return (
    <div>
   
      {beer && (
        <>
          <img src={beer.image_url} width="50px" alt="" />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
          <p>{beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
          <div className="buttons-container">
            <div className="buttons-edit-delete">
              <Link to={`/beers/${beer.id}/edit`}>
                <button>Edit</button>
              </Link>
              <Link to={`/beers`}>
                <button onClick={handleDelete}>Delete</button>
              </Link>
            </div>
            <div>
              <Link to={`/beers`}>
                <button>Back</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;