import React, { useState } from "react";
import {Container,Row,Col,Card,ListGroup, ListGroupItem,} from "react-bootstrap";
import "./Countries.css";

function Countries({ countriesData }) {
  const [searchName, setSearchName] = useState("");
  const [found, setFound] = useState(countriesData);

  const filterName = (e) => {
    const keyword = e.target.value;
    setSearchName(keyword);
    if (keyword !== "") {
      const results = found.filter((item) => {
        return (
          item.name.toLowerCase().includes(keyword.toLowerCase()) ||
          item.region.toLowerCase().includes(keyword.toLowerCase()) ||
          item.languages.some((language) =>
            language.name.toLowerCase().includes(keyword.toLowerCase())
          )
        );
      });
      setFound(results);
    } else {
      setFound(countriesData);
    }
  };

  return (
    <>
      <div className="form-floating  mb-3">
        <input
          id="search"
          type="search"
          value={searchName}
          onChange={filterName}
          className="form-control"
          placeholder="name,region,language"
        />
        <label className="form-label" htmlFor="search">
          Name, Region, or Language
        </label>
      </div>
      <Container fluid>
        <Row xs={2} md={3} lg={4} xl={6} className="g-4">
          {found?.map((data, index) => {
            return (
              <Col className="mx-auto" key={index}>
                <Card className="h-100">
                  <Card.Img loading="lazy" variant="top" src={data.flags.png} />
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Body>
                    <ListGroup>
                      <ListGroupItem>
                        {data.languages.map((item, index) => {
                          return <p key={index}>{item.name}</p>;
                        })}
                      </ListGroupItem>
                      <ListGroupItem>Capital: {data.capital}</ListGroupItem>
                      <ListGroupItem>Region: {data.region}</ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Countries;
