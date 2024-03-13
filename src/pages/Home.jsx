// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel,Container, Row, Col, Card  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import PRODUCTS from '../data.js';

const PromotionCard = styled(Card)`
  margin: 10px;
`;

const PromotionImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const PromotionTitle = styled(Card.Title)`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const PromotionDescription = styled(Card.Text)`
  margin-top: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const OriginalPrice = styled.div`
  text-decoration: line-through;
  color: red;
`;

const DiscountedPrice = styled.div`
  font-weight: bold;
  color: green;
  margin-left: 15px; /* Adjust the margin as needed */
`;

const Home = () => {
  // Produits en vedette pour le carrousel
  const featuredProducts = PRODUCTS.slice(0, 3);
  const filteredProducts = PRODUCTS.filter((product) => [4, 11, 15].includes(product.id));
  
  return (
    <main>
      <div className="container">
        <h1>Welcome to Our Store!</h1>

        {/* Carrousel avec des produits en vedette */}
        <Carousel className="mt-4">
          {featuredProducts.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                className="d-block w-100"
                src={product.image}
                alt={product.name}
                style={{ width: '300px', height: '450px' }} // Ajout des styles ici
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
            <p>{product.details}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">DETAILS &#8594;</Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="mt-4">
          <h2>Special Offers</h2>
        </div>

        <Container>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={4}>
                <PromotionCard>
                  <PromotionImage variant="top" src={product.image} />
                  <Card.Body>
                    <PromotionTitle>{product.name}</PromotionTitle>
                    <PromotionDescription>{product.details}</PromotionDescription>
                    <PriceContainer>
                      <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
                      <DiscountedPrice>${(product.price * 0.8).toFixed(2)}</DiscountedPrice>
                    </PriceContainer>
                    <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm text-center" style={{ display: 'block', margin: '0 auto' }}>
                      DETAILS &#8594;
                    </Link>
                  </Card.Body>
                </PromotionCard>
              </Col>
            ))}
          </Row>
        </Container>
        
      </div>
    </main>
  );
}

export default Home;

// http://localhost:3000/#    