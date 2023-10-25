import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Routes, Route, Link } from 'react-router-dom'; // Removed BrowserRouter import
import New from './component/New';
import Escrow from './component/Escrow';
import Report from './component/Report';
import AccountPage from './component/AccountPage';
import Home from './component/Home';
import SellerUploadForm from './component/SellerUploadForm';
import { FaMoneyCheckAlt, FaRegMoneyBillAlt, FaHandshake } from "react-icons/fa";
import { FaMessage, FaCircleUser,FaHouse } from "react-icons/fa6";


function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"> <img class="animate__animated animate__rotateInDownLeft" style={{ height: "100px" }} src={"https://1000logos.net/wp-content/uploads/2021/05/Avon-logo.png"} alt='..' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleOffcanvas} />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{ width: '200px', height: "700px" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7-lCCCUp50yrBpQeJfYA1Tw6MAWH6-5-RQ&usqp=CAU"} alt='..' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/card" onClick={handleCloseOffcanvas} className='d-flex'>

                    <h1 className='mx-2.5'>  <FaMoneyCheckAlt /></h1>
                    CARDS
                  </Nav.Link>

                  <Nav.Link href="#action2" as={Link} to="/sellcard" onClick={handleCloseOffcanvas} className='d-flex'>
                    <h1 className='mx-2.5 text-green-400'>  <FaRegMoneyBillAlt /> </h1>
                    SELL CARDS
                  </Nav.Link>
                  <Nav.Link href="#action2" as={Link} to="/account" onClick={handleCloseOffcanvas} className='d-flex'>
                    <h1 className='mx-2.5 text-blue-500'>  <FaCircleUser /></h1>
                    Register
                  </Nav.Link>
                  <Nav.Link href="#action2" as={Link} to="/escrow" onClick={handleCloseOffcanvas} className='d-flex'>
                    <h1 className='mx-2.5 text-yellow-800'>  <FaHandshake /></h1>
                    Escrow
                  </Nav.Link>
                  <Nav.Link href="#action2" as={Link} to="/feedback" onClick={handleCloseOffcanvas} className='d-flex'>
                    <h1 className='mx-2.5 text-indigo-300'>  <FaMessage /></h1>
                    Feedback
                  </Nav.Link>
                  <Nav.Link href="#action2" as={Link} to="/" onClick={handleCloseOffcanvas} className='d-flex'>
                    <h1 className='mx-2.5 text-green-600 '>   <FaHouse /></h1>
                    <h6 className='mt-1 font-serif'>  Home</h6>
                  </Nav.Link>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        <Route path='/card' element={<New />} />
        <Route path='/sellcard' element={<SellerUploadForm />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/escrow' element={<Escrow />} />
        <Route path='/feedback' element={<Report />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default OffcanvasExample;






