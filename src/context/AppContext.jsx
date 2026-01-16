import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import useSound from '../hooks/useSound';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [playerCount, setPlayerCount] = useState(50000);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const sound = useSound();

  // Simulate player count incrementing
  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 5) + 1;
      setPlayerCount(prev => {
        sound.playCounterIncrement();
        return prev + increment;
      });
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, [sound]);

  const openSignUpModal = useCallback(() => {
    sound.playClick();
    setIsSignUpModalOpen(true);
  }, [sound]);

  const closeSignUpModal = useCallback(() => {
    sound.playClick();
    setIsSignUpModalOpen(false);
  }, [sound]);

  const openLoginModal = useCallback(() => {
    sound.playClick();
    setIsLoginModalOpen(true);
  }, [sound]);

  const closeLoginModal = useCallback(() => {
    sound.playClick();
    setIsLoginModalOpen(false);
  }, [sound]);

  const jackpot = playerCount;

  const value = {
    playerCount,
    jackpot,
    isSignUpModalOpen,
    isLoginModalOpen,
    openSignUpModal,
    closeSignUpModal,
    openLoginModal,
    closeLoginModal,
    ...sound,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
