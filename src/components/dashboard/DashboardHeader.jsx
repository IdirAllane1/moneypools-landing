import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, breakpoints, transitions } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 12px 24px;
  background: rgba(21, 1, 0, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(253, 249, 238, 0.1);
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 24px;
    width: auto;

    @media (min-width: ${breakpoints.tablet}) {
      height: 32px;
    }
  }
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.$active ? colors.gold : colors.cream};
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 14px;
  transition: color ${transitions.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${colors.gold};
    transition: width ${transitions.normal};
  }

  &:hover {
    color: ${colors.gold};
    &::after {
      width: 100%;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(253, 249, 238, 0.08);
  border: 1px solid rgba(253, 249, 238, 0.1);
  color: ${colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all ${transitions.fast};

  &:hover {
    background: rgba(253, 249, 238, 0.15);
    border-color: rgba(253, 249, 238, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  background: ${colors.red};
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoutButton = styled(motion.button)`
  padding: 8px 16px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(253, 249, 238, 0.2);
  color: ${colors.cream};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    background: rgba(203, 51, 50, 0.2);
    border-color: ${colors.red};
    color: ${colors.coral};
  }
`;

const UserInfo = styled.div`
  display: none;
  align-items: center;
  gap: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

const UserAvatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid ${colors.gold};
`;

const UserName = styled.span`
  color: ${colors.cream};
  font-weight: 600;
  font-size: 14px;
`;

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { player, notifications } = useDashboard();
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Header>
      <Nav>
        <Logo to="/">
          <img src="/images/logo_desktop.png" alt="MoneyPools" />
        </Logo>

        <NavLinks>
          <NavLink to="/dashboard" $active>Dashboard</NavLink>
          <NavLink to="/dashboard">History</NavLink>
          <NavLink to="/dashboard">Syndicate</NavLink>
        </NavLinks>

        <RightSection>
          <IconButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {unreadCount > 0 && <NotificationBadge>{unreadCount}</NotificationBadge>}
          </IconButton>

          <IconButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </IconButton>

          <UserInfo>
            <UserAvatar src={player.avatar} alt={player.username} />
            <UserName>{player.username}</UserName>
          </UserInfo>

          <LogoutButton
            onClick={handleLogout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Logout
          </LogoutButton>
        </RightSection>
      </Nav>
    </Header>
  );
};

export default DashboardHeader;
