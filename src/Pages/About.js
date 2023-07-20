import React, { useState} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
    const [showBasic, setShowBasic] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your logic to handle the form submission
        console.log(formData);
      };
    return (
    <div>
         <MDBNavbar expand='lg' light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='./Home' className='text-white'>
            Areeb's Store
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='./Home' className='text-white'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='./Products' className='text-white'>
                  Products
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='./Cart' className='text-white'>
                  Cart
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='./About' className='text-white'>
                  About Us
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className='d-flex align-items-center'>
              <MDBBtn href='./Login' className='text-white'>
                Login
              </MDBBtn>

              <MDBBtn href='./Register' className='text-white'>
                Signup
              </MDBBtn>
            </div>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }}>Contact Us</h1>


      <MDBContainer style={{marginBottom:50}}>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <div className="d-grid">
              <MDBBtn type="submit" color="primary">
                Submit
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>



      <footer className="bg-primary text-white py-4">
        <MDBContainer>
          <div className="row">
            <div className="col-md-4">
              <h5>Areeb's Store</h5>
              <p>
                At Our Ecommerce Store, we are passionate about providing exceptional products and an unparalleled shopping experience. We strive to offer a curated selection of high-quality items that meet the diverse needs and tastes of our valued customers.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Links</h5>
              <ul className="list-unstyled">
              <li><a href="./Home" className='text-white'>Home</a></li>
              <li><a href="./Products" className='text-white'>Products</a></li>
              <li><a href="./Cart" className='text-white'>Cart</a></li>
              <li><a href="./About" className='text-white'>About Us</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className='text-white'>Facebook</a></li>
                <li><a href="#!" className='text-white'>Twitter</a></li>
                <li><a href="#!" className='text-white'>Instagram</a></li>
                <li><a href="#!" className='text-white'>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Areeb's Store. All rights reserved.</p>
          </div>
        </MDBContainer>
      </footer>
        </div>
    )
}