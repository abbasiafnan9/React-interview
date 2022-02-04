import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../../APIs/cats";
import cats from "../../APIs/cats";
import "./Cats.css";

function Cats({ catsData, breedList }) {
  const [found, setFound] = useState(catsData);

  const filterBreed = (e) => {
    if (e.target.value === "all") {
      setFound(catsData);
    } else {
      cats.get10CatsByBreed(e.target.value).then((response) => {
        setFound(response.data);
      });
    }
  };

  return (
    <>
      <div className="w-50 mx-auto mb-3">
        <select
          className="form-select"
          id="breed"
          name="breed"
          onChange={filterBreed}
        >
          <option value="all">All Breeds</option>
          {breedList.map((data) => {
            return (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mx-auto w-50">
        <Carousel fade>
          {found ? (
            found.map((data) => {
              return (
                <Carousel.Item key={data.id}>
                  <img
                    className="d-block w-100"
                    loading="lazy"
                    src={data.url}
                    alt="cat"
                  />
                </Carousel.Item>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </Carousel>
      </div>
    </>
  );
}

export default Cats;
