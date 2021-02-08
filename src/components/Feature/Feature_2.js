import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import styled from "styled-components";

const FeatureContainer = styled.div`
  background: white;
  color: black;
  padding: 3%;
`;

const StyledRow = styled(Row)`
  padding-top: 2%;
`;

const Feature_2 = () => {
  useEffect(() => {
    runHolder("image-class-name");
  });
  return (
    <FeatureContainer>
      <Container fluid='true' className='mx-5 my-5'>
        <h1>Tinggal Di Mana Saja</h1>
        <StyledRow>
          <Col xs={6} md={4} lg={3}>
            <Image
              src='holder.js/361x361'
              className='w-100 mw-25 h-100'
              rounded
            />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Image
              src='holder.js/361x361'
              className='w-100 mw-25 h-100'
              rounded
            />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Image
              src='holder.js/361x361'
              className='w-100 mw-25 h-100'
              rounded
            />
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Image
              src='holder.js/361x361'
              className='w-100 mw-25 h-100'
              rounded
            />
          </Col>
        </StyledRow>
      </Container>
    </FeatureContainer>
  );
};

export default Feature_2;
