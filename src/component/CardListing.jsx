import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaMapMarkerAlt, FaUserAlt, FaWallet } from 'react-icons/fa';
import {   FaStar, FaStarHalf } from 'react-icons/fa6';

function CardListing() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/chuzzy888/68ad76e1b62ba1bac426b18295ec3059/raw/2e0a0e22e7e3d024907bd6f0a64b8755d7f8385d/avons.json"
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((list) =>
    list.giftCardType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      <Form className="mt-3 flex justify-around">
        <Form.Control
          type="text"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          placeholder="Search for gift cards..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

      </Form>

      {filteredData.length === 0 ? (
        <p>No matching gift cards found.</p>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {filteredData.map((list) => (
            <Col key={list.id}>
              <Card  className=" mt-5 animate__animated animate__fadeInLeft" style={{ boxShadow: '0 20px 16px rgba(0, 0, 0, 0.2)', borderRadius:"20px"}}>
                <Card.Img variant="top" src={list.giftCardImage} />
                <Card.Body>
                  <div className="flex">
                    <h1 className="mx-2.5 text-green-600">
                      <FaUserAlt />
                    </h1>
                    <Card.Title>{list.sellerName}</Card.Title>
                  </div>
                  <Card.Text className="text-yellow-900">{list.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <div className="flex">
                    <h1 className="mx-8 text-blue-600 mt-2">
                      <FaWallet />
                    </h1>
                    <ListGroup.Item className="mt-1 font-serif font-black">{list.giftCardType}</ListGroup.Item>
                  </div>
                  <ListGroup.Item className="font-black d-flex mx-1.5 mt-2">
                    <h4 className="font-serif text-gray-500">Price:</h4>
                    <h2 className="mx-2.5">{list.giftCardValue}</h2>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex">
                    <h6>Expiry Date:</h6>
                    <h6 className="text-red-500 mx-8">{list.expiryDate}</h6>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex">
                    <h1 className="mx-2.5 text-green-300">
                      <FaMapMarkerAlt />
                    </h1>
                    <h5 className="text-green-700 mx-3.5">{list.location}</h5>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="flex justify-around">
                  <div className="d-flex">
                    <h3 className="mx-1 text-yellow-600">
                      <FaStar/>
                    </h3>
                    <h3 className="mx-1 text-yellow-600">
                    <FaStar/>
                    </h3>
                    <h3 className="mx-1 text-yellow-600">
                    <FaStar/>
                    </h3>
                    <h3 className="mx-1 text-yellow-600">
                    <FaStar/>
                    </h3>
                    <h3 className="mx-1 text-yellow-600">
                      <FaStarHalf />
                    </h3>
                  </div>
                  <Link to={`/chat/${list.sellerContact}`}>
                    <Button variant="success">Chat Vendor</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default CardListing;




















