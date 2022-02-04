import React, { useState } from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Users.css"


function Users({ userData }) {
  const [searchName, setSearchName] = useState("");
  const [found, setFound] = useState(userData);

  const filterName = (e) => {
    const keyword = e.target.value;
    setSearchName(keyword);
    if (keyword !== "") {
      const results = found.filter((item) => {
        return (
          item.name.first.toLowerCase().includes(keyword.toLowerCase()) ||
          item.name.last.toLowerCase().includes(keyword.toLowerCase()) ||
          item.email.toLowerCase().includes(keyword.toLowerCase()) ||
          item.cell.includes(keyword)
        );
      });
      setFound(results);
    } else {
      setFound(userData);
    }
  };

  return (
    <>
      <div className="form-floating mb-3">
        <input
          id="search"
          type="search"
          value={searchName}
          onChange={filterName}
          className="form-control"
          placeholder="email, name, or number"
        />
        <label className="form-label" htmlFor="search">
          Search by Name, Email, or Number
        </label>
      </div>
      <Row xs={2} md={4} lg={6} className="g-4">
        {found?.map((data) => {
          return (
            <Col className="mx-auto" key={data.login.uuid}>
              <Card className="h-100">
                <Card.Img
                  loading="lazy"
                  variant="top"
                  src={data.picture.large}
                />
                <Card.Title>
                  {data.name.title} {data.name.first} {data.name.last}
                </Card.Title>
                <Card.Body>
                  <ListGroup>
                    <ListGroupItem><a href={"mailto:"+data.email}>{data.email}</a></ListGroupItem>
                    <ListGroupItem>{data.cell}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Users;