import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints, transitions } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px ${colors.gold}, 0 0 20px ${colors.gold}80, 0 0 30px ${colors.gold}60;
  }
  50% {
    box-shadow: 0 0 15px ${colors.gold}, 0 0 30px ${colors.gold}, 0 0 45px ${colors.gold}80;
  }
`;

const activeGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px ${colors.gold}60, 0 0 30px ${colors.gold}40;
  }
  50% {
    box-shadow: 0 0 25px ${colors.gold}80, 0 0 50px ${colors.gold}60;
  }
`;

const inactiveGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px ${colors.red}50, 0 0 25px ${colors.red}30;
  }
  50% {
    box-shadow: 0 0 25px ${colors.red}70, 0 0 40px ${colors.red}50;
  }
`;

const wiggle = keyframes`
  0%, 90%, 100% {
    transform: rotate(0deg);
  }
  92% {
    transform: rotate(-3deg);
  }
  94% {
    transform: rotate(3deg);
  }
  96% {
    transform: rotate(-3deg);
  }
  98% {
    transform: rotate(3deg);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const MobileActionButton = styled(motion.button)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  background: ${props => {
    if (props.$active) return `linear-gradient(135deg, ${colors.gold}, #D4A84B)`;
    if (props.$variant === 'primary') return `linear-gradient(135deg, ${colors.red}, ${colors.coral})`;
    return 'rgba(253, 249, 238, 0.08)';
  }};
  border: 1px solid ${props => (props.$variant === 'primary' || props.$active)
    ? 'transparent'
    : 'rgba(253, 249, 238, 0.15)'};
  border-radius: 16px;
  cursor: pointer;
  transition: all ${transitions.normal};
  ${props => props.$active && css`
    animation: ${activeGlow} 2s ease-in-out infinite;
  `}
  ${props => props.$variant === 'primary' && !props.$active && css`
    animation: ${inactiveGlow} 2s ease-in-out infinite, ${wiggle} 3s ease-in-out infinite;
  `}

  svg {
    width: 26px;
    height: 26px;
    color: ${props => props.$active ? colors.darkBrown : (props.$variant === 'primary' ? colors.cream : colors.gold)};
  }
`;

const ActionButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: ${props => {
    if (props.$active) return `linear-gradient(135deg, ${colors.gold}, #D4A84B)`;
    if (props.$variant === 'primary') return `linear-gradient(135deg, ${colors.red}, ${colors.coral})`;
    return 'rgba(253, 249, 238, 0.05)';
  }};
  border: 1px solid ${props => (props.$variant === 'primary' || props.$active)
    ? 'transparent'
    : 'rgba(253, 249, 238, 0.1)'};
  border-radius: 16px;
  cursor: pointer;
  transition: all ${transitions.normal};
  ${props => props.$active && css`
    animation: ${activeGlow} 2s ease-in-out infinite;
  `}
  ${props => props.$variant === 'primary' && !props.$active && css`
    animation: ${inactiveGlow} 2s ease-in-out infinite, ${wiggle} 3s ease-in-out infinite;
  `}

  &:hover {
    background: ${props => {
      if (props.$active) return `linear-gradient(135deg, #D4A84B, ${colors.gold})`;
      if (props.$variant === 'primary') return `linear-gradient(135deg, ${colors.coral}, ${colors.red})`;
      return 'rgba(253, 249, 238, 0.1)';
    }};
    border-color: ${props => (props.$variant === 'primary' || props.$active)
      ? 'transparent'
      : 'rgba(253, 249, 238, 0.2)'};
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px 12px;
    gap: 8px;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => (props.$variant === 'primary' || props.$active)
    ? 'rgba(255, 255, 255, 0.25)'
    : `rgba(230, 201, 86, 0.15)`};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.$active ? colors.darkBrown : (props.$variant === 'primary' ? colors.cream : colors.gold)};
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ButtonLabel = styled.span`
  color: ${props => props.$active ? colors.darkBrown : colors.cream};
  font-size: ${props => props.$active ? '15px' : '14px'};
  font-weight: ${props => props.$active ? 800 : 600};
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${props => props.$active ? '13px' : '12px'};
  }
`;

