import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../styles/theme';
import { DashboardProvider, useDashboard } from '../context/DashboardContext';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import PlayerProfile from '../components/dashboard/PlayerProfile';
import JackpotDisplay from '../components/dashboard/JackpotDisplay';
import CountdownTimer from '../components/dashboard/CountdownTimer';
import ActionButtons from '../components/dashboard/ActionButtons';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import {
  SyndicateModal,
  GiftModal,
  MultiplierModal,
  InviteModal,
} from '../components/dashboard/DashboardModals';

const DashboardWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  background: ${colors.darkBrown};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (min-width: ${breakpoints.tablet}) {
    position: relative;
    height: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 30%, ${colors.gold}08 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, ${colors.coral}06 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }
`;

const MainContent = styled.main`
  height: 100vh;
  padding: 64px 12px 76px;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    height: auto;
    min-height: 100vh;
    padding: 80px 24px 24px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 90px 40px 30px;
  }
`;

const TopSection = styled.div`
  display: none;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 260px 1fr 260px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: 280px 1fr 300px;
    gap: 24px;
  }

  @media (min-width: ${breakpoints.wide}) {
    grid-template-columns: 300px 1fr 320px;
  }
`;

const LeftColumn = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightColumn = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const BottomSection = styled.div`
  margin-top: 20px;
  display: none;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 24px;
    flex-direction: row;
    gap: 24px;
  }
`;

const ActionsWrapper = styled.div`
  flex: 2;
`;

const ActivityWrapper = styled.div`
  flex: 1;
  display: none;

  @media (min-width: ${breakpoints.desktop}) {
    display: block;
  }
`;

// Mobile Layout Components
const MobileTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MobileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid ${colors.gold};
  flex-shrink: 0;
`;

const MobileCountdownWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(253, 249, 238, 0.05);
  border-radius: 12px;
  padding: 8px 12px;
`;

const MobileCountdownLabel = styled.span`
  color: ${colors.cream};
  font-size: 10px;
  opacity: 0.6;
  margin-right: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MobileCountdownTime = styled.span`
  color: ${colors.gold};
  font-size: 16px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

const MobileJackpotWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 0;
  padding: 8px 0;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const MobileActionsBar = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px;
  flex-shrink: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.darkBrown};
  border-top: 1px solid rgba(253, 249, 238, 0.1);
  z-index: 100;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const DesktopCountdown = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const DashboardContent = () => {
  return (
    <DashboardWrapper>
      <DashboardHeader />

      <MainContent>
        {/* Mobile Top Bar with Avatar and Countdown */}
        <MobileTopBarSection />

        {/* Mobile Jackpot (centered, takes remaining space) */}
        <MobileJackpotWrapper>
          <JackpotDisplay />
        </MobileJackpotWrapper>

        {/* Mobile Action Buttons */}
        <MobileActionsBar>
          <ActionButtons isMobile={true} />
        </MobileActionsBar>

        {/* Desktop Layout */}
        <TopSection>
          <LeftColumn>
            <PlayerProfile />
          </LeftColumn>

          <CenterColumn>
            <JackpotDisplay />
          </CenterColumn>

          <RightColumn>
            <DesktopCountdown>
              <CountdownTimer />
            </DesktopCountdown>
          </RightColumn>
        </TopSection>

        <BottomSection>
          <ActionsWrapper>
            <ActionButtons />
          </ActionsWrapper>
          <ActivityWrapper>
            <ActivityFeed />
          </ActivityWrapper>
        </BottomSection>
      </MainContent>

      {/* Modals */}
      <SyndicateModal />
      <GiftModal />
      <MultiplierModal />
      <InviteModal />
    </DashboardWrapper>
  );
};

// Mobile Top Bar Component
const MobileTopBarSection = () => {
  const { player, pool } = useDashboard();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(20, 0, 0, 0);

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
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <MobileTopBar>
      <MobileAvatar src={player.avatar} alt={player.username} />
      <MobileCountdownWrapper>
        <MobileCountdownLabel>Next Draw</MobileCountdownLabel>
        <MobileCountdownTime>
          {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
        </MobileCountdownTime>
      </MobileCountdownWrapper>
    </MobileTopBar>
  );
};

// Wrap with Provider
const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
};

export default Dashboard;
