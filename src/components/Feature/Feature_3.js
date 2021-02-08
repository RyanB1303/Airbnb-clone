import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import { run as runHolder } from "holderjs";

const FeatureContainer = styled.div`
  background: black;
  color: white;
  padding: 3%;
`;

const StyledRow = styled(Row)`
  padding-top: 2%;
`;

const Feature_3 = () => {
  useEffect(() => {
    runHolder("image-class-name");
  });
  return (
    <FeatureContainer>
      <Container fluid='true' className='mx-5'>
        <h1>Rasakan pengalaman dunia</h1>
        <p>Aktivitas unik dengan pakar lokal—secara tatap muka atau online.</p>

        <StyledRow>
          <Col>
            <Image src='holder.js/341x341' rounded />
          </Col>
          <Col>
            <Image src='holder.js/341x341' rounded />
          </Col>
          <Col>
            <Image src='holder.js/341x341' rounded />
          </Col>
        </StyledRow>
      </Container>
    </FeatureContainer>
  );
};

export default Feature_3;
