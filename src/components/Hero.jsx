import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints, shadows } from '../styles/theme';
import { useApp } from '../context/AppContext';
import FloatingDollars from './FloatingDollars';
import FloatingCollectibles from './FloatingCollectibles';

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(203, 51, 50, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(203, 51, 50, 0.7), 0 0 60px rgba(203, 51, 50, 0.3);
  }
`;

const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  background: ${colors.darkBrown};
  overflow: hidden;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(230, 201, 86, 0.12) 0%, transparent 60%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const GlassContainer = styled(motion.div)`
  position: relative;
  z-index: 10;
  width: 95%;
  max-width: 1012px;
  text-align: center;
  background: rgba(253, 249, 238, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 32px;
  padding: 48px 40px;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 64px;
    width: 1100px;
  }
`;

const BackgroundCollectible = styled.img`
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 200px;
  object-fit: contain;
  opacity: 1;
  right: -80px;
  bottom: -40px;
  pointer-events: none;
  transform: rotate(-15deg);

  @media (min-width: ${breakpoints.tablet}) {
    width: 350px;
    height: 350px;
    right: -80px;
    bottom: -60px;
  }
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2.2rem, 7vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  color: ${colors.cream};
`;

const ToggleWord = styled(motion.span)`
  display: inline-block;
  color: ${colors.gold};
`;

const MobileBreak = styled.br`
  display: block;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: ${colors.cream};
  margin-bottom: 36px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
`;

const StatsRow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 48px;
  }
`;

const StatBox = styled.div`
  text-align: center;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${colors.cream};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
  opacity: 0.7;
`;

const StatValue = styled.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${colors.gold};
  font-family: 'Poppins', sans-serif;
`;

const JackpotValue = styled(StatValue)`
  font-size: clamp(2.5rem, 6vw, 3.2rem);
  text-shadow: 0 0 30px ${colors.gold}60, 0 0 60px ${colors.gold}30;
`;

const CountdownWrapper = styled(motion.div)`
  margin-top: 32px;
  z-index: 10;
  text-align: center;
`;

const CountdownLabel = styled.div`
  font-size: 12px;
  color: ${colors.cream};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
  opacity: 0.7;
`;

const CountdownContainer = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${colors.red};
  padding: 10px 19px;
  border-radius: 10px;
`;

const CountdownTime = styled.div`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 800;
  color: ${colors.cream};
  font-family: 'Poppins', monospace;
  letter-spacing: 2px;
  animation: ${glow} 1s infinite;

  span {
    font-size: 1em;
    font-weight: 800;
    margin-left: 2px;
    margin-right: 8px;
    letter-spacing: 0;
  }
`;

const CTAButton = styled(motion.button)`
  position: relative;
  z-index: 1;
  padding: 18px 48px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 12px;
  background: ${colors.red};
  color: ${colors.cream};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    background: ${colors.redDark};
    transform: translateY(-3px);
    box-shadow: ${shadows.glowRed};
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 20px 56px;
    font-size: 20px;
  }
`;


const toggleWords = ['Community', 'Movement', 'Family', 'Network'];

const Hero = () => {
  const navigate = useNavigate();
  const { playerCount, jackpot, playClick, playTick } = useApp();
  const [displayCount, setDisplayCount] = useState(playerCount);
  const [displayJackpot, setDisplayJackpot] = useState(jackpot);
  const [wordIndex, setWordIndex] = useState(0);

  // Toggle word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % toggleWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const [targetDate] = useState(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(20, 0, 0, 0);
    return target;
  });

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const duration = 400;
    const startCount = displayCount;
    const startJackpot = displayJackpot;
    const diffCount = playerCount - startCount;
    const diffJackpot = jackpot - startJackpot;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayCount(Math.round(startCount + diffCount * easeProgress));
      setDisplayJackpot(Math.round(startJackpot + diffJackpot * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [playerCount, jackpot]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours: totalHours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
      playTick();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, playTick]);

  const formatNumber = (num) => num.toString().padStart(2, '0');
  const formatPlayerCount = (num) => num.toLocaleString();
  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleCTA = () => {
    playClick();
    navigate('/dashboard');
  };

  return (
    <HeroSection id="hero">
      <BackgroundGlow />
      <FloatingDollars />
      <FloatingCollectibles />

      <GlassContainer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BackgroundCollectible src="/images/05.png" alt="" aria-hidden="true" />
        <Headline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The First{' '}
          <AnimatePresence mode="wait">
            <ToggleWord
              key={toggleWords[wordIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {toggleWords[wordIndex]}
            </ToggleWord>
          </AnimatePresence>
          <MobileBreak /> That Makes<br />Millionaires
        </Headline>

        <Subheadline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          No numbers to pick. No luck needed. Every draw has guaranteed winners, powered by a community that wins together. It's your turn.
        </Subheadline>

        <StatsRow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StatBox>
            <StatLabel>Players in Pool</StatLabel>
            <JackpotValue>{formatPlayerCount(displayCount)}</JackpotValue>
          </StatBox>

          <StatBox>
            <StatLabel>Current Jackpot</StatLabel>
            <JackpotValue>{formatCurrency(displayJackpot)}</JackpotValue>
          </StatBox>
        </StatsRow>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CTAButton
            onClick={handleCTA}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Now
          </CTAButton>
        </motion.div>

      </GlassContainer>

      <CountdownWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <CountdownLabel>Next Draw In</CountdownLabel>
        <CountdownContainer>
          <CountdownTime>
            {formatNumber(timeLeft.hours)}<span>h</span> : {formatNumber(timeLeft.minutes)}<span>min</span> : {formatNumber(timeLeft.seconds)}<span>sec</span>
          </CountdownTime>
        </CountdownContainer>
      </CountdownWrapper>
    </HeroSection>
  );
};

export default Hero;
