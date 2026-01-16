import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../styles/theme';

const floatClockwise = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
`;

const floatCounterClockwise = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(-360deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const DollarSign = styled.span`
  position: absolute;
  font-size: ${props => props.$size}px;
  color: ${props => props.$color};
  opacity: 0;
  animation: ${props => props.$clockwise ? floatClockwise : floatCounterClockwise} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$left}%;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 0 30px ${props => props.$color}50;
  user-select: none;
`;

const currencySymbols = ['$', '€', '¥'];

const FloatingDollars = () => {
  const items = useMemo(() => {
    const count = 18;
    const generated = [];

    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        size: Math.random() * 50 + 40, // 40-90px (bigger)
        left: Math.random() * 90 + 5, // 5-95% to avoid edges
        duration: Math.random() * 6 + 12, // 12-18s
        delay: Math.random() * 12, // 0-12s delay
        color: Math.random() > 0.4 ? colors.gold : colors.coral,
        clockwise: Math.random() > 0.5,
        symbol: currencySymbols[Math.floor(Math.random() * currencySymbols.length)],
      });
    }

    return generated;
  }, []);

  return (
    <Container>
      {items.map((item) => (
        <DollarSign
          key={item.id}
          $size={item.size}
          $left={item.left}
          $duration={item.duration}
          $delay={item.delay}
          $color={item.color}
          $clockwise={item.clockwise}
        >
          {item.symbol}
        </DollarSign>
      ))}
    </Container>
  );
};

export default FloatingDollars;
