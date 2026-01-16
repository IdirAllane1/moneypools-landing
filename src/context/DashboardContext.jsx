import { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext();

// Dummy player data
const initialPlayerData = {
  username: 'LuckyMax',
  avatar: '/images/05.png',
  level: 12,
  memberSince: 'Oct 2025',
  totalWinnings: 0,
  currentPool: 1,
  drawsParticipated: 23,
  drawsWon: 0,
  subscriptionTier: 'Pro',
  nextBilling: 'Feb 15, 2026',
  ticketMultiplier: 1,
  syndicate: null,
  referralCode: 'LUCKYMAX2025',
};

// Dummy pool data
const initialPoolData = {
  jackpot: 52847,
  activePlayers: 52847,
  currentDrawNumber: 48,
};

// Dummy activity feed
const initialActivity = [
  { id: 1, text: 'You joined Pool #1', time: '2 days ago', type: 'join' },
  { id: 2, text: 'Draw #47 completed — Player X won €51,203', time: '3 days ago', type: 'draw' },
  { id: 3, text: 'You received a ticket from Sarah', time: '5 days ago', type: 'gift' },
];

export const DashboardProvider = ({ children }) => {
  const [player, setPlayer] = useState(initialPlayerData);
  const [pool, setPool] = useState(initialPoolData);
  const [activity, setActivity] = useState(initialActivity);
  const [notifications, setNotifications] = useState([]);

  // Modal states
  const [syndicateModalOpen, setSyndicateModalOpen] = useState(false);
  const [giftModalOpen, setGiftModalOpen] = useState(false);
  const [multiplierModalOpen, setMultiplierModalOpen] = useState(false);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  // Next draw countdown (2 days from now)
  const [nextDraw] = useState(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    target.setHours(20, 0, 0, 0);
    return target;
  });

  // Simulate jackpot and player count increasing
  useEffect(() => {
    const interval = setInterval(() => {
      const increase = Math.floor(Math.random() * 3) + 1;
      setPool(prev => ({
        ...prev,
        jackpot: prev.jackpot + increase,
        activePlayers: prev.activePlayers + increase,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Calculate odds
  const calculateOdds = () => {
    const baseOdds = pool.activePlayers;
    const multiplier = player.ticketMultiplier;
    return Math.ceil(baseOdds / multiplier);
  };

  // Update ticket multiplier
  const updateMultiplier = (newMultiplier) => {
    setPlayer(prev => ({ ...prev, ticketMultiplier: newMultiplier }));
  };

  // Add notification
  const addNotification = (notification) => {
    setNotifications(prev => [{ id: Date.now(), ...notification }, ...prev]);
  };

  const value = {
    player,
    setPlayer,
    pool,
    activity,
    notifications,
    addNotification,
    nextDraw,
    calculateOdds,
    updateMultiplier,
    // Modal controls
    syndicateModalOpen,
    setSyndicateModalOpen,
    giftModalOpen,
    setGiftModalOpen,
    multiplierModalOpen,
    setMultiplierModalOpen,
    inviteModalOpen,
    setInviteModalOpen,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
