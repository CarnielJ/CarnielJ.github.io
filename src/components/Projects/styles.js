import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 96px 24px 48px;
  background: #0a0a0a;
  color: #ffffff;
`;

export const Title = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 700;
  text-align: center;
  margin: 0 0 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  max-width: 960px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: #131313;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.25);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 8px;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  margin: 0;
`;