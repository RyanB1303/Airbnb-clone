import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import styled from "styled-components";

const FeatureContainer = styled.div`
  background: white;
  color: black;
  padding: 3%;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledContainer = styled(Container)`
  margin-left: 5rem;
  margin-right: 5rem;
`;

const StyledRow = styled(Row)`
  padding-top: 2%;
`;

const Feature = () => {
  useEffect(() => {
    runHolder("image-class-name");
  });

  return (
    <FeatureContainer>
      <StyledContainer fluid='true' className='mx-5 my-2'>
        <StyledRow>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3} className='py-2'>
            <Row>
              <Image src='holder.js/64x64' rounded />
              <Col>
                <p>Kuta</p>
                <p>6.5 Jam Berkendara</p>
              </Col>
            </Row>
          </Col>
        </StyledRow>
      </StyledContainer>
    </FeatureContainer>
  );
};

export default Feature;
