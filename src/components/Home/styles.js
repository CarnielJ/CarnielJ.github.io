import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(64px, 12vw, 180px);
  flex-wrap: wrap;
  padding: 120px 24px 48px;
  background: #0a0a0a;
  color: #ffffff;
`;

export const TextBlock = styled.div`
  max-width: 420px;
  text-align: left;

  @media (max-width: 700px) {
    text-align: center;
  }
`;

export const Greeting = styled.span`
  display: block;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 8px;
`;

export const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.15;
`;

export const Tagline = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.6;
  margin: 0;
`;

export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ProfilePicture = styled.div`
  width: clamp(160px, 22vw, 220px);
  height: clamp(160px, 22vw, 220px);
  border-radius: 50%;
  overflow: hidden;
  background: #131313;
  border: 2px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #131313;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;

  &:hover {
    background: #ffffff;
    color: #0a0a0a;
    transform: translateY(-2px);
  }
    
`;

