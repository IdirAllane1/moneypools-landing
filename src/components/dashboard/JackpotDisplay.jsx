import { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
`;

const pulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 30px ${colors.gold}60, 0 0 60px ${colors.gold}30;
  }
  50% {
    text-shadow: 0 0 50px ${colors.gold}80, 0 0 100px ${colors.gold}50;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const spin = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const confettiFly = keyframes`
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-400px) rotate(720deg) scale(0);
    opacity: 0;
  }
`;

const ConfettiPiece = styled.span`
  position: absolute;
  font-size: ${props => props.$size}px;
  color: ${props => props.$color};
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  animation: ${confettiFly} ${props => props.$duration}s ease-out forwards;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  text-shadow: 0 0 10px ${props => props.$color};
  pointer-events: none;
  z-index: 10;
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 30px ${colors.gold}50; }
  50% { box-shadow: 0 0 50px ${colors.gold}70; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  padding: 20px 14px;
  background: rgba(253, 249, 238, 0.03);
  border: 2px solid ${colors.gold};
  border-radius: 20px;
  animation: ${glow} 2s ease-in-out infinite;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 30px;
    border: 3px solid ${colors.gold};
    border-radius: 24px;
    height: auto;
    justify-content: center;
    gap: 0;
  }
`;

const AvatarWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;

  @media (min-width: ${breakpoints.tablet}) {
    flex: 1;
    gap: 16px;
  }
`;

const AvatarContainer = styled.div`
  perspective: 1000px;
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
`;

const ClickMeTooltip = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.gold};
  color: ${colors.darkBrown};
  font-weight: 700;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 20px;
  white-space: nowrap;
  animation: ${bounce} 1s ease-in-out infinite;
  box-shadow: 0 4px 15px ${colors.gold}50;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${colors.gold};
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Username = styled.h2`
  color: ${colors.cream};
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 4px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-top: 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

const Avatar = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 24px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 1.2s ease-in-out;

  ${AvatarContainer}:hover & {
    transform: rotateY(720deg);
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 340px;
    height: 340px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 500px;
    height: 500px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: auto;
    padding-bottom: 10px;
    width: auto;
  }
`;

const JackpotLabel = styled.div`
  color: ${colors.cream};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0.7;
  margin-bottom: 6px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
    letter-spacing: 4px;
    margin-bottom: 8px;
  }
`;

const JackpotAmount = styled.div`
  font-size: clamp(2.2rem, 12vw, 5rem);
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(
    90deg,
    ${colors.gold} 0%,
    #FFE566 25%,
    ${colors.gold} 50%,
    #FFE566 75%,
    ${colors.gold} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite, ${pulse} 2s ease-in-out infinite;
  line-height: 1;
  margin-bottom: 8px;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

const StatsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    gap: 40px;
    width: auto;
  }

  @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}) {
    gap: 24px;
  }
`;

const StatBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgba(253, 249, 238, 0.06);
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid rgba(253, 249, 238, 0.08);

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    background: transparent;
    padding: 0;
    border-radius: 0;
    border: none;
  }
`;

const StatValue = styled.div`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${props => props.$color || colors.cream};
  margin-bottom: 0;
  order: 2;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 4px;
    order: 1;
  }
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: ${colors.cream};
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  order: 1;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
    letter-spacing: 1px;
    order: 2;
  }
`;

const PoolBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(253, 249, 238, 0.08);
  border: 1px solid rgba(253, 249, 238, 0.15);
  padding: 8px 14px;
  border-radius: 30px;
  margin-top: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 8px 20px;
    margin-top: 24px;
  }
`;

const PoolDot = styled.div`
  width: 8px;
  height: 8px;
  background: ${colors.coral};
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }
`;

const PoolText = styled.span`
  color: ${colors.cream};
  font-size: 13px;
  font-weight: 500;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;

const MultiplierBadge = styled.div`
  background: linear-gradient(135deg, ${colors.red}, ${colors.coral});
  color: ${colors.cream};
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 8px;
  margin-left: 6px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
    margin-left: 8px;
  }
`;

const currencySymbols = ['$', '€', '¥'];
const confettiColors = [colors.gold, colors.coral, colors.red, '#FFE566'];

const JackpotDisplay = () => {
  const { pool, player, calculateOdds } = useDashboard();
  const [displayJackpot, setDisplayJackpot] = useState(pool.jackpot);
  const [displayPlayers, setDisplayPlayers] = useState(pool.activePlayers);
  const [confetti, setConfetti] = useState([]);
  const [showClickMe, setShowClickMe] = useState(true);

  const generateConfetti = useCallback(() => {
    const newConfetti = [];
    for (let i = 0; i < 60; i++) {
      newConfetti.push({
        id: Date.now() + i,
        symbol: currencySymbols[Math.floor(Math.random() * currencySymbols.length)],
        x: Math.random() * 90 + 5, // 5-95%
        y: Math.random() * 80 + 10, // 10-90%
        size: Math.random() * 30 + 20,
        duration: Math.random() * 1.5 + 2.5, // 2.5-4s
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      });
    }
    setConfetti(newConfetti);

    // Clear confetti after animation
    setTimeout(() => setConfetti([]), 4500);
  }, []);

  // Animate number changes
  useEffect(() => {
    const duration = 500;
    const startJackpot = displayJackpot;
    const startPlayers = displayPlayers;
    const diffJackpot = pool.jackpot - startJackpot;
    const diffPlayers = pool.activePlayers - startPlayers;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayJackpot(Math.round(startJackpot + diffJackpot * easeProgress));
      setDisplayPlayers(Math.round(startPlayers + diffPlayers * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [pool.jackpot, pool.activePlayers]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => num.toLocaleString();

  const odds = calculateOdds();

  return (
    <Container
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {confetti.map((piece) => (
        <ConfettiPiece
          key={piece.id}
          $x={piece.x}
          $y={piece.y}
          $size={piece.size}
          $duration={piece.duration}
          $color={piece.color}
        >
          {piece.symbol}
        </ConfettiPiece>
      ))}
      <AvatarWrapper
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <AvatarContainer
          onMouseEnter={generateConfetti}
          onClick={() => {
            setShowClickMe(false);
            generateConfetti();
          }}
        >
          <AnimatePresence>
            {showClickMe && (
              <ClickMeTooltip
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Click me!
              </ClickMeTooltip>
            )}
          </AnimatePresence>
          <Avatar src={player.avatar} alt={player.username} />
        </AvatarContainer>
        <Username>{player.username}</Username>
      </AvatarWrapper>

      <InfoSection>
        <JackpotLabel>Current Jackpot</JackpotLabel>
        <JackpotAmount>{formatCurrency(displayJackpot)}</JackpotAmount>

        <StatsRow>
          <StatBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StatValue $color={colors.coral}>{formatNumber(displayPlayers)}</StatValue>
            <StatLabel>Active Players</StatLabel>
          </StatBox>

          <StatBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <StatValue $color={colors.gold}>1 in {formatNumber(odds)}</StatValue>
            <StatLabel>Your Odds</StatLabel>
          </StatBox>

          <StatBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <StatValue>#{pool.currentDrawNumber}</StatValue>
            <StatLabel>Draw Number</StatLabel>
          </StatBox>
        </StatsRow>

        <PoolBadge>
          <PoolDot />
          <PoolText>You're in Pool #{player.currentPool}</PoolText>
          {player.ticketMultiplier > 1 && (
            <MultiplierBadge>{player.ticketMultiplier}x Tickets</MultiplierBadge>
          )}
        </PoolBadge>
      </InfoSection>
    </Container>
  );
};

export default JackpotDisplay;
