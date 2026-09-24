import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 96px 24px 48px;
  background: #0a0a0a;
  color: #ffffff;
`;

export const Title = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 700;
  margin: 0 0 20px;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 520px;
  line-height: 1.7;
  margin: 0 0 16px;
`;