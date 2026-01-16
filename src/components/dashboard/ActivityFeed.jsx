import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

const Container = styled(motion.div)`
  background: rgba(253, 249, 238, 0.03);
  border: 1px solid rgba(253, 249, 238, 0.08);
  border-radius: 16px;
  padding: 16px 20px;
  max-height: 280px;
  overflow: hidden;
`;

const NotificationItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: ${props => props.$isNew
    ? `linear-gradient(135deg, ${colors.gold}20, ${colors.gold}10)`
    : 'rgba(253, 249, 238, 0.03)'};
  border-radius: 10px;
  border: 1px solid ${props => props.$isNew ? `${colors.gold}40` : 'rgba(253, 249, 238, 0.05)'};
`;

const NotificationIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props => props.$isNew ? `${colors.gold}30` : 'rgba(253, 249, 238, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const NotificationText = styled.p`
  color: ${props => props.$isNew ? colors.gold : colors.cream};
  font-size: 13px;
  font-weight: ${props => props.$isNew ? 600 : 400};
`;

const NotificationTime = styled.span`
  color: ${props => props.$isNew ? colors.gold : colors.cream};
  opacity: ${props => props.$isNew ? 0.7 : 0.4};
  font-size: 11px;
  white-space: nowrap;
`;

const Title = styled.h3`
  color: ${colors.cream};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.6;
  margin-bottom: 12px;
`;

const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeedItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: rgba(253, 249, 238, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(253, 249, 238, 0.05);
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props => {
    switch (props.$type) {
      case 'join': return `${colors.gold}20`;
      case 'draw': return `${colors.coral}20`;
      case 'gift': return `${colors.red}20`;
      case 'win': return `${colors.gold}30`;
      default: return 'rgba(253, 249, 238, 0.1)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    color: ${props => {
      switch (props.$type) {
        case 'join': return colors.gold;
        case 'draw': return colors.coral;
        case 'gift': return colors.red;
        case 'win': return colors.gold;
        default: return colors.cream;
      }
    }};
  }
`;

const FeedContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const FeedText = styled.p`
  color: ${colors.cream};
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FeedTime = styled.span`
  color: ${colors.cream};
  opacity: 0.4;
  font-size: 11px;
  white-space: nowrap;
`;

// Icons
const JoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const DrawIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
  </svg>
);

const WinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const getIcon = (type) => {
  switch (type) {
    case 'join': return <JoinIcon />;
    case 'draw': return <DrawIcon />;
    case 'gift': return <GiftIcon />;
    case 'win': return <WinIcon />;
    default: return <DrawIcon />;
  }
};

const notificationTemplates = [
  { icon: '💬', text: 'New message from Sarah!' },
  { icon: '🎉', text: 'James just won €250!' },
  { icon: '🎁', text: 'Emma gifted you a ticket!' },
  { icon: '👥', text: 'Mike invited you to a syndicate!' },
  { icon: '💰', text: 'Lisa won the weekly draw!' },
  { icon: '🎫', text: 'Tom sent you a bonus ticket!' },
  { icon: '🏆', text: 'Your syndicate won €500!' },
  { icon: '📩', text: 'You have 3 unread messages' },
];

const ActivityFeed = () => {
  const { activity } = useDashboard();
  const [liveNotifications, setLiveNotifications] = useState([]);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    // Add first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setLiveNotifications([{ ...notificationTemplates[0], id: Date.now() }]);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // Add new notification every 15 seconds
    const interval = setInterval(() => {
      const nextIndex = (notificationIndex + 1) % notificationTemplates.length;
      setNotificationIndex(nextIndex);
      setLiveNotifications(prev => [
        { ...notificationTemplates[nextIndex], id: Date.now() },
        ...prev
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, [notificationIndex]);

  // Get the newest notification ID
  const newestNotificationId = liveNotifications.length > 0 ? liveNotifications[0].id : null;

  // Combine live notifications with existing activity
  const allActivity = [
    ...liveNotifications.map(n => ({ ...n, type: 'notification', time: 'Just now' })),
    ...activity
  ].slice(0, 6); // Show max 6 items

  return (
    <Container
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Title>Recent Activity</Title>
      <FeedList>
        <AnimatePresence initial={false}>
          {allActivity.map((item, index) => {
            const isNew = item.type === 'notification' && item.id === newestNotificationId;

            return item.type === 'notification' ? (
              <NotificationItem
                key={item.id}
                $isNew={isNew}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                layout
              >
                <NotificationIconWrapper $isNew={isNew}>
                  {item.icon}
                </NotificationIconWrapper>
                <NotificationContent>
                  <NotificationText $isNew={isNew}>{item.text}</NotificationText>
                </NotificationContent>
                <NotificationTime $isNew={isNew}>{item.time}</NotificationTime>
              </NotificationItem>
            ) : (
              <FeedItem
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <IconWrapper $type={item.type}>
                  {getIcon(item.type)}
                </IconWrapper>
                <FeedContent>
                  <FeedText>{item.text}</FeedText>
                </FeedContent>
                <FeedTime>{item.time}</FeedTime>
              </FeedItem>
            );
          })}
        </AnimatePresence>
      </FeedList>
    </Container>
  );
};

export default ActivityFeed;
