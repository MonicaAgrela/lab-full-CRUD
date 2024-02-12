import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const [imageURL, setImageURL] = useState("");

  const { beerID } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5005/beers/${beerID}`)
      .then((response) => {
        console.log(response);
        setName(response.data.name);
        setTagline(response.data.tagline);
        setDescription(response.data.description);
        setFirstBrewed(response.data.first_brewed);
        setBrewersTips(response.data.brewers_tips);
        setAttenuationLevel(response.data.attenuation_level);
        setContributedBy(response.data.contributed_by);
        setImageURL(response.data.image_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editedBeer = {
      imageURL: imageURL,
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .put(`http://localhost:5005/beers/${beerID}`, editedBeer)
      .then((result) => {
        navigate(`/beers/${result.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="editBeerPage">
      {name !== "" && (
        <form onSubmit={handleSubmit}>
          <label>
            Image
            <input
              type="text"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Tagline
            <input
              type="text"
              value={tagline}
              onChange={(e) => {
                setTagline(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Description
            <textarea
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </label>
          <label>
            First Brewed
            <input
              type="text"
              value={firstBrewed}
              onChange={(e) => {
                setFirstBrewed(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Brewer's Tips
            <input
              type="text"
              value={brewersTips}
              onChange={(e) => {
                setBrewersTips(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Attenuation Level
            <input
              type="number"
              value={attenuationLevel}
              onChange={(e) => {
                setAttenuationLevel(e.target.value);
              }}
              required
            />
          </label>
          <label>
            Contributed By
            <input
              type="text"
              value={contributedBy}
              onChange={(e) => {
                setContributedBy(e.target.value);
              }}
              required
            />
          </label>
          <button type="submit">Update Beer</button>
        </form>
      )}
    </div>
  );
}

export default EditBeerPage;
