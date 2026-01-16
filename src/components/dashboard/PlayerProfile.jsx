import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${colors.gold}40; }
  50% { box-shadow: 0 0 40px ${colors.gold}60; }
`;

const multiplierPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 20px ${colors.coral}60, 0 0 40px ${colors.coral}30;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 30px ${colors.coral}80, 0 0 60px ${colors.coral}50;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1) rotate(180deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
`;


const Container = styled(motion.div)`
  background: rgba(253, 249, 238, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(253, 249, 238, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 28px;
  object-fit: cover;
  border: 5px solid ${colors.gold};
  animation: ${float} 3s ease-in-out infinite, ${glow} 2s ease-in-out infinite;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}) {
    width: 140px;
    height: 140px;
    border-radius: 20px;
    border: 3px solid ${colors.gold};
    cursor: default;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 160px;
    height: 160px;
  }
`;

const ClickMeTooltip = styled(motion.div)`
  position: absolute;
  top: -45px;
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


const LevelBadge = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${colors.gold}, #D4A84B);
  color: ${colors.darkBrown};
  font-weight: 800;
  font-size: 12px;
  padding: 6px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 15px ${colors.gold}50;
`;

const Username = styled.h2`
  color: ${colors.cream};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4px;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const TierBadge = styled.div`
  background: ${props => props.$tier === 'Pro'
    ? `linear-gradient(135deg, ${colors.gold}, #D4A84B)`
    : `linear-gradient(135deg, ${colors.coral}, ${colors.red})`};
  color: ${props => props.$tier === 'Pro' ? colors.darkBrown : colors.cream};
  font-weight: 700;
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const StatsGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 12px;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(253, 249, 238, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(253, 249, 238, 0.05);
`;

const StatLabel = styled.span`
  color: ${colors.cream};
  opacity: 0.6;
  font-size: 13px;
`;

const StatValue = styled.span`
  color: ${props => props.$highlight ? colors.gold : colors.cream};
  font-weight: 600;
  font-size: 14px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(253, 249, 238, 0.1);
  margin: 16px 0;
`;

const UpgradeButton = styled(motion.button)`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, ${colors.gold}, #D4A84B);
  color: ${colors.darkBrown};
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: auto;
  display: ${props => props.$show ? 'block' : 'none'};
`;

const BillingInfo = styled.div`
  text-align: center;
  margin-top: 12px;
`;

const BillingText = styled.p`
  color: ${colors.cream};
  opacity: 0.5;
  font-size: 11px;
`;

const MultiplierBadge = styled(motion.div)`
  width: 100%;
  background: linear-gradient(135deg, ${colors.red}, ${colors.coral});
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  animation: ${multiplierPulse} 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: ${shimmer} 2s infinite;
  }
`;

const MultiplierContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const MultiplierLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const MultiplierLabel = styled.span`
  font-size: 11px;
  color: ${colors.cream};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
`;

const MultiplierText = styled.span`
  font-size: 13px;
  color: ${colors.cream};
  font-weight: 600;
`;

const MultiplierValue = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${colors.cream};
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  position: relative;
`;

const MultiplierX = styled.span`
  font-size: 1.5rem;
  margin-left: 2px;
  opacity: 0.9;
`;

const SparkleIcon = styled.span`
  position: absolute;
  font-size: 14px;
  animation: ${sparkle} 1.5s ease-in-out infinite;

  &:nth-child(1) {
    top: -8px;
    right: -5px;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: -5px;
    left: -8px;
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    bottom: -5px;
    right: -8px;
    animation-delay: 1s;
  }
`;

const OddsBoost = styled.div`
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const OddsText = styled.span`
  font-size: 12px;
  color: ${colors.cream};
  opacity: 0.9;

  strong {
    color: ${colors.gold};
    font-weight: 700;
  }
`;

const PlayerProfile = () => {
  const { player, pool, calculateOdds } = useDashboard();
  const [showClickMe, setShowClickMe] = useState(true);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const hasMultiplier = player.ticketMultiplier > 1;
  const boostedOdds = calculateOdds();

  const handleAvatarClick = () => {
    setShowClickMe(false);
  };

  return (
    <Container
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AvatarWrapper>
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
        <Avatar
          src={player.avatar}
          alt={player.username}
          onClick={handleAvatarClick}
        />
        <LevelBadge>LVL {player.level}</LevelBadge>
      </AvatarWrapper>

      <Username>{player.username}</Username>
      <TierBadge $tier={player.subscriptionTier}>
        {player.subscriptionTier} Member
      </TierBadge>

      {hasMultiplier && (
        <MultiplierBadge
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <MultiplierContent>
            <MultiplierLeft>
              <MultiplierLabel>Active Boost</MultiplierLabel>
              <MultiplierText>{player.ticketMultiplier} tickets this draw</MultiplierText>
            </MultiplierLeft>
            <MultiplierValue>
              <SparkleIcon>✨</SparkleIcon>
              <SparkleIcon>⚡</SparkleIcon>
              <SparkleIcon>✨</SparkleIcon>
              {player.ticketMultiplier}<MultiplierX>X</MultiplierX>
            </MultiplierValue>
          </MultiplierContent>
          <OddsBoost>
            <OddsText>
              Your odds: <strong>1 in {boostedOdds.toLocaleString()}</strong>
            </OddsText>
          </OddsBoost>
        </MultiplierBadge>
      )}

      <StatsGrid>
        <StatItem>
          <StatLabel>Member Since</StatLabel>
          <StatValue>{player.memberSince}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Total Winnings</StatLabel>
          <StatValue $highlight>{formatCurrency(player.totalWinnings)}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Draws Entered</StatLabel>
          <StatValue>{player.drawsParticipated}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Draws Won</StatLabel>
          <StatValue $highlight>{player.drawsWon}</StatValue>
        </StatItem>
      </StatsGrid>

      <Divider />

      <UpgradeButton
        $show={player.subscriptionTier === 'Starter'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Upgrade to Pro
      </UpgradeButton>

      <BillingInfo>
        <BillingText>Next billing: {player.nextBilling}</BillingText>
      </BillingInfo>
    </Container>
  );
};

export default PlayerProfile;