const ButtonDescription = styled.span`
  color: ${props => props.$active ? colors.darkBrown : colors.cream};
  opacity: ${props => props.$active ? 0.7 : 0.5};
  font-size: 11px;
  text-align: center;
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Notification = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 10px;
  background: linear-gradient(135deg, ${colors.gold}, #FFE566);
  color: ${colors.darkBrown};
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  animation: ${glowPulse} 1.5s ease-in-out infinite;
  z-index: 10;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent;
    border-top-color: ${colors.gold};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 10px;
    padding: 8px 12px;
  }
`;

const CloseNotification = styled.span`
  margin-left: 8px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;


// Icons
const SyndicateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

const MultiplierIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="9" y2="15" />
  </svg>
);

const InviteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const ActionButtons = ({ isMobile = false }) => {
  const {
    player,
    setSyndicateModalOpen,
    setGiftModalOpen,
    setMultiplierModalOpen,
    setInviteModalOpen,
  } = useDashboard();

  const [showNotification, setShowNotification] = useState(false);
  const hasActiveMultiplier = player.ticketMultiplier > 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInviteClick = () => {
    setShowNotification(false);
    setInviteModalOpen(true);
  };

  const buttons = [
    {
      label: 'Start Syndicate',
      description: 'Team up with friends',
      icon: <SyndicateIcon />,
      onClick: () => setSyndicateModalOpen(true),
      variant: 'secondary',
    },
    {
      label: 'Gift Ticket',
      description: 'Send to a friend',
      icon: <GiftIcon />,
      onClick: () => setGiftModalOpen(true),
      variant: 'secondary',
    },
    {
      label: 'Multiplier',
      description: 'Boost your odds',
      icon: <MultiplierIcon />,
      onClick: () => setMultiplierModalOpen(true),
      variant: 'primary',
    },
    {
      label: 'Invite Friends',
      description: 'Multiply your odds',
      icon: <InviteIcon />,
      onClick: handleInviteClick,
      variant: 'secondary',
    },
  ];

  // Mobile layout - icon only buttons
  if (isMobile) {
    return (
      <MobileContainer>
        {buttons.map((button, index) => {
          const isMultiplierButton = button.label === 'Multiplier';
          const isActive = isMultiplierButton && hasActiveMultiplier;

          return (
            <MobileActionButton
              key={button.label}
              $variant={button.variant}
              $active={isActive}
              onClick={button.onClick}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              {button.icon}
            </MobileActionButton>
          );
        })}
      </MobileContainer>
    );
  }

  // Desktop layout
  return (
    <Container>
      {buttons.slice(0, 3).map((button, index) => {
        const isMultiplierButton = button.label === 'Multiplier';
        const isActive = isMultiplierButton && hasActiveMultiplier;
        const buttonContent = (
          <ActionButton
            key={button.label}
            $variant={button.variant}
            $active={isActive}
            onClick={button.onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <IconWrapper $variant={button.variant} $active={isActive}>
              {button.icon}
            </IconWrapper>
            <ButtonLabel $active={isActive}>
              {isActive
                ? 'Multiplier Active'
                : (isMultiplierButton ? 'Activate Multiplier' : button.label)}
            </ButtonLabel>
            <ButtonDescription $active={isActive}>
              {isActive
                ? 'Tap to change'
                : button.description}
            </ButtonDescription>
          </ActionButton>
        );

        return buttonContent;
      })}

      <ButtonWrapper>
        <AnimatePresence>
          {showNotification && (
            <Notification
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: -10, x: '-50%' }}
              onClick={handleInviteClick}
            >
              Increase Winning Chances by up to 10X NOW!
              <CloseNotification onClick={(e) => { e.stopPropagation(); setShowNotification(false); }}>
                ✕
              </CloseNotification>
            </Notification>
          )}
        </AnimatePresence>
        <ActionButton
          $variant="secondary"
          onClick={handleInviteClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ flex: 1 }}
        >
          <IconWrapper $variant="secondary">
            <InviteIcon />
          </IconWrapper>
          <ButtonLabel>Invite Friends</ButtonLabel>
          <ButtonDescription>Multiply your odds</ButtonDescription>
        </ActionButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ActionButtons;
