import styled from "styled-components";

export const LandingContainer = styled.div`
  padding: 20px;
  height: 20vh;
  background: #cdb79e;
  color: black;
`;

export const CTAButton = styled.button`
  padding: 5px;
  color: black;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  &:hover {
    color: red;
    transform: scale(1.25);
  }
`;
