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

export default function Cart() {
  const [showBasic, setShowBasic] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching first 3 product items from the server (replace with your actual API call)
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data && data.length > 0) {
          setProducts(data);
        }
      });
  }, []);

  const handleIncreaseItem = (itemId) => {
    // Simulate increasing the quantity of the item in the cart (replace with your actual logic)
    const updatedProducts = products.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity ? item.quantity + 1 : 1 };
      }
      return item;
    });

    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    // Calculate the total price of all items in the cart
    return products.reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
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

      <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 20 }}>Cart</h1>

      {/* Cart Section */}
      <MDBContainer className="my-5">
        {products.map(item => (
          <MDBCard key={item.id} className="shadow-sm mb-4">
            <MDBCardImage src={item.image} alt={item.title} top fluid style={{width:'20%'}} />
            <MDBCardBody>
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardText>
                Price: ${item.price} <br />
                Quantity: {item.quantity || 0} <br />
                Subtotal: ${item.price * (item.quantity || 0)}
              </MDBCardText>
              <MDBBtn color="primary" onClick={() => handleIncreaseItem(item.id)}>
                Increase Quantity
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBContainer>

      {/* Cart Total */}
      <div className="text-center">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>

      {/* Checkout and Continue Shopping Buttons */}
      <div className="d-flex justify-content-center my-4">
        <MDBBtn color="success" className="me-2">
          Checkout
        </MDBBtn>
        <MDBBtn color="primary">
          Continue Shopping
        </MDBBtn>
      </div>

      {/* Footer */}
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
