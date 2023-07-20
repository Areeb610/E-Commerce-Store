import React, { useState, useEffect } from 'react';
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
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Product() {
    const [showBasic, setShowBasic] = useState(false);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a fake store API (replace with your actual API URL)
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setProducts(json));
}, []);
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

      <h1 className='heading-1'>Our Products</h1>
      <div className='d-flex flex-wrap cards' >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

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

}


function ProductCard({ product }) {
    return (
      <MDBCard className="h-100" style={{ width: '18rem' }}>
        <div className="card-image-container">
          <MDBCardImage src={product.image} alt={product.title} fluid className="card-image" />
        </div>
        <MDBCardBody>
          <MDBCardTitle>{product.title}</MDBCardTitle>
          <MDBCardText>
            {product.description.length > 100
              ? product.description.substring(0, 100) + '...' // Truncate long descriptions
              : product.description}
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }