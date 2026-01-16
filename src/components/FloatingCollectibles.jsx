import { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const floatClockwise = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-150px) rotate(720deg);
    opacity: 0;
  }
`;

const floatCounterClockwise = keyframes`
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-150px) rotate(-720deg);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Collectible = styled.img`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  object-fit: contain;
  opacity: 0;
  animation: ${props => props.$clockwise ? floatClockwise : floatCounterClockwise} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$left}%;
  user-select: none;
  filter: grayscale(20%) brightness(1.1);
`;

// Available collectible images
const collectibleImages = [
  '/images/01.png',
  '/images/03.png',
  '/images/04.png',
  '/images/05.png',
  '/images/06.png',
  '/images/07.png',
  '/images/08.png',
  '/images/09.png',
];

const FloatingCollectibles = () => {
  const items = useMemo(() => {
    const count = 8; // Fewer than dollar signs
    const generated = [];

    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        size: Math.random() * 100 + 80, // 80-180px (twice the dollar signs)
        left: Math.random() * 85 + 5, // 5-90% to avoid edges
        duration: Math.random() * 8 + 16, // 16-24s (slower than dollars)
        delay: Math.random() * 15, // 0-15s delay
        image: collectibleImages[Math.floor(Math.random() * collectibleImages.length)],
        clockwise: Math.random() > 0.5,
      });
    }

    return generated;
  }, []);

  return (
    <Container>
      {items.map((item) => (
        <Collectible
          key={item.id}
          src={item.image}
          alt=""
          aria-hidden="true"
          $size={item.size}
          $left={item.left}
          $duration={item.duration}
          $delay={item.delay}
          $clockwise={item.clockwise}
        />
      ))}
    </Container>
  );
};

export default FloatingCollectibles;
