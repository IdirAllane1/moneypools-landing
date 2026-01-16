import { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, breakpoints } from '../styles/theme';
import { useApp } from '../context/AppContext';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
`;

const urgentPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Section = styled.section`
  padding: 120px 24px;
  background: ${colors.darkBrown};
  position: relative;
  overflow: hidden;
  min-height: 60vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 0%, rgba(230, 201, 86, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(203, 51, 50, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(203, 51, 50, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const UrgencyBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${colors.red}, ${colors.coral});
  padding: 10px 24px;
  border-radius: 50px;
  margin-bottom: 24px;
  animation: ${urgentPulse} 2s ease-in-out infinite;
`;

const UrgencyDot = styled.span`
  width: 8px;
  height: 8px;
  background: ${colors.cream};
  border-radius: 50%;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
`;

const UrgencyText = styled.span`
  color: ${colors.cream};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${colors.cream};
  margin-bottom: 16px;
  line-height: 1.1;
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${colors.cream};
  opacity: 0.8;
  margin-bottom: 40px;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    white-space: normal;
    font-size: 1rem;
  }
`;


const CTAWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
`;

const CTAButton = styled(motion.button)`
  padding: 22px 64px;
  font-size: 20px;
  font-weight: 800;
  border-radius: 16px;
  background: linear-gradient(135deg, ${colors.red}, ${colors.coral});
  color: ${colors.cream};
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  animation: ${pulse} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${shimmer} 3s infinite;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(203, 51, 50, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 18px 48px;
    font-size: 18px;
  }
`;

const SpotsWarning = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  padding: 12px 24px;
  background: rgba(203, 51, 50, 0.2);
  border: 1px solid ${colors.red}40;
  border-radius: 50px;
  display: inline-flex;
`;

const WarningIcon = styled.span`
  font-size: 16px;
`;

const WarningText = styled.span`
  color: ${colors.coral};
  font-size: 14px;
  font-weight: 600;
`;

const TrustBadges = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
  }
`;

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.cream};
  opacity: 0.6;
  font-size: 13px;
`;

const TrustIcon = styled.span`
  font-size: 16px;
`;

const BackgroundAvatar = styled.img`
  position: absolute;
  width: 460px;
  height: 460px;
  object-fit: contain;
  opacity: 1;
  pointer-events: none;
  z-index: 0;

  &.left {
    left: 420px;
    bottom: -107px;
    transform: rotate(-10deg);
  }

  &.right {
    right: 420px;
    bottom: -107px;
    transform: rotate(10deg);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
    height: 280px;

    &.left {
      left: 150px;
      bottom: -60px;
    }

    &.right {
      right: 150px;
      bottom: -60px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openSignUpModal, playClick } = useApp();

  const [recentJoinCount, setRecentJoinCount] = useState(47);

  // Animate recent join count
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setRecentJoinCount(prev => prev + Math.floor(Math.random() * 2));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const handleCTA = () => {
    playClick();
    openSignUpModal();
  };

  return (
    <Section ref={ref}>
      <BackgroundAvatar className="left" src="/images/03.png" alt="" />
      <BackgroundAvatar className="right" src="/images/05.png" alt="" />
      <Container>
        <UrgencyBadge
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <UrgencyDot />
          <UrgencyText>Next Draw Closing Soon</UrgencyText>
        </UrgencyBadge>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Don't Miss Your Chance
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The jackpot is climbing. Join now before it's too late.
        </Subtitle>


        <CTAWrapper
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTAButton
            onClick={handleCTA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join MoneyPools Now!
          </CTAButton>
        </CTAWrapper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SpotsWarning>
            <WarningIcon>⚡</WarningIcon>
            <WarningText>{recentJoinCount} people joined in the last hour</WarningText>
          </SpotsWarning>
        </motion.div>

        <TrustBadges
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TrustBadge>
            <TrustIcon>🔒</TrustIcon>
            Secure Payments
          </TrustBadge>
          <TrustBadge>
            <TrustIcon>✓</TrustIcon>
            Cancel Anytime
          </TrustBadge>
          <TrustBadge>
            <TrustIcon>💳</TrustIcon>
            No Hidden Fees
          </TrustBadge>
        </TrustBadges>

      </Container>
    </Section>
  );
};

export default FinalCTA;
