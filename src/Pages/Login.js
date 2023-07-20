import React, { useState } from 'react';
import { 
MDBContainer,
 MDBRow,
  MDBCol,
   MDBBtn,
    MDBNavbar,
        MDBNavbarBrand,
            MDBNavbarToggler,
                MDBIcon,
                MDBNavbarNav,
                MDBNavbarItem,
                MDBNavbarLink,
                MDBCollapse

} from 'mdb-react-ui-kit';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showBasic, setShowBasic] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your logic to handle the login form submission
    console.log(formData);
  };

  return (
    <div>
        <MDBNavbar expand='lg' light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='./' className='text-white'>
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
                <MDBNavbarLink active aria-current='page' href='./' className='text-white'>
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

      <MDBContainer style={{marginBottom:50}}>
        <h1 className="text-center mt-5 mb-4">Login</h1>
        <MDBRow className="justify-content-center">
          <MDBCol md="6">
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-grid">
                <MDBBtn type="submit" color="primary">
                  Login
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
              <li><a href="./" className='text-white'>Home</a></li>
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
  );
};

export default Login;
