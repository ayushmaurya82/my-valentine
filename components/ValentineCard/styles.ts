import styled, { keyframes } from "styled-components";

const messageFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LottieFullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  & canvas {
    width: 100vw !important;
    width: 100svw !important;
    height: 100vh !important;
    height: 100svh !important;
    max-width: 100vw;
    max-height: 100vh;
    max-height: 100svh;
  }
`;

export const PageWrapper = styled.div`
  height: 100vh;
  height: 100svh;
  min-height: 100vh;
  min-height: 100svh;
  max-height: 100vh;
  max-height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fad0c4 100%);
`;

export const Page = styled.main`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const Footer = styled.footer`
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: rgba(45, 45, 45, 0.8);
  user-select: none;

  a {
    color: #e91e63;
    text-decoration: none;
    font-weight: 600;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 2rem;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const TeddyImageWrapper = styled.div`
  margin: 0 auto 1.5rem;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  border: 3px solid #fecfef;
  padding: 10px;
  flex-shrink: 0;
`;

export const TeddyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  color: #2d2d2d;
  font-weight: 500;
  opacity: 0;
  animation: ${messageFadeIn} 0.6s ease-out forwards;
  user-select: none;
`;

export const Name = styled.span`
  color: #e91e63;
  font-weight: 700;
  text-transform: capitalize;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const YesButton = styled.button`
  padding: 0.875rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #e91e63, #f06292);
  color: white;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.4);
  user-select: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(233, 30, 99, 0.5);
  }
`;

interface NoButtonWrapperProps {
  $left: number;
  $top: number;
}

export const NoMovementArea = styled.div``;

export const NoButtonWrapper = styled.div<NoButtonWrapperProps>`
  position: absolute;
  left: calc(${(p) => p.$left}px - 30px);
  top: calc(${(p) => p.$top}px - 30px);
  padding: 30px;
  transition:
    left 0.15s ease-out,
    top 0.15s ease-out;
`;

export const NoButton = styled.button`
  padding: 4px;
  font-size: 1.125rem;
  font-weight: 600;
  border: 2px solid rgb(193, 185, 188);
  border-radius: 12px;
  background: white;
  color: rgb(193, 185, 188);
  cursor: pointer;
  transition: transform 0.2s;
  user-select: none;

  &:hover {
    transform: scale(1.02);
  }
`;

export const HappyMessage = styled.div(()=>({
  marginTop: "2rem",
}))

