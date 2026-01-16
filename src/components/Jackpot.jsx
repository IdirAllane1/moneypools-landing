import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, breakpoints, shadows } from '../styles/theme';
import { useApp } from '../context/AppContext';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${colors.gold}40; }
  50% { box-shadow: 0 0 40px ${colors.gold}60; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const Section = styled.section`
  padding: 100px 24px;
  background: ${colors.cream};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  text-align: center;
  margin-bottom: 20px;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  color: ${colors.darkBrown};
  line-height: 1.2;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${colors.gold}, transparent);
    border-radius: 2px;

    @media (min-width: ${breakpoints.tablet}) {
      width: 600px;
      height: 4px;
    }
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 0.95rem;
  color: ${colors.darkBrown};
  text-align: center;
  max-width: 900px;
  margin: 0 auto 56px;
  font-weight: 500;
  line-height: 1.6;
  animation: ${float} 3s ease-in-out infinite;

  span {
    color: ${colors.red};
    font-weight: 700;
  }
`;

const JackpotCard = styled(motion.div)`
  background: ${colors.darkBrown};
  border-radius: 24px;
  padding: 48px 32px;
  text-align: center;
  margin-bottom: 48px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(230, 201, 86, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const JackpotLabel = styled.div`
  font-size: 14px;
  color: ${colors.cream};
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  opacity: 0.8;
`;

const JackpotAmount = styled.div`
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 900;
  color: ${colors.gold};
  font-family: 'Poppins', sans-serif;
  line-height: 1;
  margin-bottom: 12px;
  text-shadow: ${shadows.glow};
`;

const JackpotNote = styled.div`
  font-size: 1rem;
  color: ${colors.cream};
  opacity: 0.7;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HighlightCard = styled(motion.div)`
  background: ${colors.darkBrown};
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 2px solid ${props => props.$variant === 'gold' ? colors.gold : colors.coral};
  animation: ${glow} 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 0%,
      ${props => props.$variant === 'gold' ? `${colors.gold}20` : `${colors.coral}20`} 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
  position: relative;
`;

const AvatarImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  border: 3px solid ${props => props.$color || colors.gold};
  box-shadow: 0 0 30px ${props => props.$color || colors.gold}40;
`;

const HighlightBadge = styled.div`
  display: inline-block;
  background: ${props => props.$variant === 'gold'
    ? `linear-gradient(135deg, ${colors.gold}, #FFE566)`
    : `linear-gradient(135deg, ${colors.coral}, ${colors.red})`};
  color: ${colors.darkBrown};
  font-size: 14px;
  font-weight: 800;
  padding: 8px 20px;
  border-radius: 30px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HighlightTitle = styled.h3`
  font-size: 1.8rem;
  color: ${colors.cream};
  margin-bottom: 16px;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

const HighlightValue = styled.div`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  color: ${props => props.$color || colors.gold};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 16px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  color: ${colors.cream};
  opacity: 0.8;
  line-height: 1.7;
  max-width: 280px;
  margin: 0 auto;
`;

const Jackpot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { playerCount, jackpot } = useApp();

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <Section id="prizes" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Jackpot Grows With You
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          More players means <span>bigger prizes</span>. The jackpot equals the total number of players in your pool. For every new million players, a new pool gets started.
        </SectionSubtitle>

        <JackpotCard
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <JackpotLabel>Current Jackpot</JackpotLabel>
          <JackpotAmount>{formatCurrency(jackpot)}</JackpotAmount>
          <JackpotNote>Growing with every new player</JackpotNote>
        </JackpotCard>

        <HighlightGrid>
          <HighlightCard
            $variant="gold"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <IconWrapper>
              <AvatarImage
                src="/images/06.png"
                alt="Fair Odds"
                $color={colors.gold}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </IconWrapper>
            <HighlightBadge $variant="gold">Transparent</HighlightBadge>
            <HighlightTitle>Fair Odds for Everyone</HighlightTitle>
            <HighlightValue $color={colors.gold}>
              1 in {playerCount.toLocaleString()}
            </HighlightValue>
            <HighlightText>
              Your odds are always equal to the number of players in the pool. Simple, transparent, and fair for everyone.
            </HighlightText>
          </HighlightCard>

          <HighlightCard
            $variant="coral"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <IconWrapper>
              <AvatarImage
                src="/images/04.png"
                alt="Guaranteed Winner"
                $color={colors.coral}
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </IconWrapper>
            <HighlightBadge $variant="coral">Every Draw</HighlightBadge>
            <HighlightTitle>Guaranteed Winner</HighlightTitle>
            <HighlightValue $color={colors.coral}>
              100%
            </HighlightValue>
            <HighlightText>
              Every single draw produces a winner. No rollovers, no empty rounds. Someone always wins the jackpot.
            </HighlightText>
          </HighlightCard>
        </HighlightGrid>
      </Container>
    </Section>
  );
};

export default Jackpot;
