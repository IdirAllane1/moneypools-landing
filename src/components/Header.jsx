import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints, transitions, shadows } from '../styles/theme';
import { useApp } from '../context/AppContext';

const HeaderWrapper = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 24px;
  background: rgba(253, 249, 238, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(253, 249, 238, 0.15);
  transition: all ${transitions.normal};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 24px;
    width: auto;

    @media (min-width: ${breakpoints.tablet}) {
      height: 44px;
    }
  }
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${colors.cream};
  font-weight: 500;
  font-size: 15px;
  transition: color ${transitions.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
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

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DesktopButtons = styled.div`
  display: none;
  align-items: center;
  gap: 12px;

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: all ${transitions.fast};

  @media (min-width: ${breakpoints.tablet}) {
    padding: 12px 24px;
    font-size: 15px;
  }
`;

const LoginButton = styled(Button)`
  background: transparent;
  color: ${colors.cream};
  border: 2px solid ${colors.cream};

  &:hover {
    background: ${colors.cream};
    color: ${colors.darkBrown};
  }
`;

const SignUpButton = styled(Button)`
  background: ${colors.red};
  color: ${colors.cream};
  border: none;

  &:hover {
    background: ${colors.redDark};
    transform: translateY(-2px);
    box-shadow: ${shadows.glowRed};
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  span {
    width: 100%;
    height: 3px;
    background: ${colors.cream};
    border-radius: 2px;
    transition: all ${transitions.normal};
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.cream};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 999;
`;

const MobileNavLink = styled(motion.a)`
  color: ${colors.darkBrown};
  font-size: 24px;
  font-weight: 600;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.red};
  }
`;

const MobileButtonGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const MobileLoginButton = styled(Button)`
  background: transparent;
  color: ${colors.darkBrown};
  border: 2px solid ${colors.darkBrown};

  &:hover {
    background: ${colors.darkBrown};
    color: ${colors.cream};
  }
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openSignUpModal, playClick } = useApp();
  const navigate = useNavigate();

  const handleLogin = () => {
    playClick();
    setMobileMenuOpen(false);
    navigate('/dashboard');
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Collectibles', href: '#collectibles' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <HeaderWrapper
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Nav>
          <Logo href="#" onClick={(e) => handleNavClick(e, '#hero')}>
            <img src="/images/logo_desktop.png" alt="MoneyPools" />
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <ButtonGroup>
            <DesktopButtons>
              <LoginButton
                onClick={handleLogin}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </LoginButton>
              <SignUpButton
                onClick={openSignUpModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Now
              </SignUpButton>
            </DesktopButtons>
            <HamburgerButton
              $isOpen={mobileMenuOpen}
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
            >
              <span />
              <span />
              <span />
            </HamburgerButton>
          </ButtonGroup>
        </Nav>
      </HeaderWrapper>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
            <MobileButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <MobileLoginButton onClick={handleLogin}>Login</MobileLoginButton>
              <SignUpButton onClick={openSignUpModal}>Join Now</SignUpButton>
            </MobileButtonGroup>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
