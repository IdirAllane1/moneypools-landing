import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { colors, breakpoints } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

const urgentPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px ${colors.red}40;
    border-color: ${colors.red}60;
  }
  50% {
    box-shadow: 0 0 40px ${colors.red}70;
    border-color: ${colors.red};
  }
`;

const Container = styled(motion.div)`
  background: rgba(253, 249, 238, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(253, 249, 238, 0.1);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.$urgent && css`
    animation: ${urgentPulse} 1.5s ease-in-out infinite;
  `}
`;

const Label = styled.div`
  color: ${colors.cream};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0.7;
  margin-bottom: 20px;
`;

const TimeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

const TimeValue = styled.div`
  background: rgba(21, 1, 0, 0.6);
  border: 1px solid ${props => props.$urgent ? colors.red : 'rgba(253, 249, 238, 0.15)'};
  border-radius: 14px;
  padding: 14px 20px;
  width: 84px;

  span {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.$urgent ? colors.red : colors.cream};
    font-family: 'Poppins', monospace;
    display: block;
    text-align: center;
  }
`;

const TimeLabel = styled.div`
  color: ${colors.cream};
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  font-weight: 500;
`;

const Separator = styled.span`
  display: none;
`;

const DrawInfo = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const DrawNumber = styled.div`
  color: ${colors.gold};
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 5px;
`;

const DrawDate = styled.div`
  color: ${colors.cream};
  opacity: 0.5;
  font-size: 14px;
`;

const UrgentMessage = styled(motion.div)`
  margin-top: 16px;
  padding: 8px 16px;
  background: ${colors.red}20;
  border: 1px solid ${colors.red}40;
  border-radius: 8px;
  color: ${colors.coral};
  font-size: 12px;
  font-weight: 600;
`;

const CountdownTimer = () => {
  const { nextDraw, pool } = useDashboard();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = nextDraw - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
      setBlink(prev => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, [nextDraw]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 24;
  const totalHours = timeLeft.days * 24 + timeLeft.hours;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-IE', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Container
      $urgent={isUrgent}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Label>Next Draw In</Label>

      <TimeDisplay>
        <TimeUnit>
          <TimeValue $urgent={isUrgent}>
            <span>{formatNumber(timeLeft.days)}</span>
          </TimeValue>
          <TimeLabel>Days</TimeLabel>
        </TimeUnit>

        <TimeUnit>
          <TimeValue $urgent={isUrgent}>
            <span>{formatNumber(timeLeft.hours)}</span>
          </TimeValue>
          <TimeLabel>Hours</TimeLabel>
        </TimeUnit>

        <TimeUnit>
          <TimeValue $urgent={isUrgent}>
            <span>{formatNumber(timeLeft.minutes)}</span>
          </TimeValue>
          <TimeLabel>Mins</TimeLabel>
        </TimeUnit>

        <TimeUnit>
          <TimeValue $urgent={isUrgent}>
            <span>{formatNumber(timeLeft.seconds)}</span>
          </TimeValue>
          <TimeLabel>Secs</TimeLabel>
        </TimeUnit>
      </TimeDisplay>

      <DrawInfo>
        <DrawNumber>Draw #{pool.currentDrawNumber}</DrawNumber>
        <DrawDate>{formatDate(nextDraw)}</DrawDate>
      </DrawInfo>

      {isUrgent && (
        <UrgentMessage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Draw closing soon!
        </UrgentMessage>
      )}
    </Container>
  );
};

export default CountdownTimer;
