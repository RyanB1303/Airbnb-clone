import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import { run as runHolder } from "holderjs";

const FeatureContainer = styled.div`
  background: white;
  color: black;
  padding: 3%;
`;

const StyledRow = styled(Row)`
  padding-top: 2%;
`;

const StyledCaption = styled.p`
  font-weight: 700;
  font-size: larger;
`;

const Feature_4 = () => {
  useEffect(() => {
    runHolder("image-class-name");
  });
  return (
    <FeatureContainer>
      <Container fluid='true' className='mx-5'>
        <h1>Bergabunglah dengan jutaan tuan rumah di Airbnb</h1>
        <StyledRow>
          <Col>
            <Image src='holder.js/480x341' rounded />
            <StyledCaption>Terima Tamu di Rumah Anda</StyledCaption>
          </Col>
          <Col>
            <Image src='holder.js/480x341' rounded />
            <StyledCaption>Adakan Pengalaman Online</StyledCaption>
          </Col>
          <Col>
            <Image src='holder.js/480x341' rounded />
            <StyledCaption>Adakan Pengalaman</StyledCaption>
          </Col>
        </StyledRow>
      </Container>
    </FeatureContainer>
  );
};

export default Feature_4;
