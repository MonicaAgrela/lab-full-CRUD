import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
//import Navbar from "../components/Navbar"

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTip, setBrewerTip] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    const newBeer = {name: name,tagline: tagline,description: description,firstBrewed: firstBrewed,brewerTip: brewerTip,attenuationLevel: attenuationLevel,contributedBy: contributedBy}

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer).then(()=>{
      navigate('/beers')
    })
    .catch(()=>{

    })
    }

  return (
    <div className="AddBeerPage">
   <form onSubmit={handleSubmit}>
        <label>
          Name
          <input 
          name="name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Tagline
          <input
          name="tagline"
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label>
          Description
          <textarea
          name="description"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>

        <label>
          First Brewed
          <input
          name="first_brewed"
            type="text"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>

        <label>
          Brewer's Tips
          <input
          name="brewers_tips"
            type="text"
            onChange={(e) => {
              setBrewerTip(e.target.value);
            }}
          />
        </label>

        <label>
          Attenuation Level
          <input
          name="attenuation_level"
            type="number"
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>

        <label>
          Contributed By
          <input
          name="contributed_by"
            type="text"
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>

        <button type= "submit">
        Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;