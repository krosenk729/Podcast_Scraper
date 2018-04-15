import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size='md-12'>
        <Jumbotron>
          <h1>404 : Not Found</h1>
        </Jumbotron>
        <Link to={'/'}>
        	Find your way back <FontAwesomeIcon icon={faHome} /> ...
        </Link>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
