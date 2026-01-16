import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, shadows, transitions } from '../styles/theme';
import { useApp } from '../context/AppContext';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(21, 1, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 24px;
  backdrop-filter: blur(4px);
`;

const ModalContainer = styled(motion.div)`
  background: ${colors.cream};
  border-radius: 20px;
  padding: 36px 28px;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: ${shadows.large};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.darkBrown};
  font-size: 24px;
  transition: color ${transitions.fast};
  border-radius: 50%;

  &:hover {
    color: ${colors.red};
    background: rgba(21, 1, 0, 0.05);
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  color: ${colors.darkBrown};
  text-align: center;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.darkBrown};
`;

const Input = styled.input`
  padding: 12px 14px;
  font-size: 15px;
  border: 2px solid rgba(21, 1, 0, 0.15);
  border-radius: 10px;
  background: ${colors.white};
  color: ${colors.darkBrown};
  transition: border-color ${transitions.fast};

  &:focus {
    outline: none;
    border-color: ${colors.red};
  }

  &::placeholder {
    color: ${colors.darkBrown};
    opacity: 0.4;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  background: ${colors.red};
  color: ${colors.cream};
  border: none;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background: ${colors.redDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SwitchText = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${colors.darkBrown};
  margin-top: 20px;

  button {
    background: none;
    border: none;
    color: ${colors.red};
    font-weight: 600;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 16px;
`;

const SuccessIcon = styled.div`
  width: 70px;
  height: 70px;
  background: ${colors.gold};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 32px;
  color: ${colors.darkBrown};

  &::after {
    content: '';
    width: 20px;
    height: 32px;
    border: solid ${colors.darkBrown};
    border-width: 0 4px 4px 0;
    transform: rotate(45deg) translateY(-3px);
  }
`;

const SuccessTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.darkBrown};
  margin-bottom: 8px;
`;

const SuccessText = styled.p`
  color: ${colors.darkBrown};
  opacity: 0.7;
  font-size: 0.95rem;
`;

export const SignUpModal = () => {
  const { isSignUpModalOpen, closeSignUpModal, openLoginModal, playClick, playSuccess } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isSignUpModalOpen) {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsSubmitted(false);
    }
  }, [isSignUpModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccess();
    setIsSubmitted(true);
    setTimeout(() => {
      closeSignUpModal();
    }, 2000);
  };

  const switchToLogin = () => {
    playClick();
    closeSignUpModal();
    openLoginModal();
  };

  return (
    <AnimatePresence>
      {isSignUpModalOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeSignUpModal}
        >
          <ModalContainer
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeSignUpModal}>&#215;</CloseButton>

            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <SuccessIcon />
                <SuccessTitle>Welcome to MoneyPools</SuccessTitle>
                <SuccessText>Your account has been created.</SuccessText>
              </SuccessMessage>
            ) : (
              <>
                <Title>Join the Pool</Title>

                <Form onSubmit={handleSubmit}>
                  <InputGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Create Account
                  </SubmitButton>
                </Form>

                <SwitchText>
                  Already have an account?{' '}
                  <button type="button" onClick={switchToLogin}>Log in</button>
                </SwitchText>
              </>
            )}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export const LoginModal = () => {
  const { isLoginModalOpen, closeLoginModal, openSignUpModal, playClick, playSuccess } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isLoginModalOpen) {
      setEmail('');
      setPassword('');
      setIsSubmitted(false);
    }
  }, [isLoginModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccess();
    setIsSubmitted(true);
    setTimeout(() => {
      closeLoginModal();
    }, 2000);
  };

  const switchToSignUp = () => {
    playClick();
    closeLoginModal();
    openSignUpModal();
  };

  return (
    <AnimatePresence>
      {isLoginModalOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLoginModal}
        >
          <ModalContainer
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeLoginModal}>&#215;</CloseButton>

            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <SuccessIcon />
                <SuccessTitle>Welcome Back</SuccessTitle>
                <SuccessText>Good luck in the next draw.</SuccessText>
              </SuccessMessage>
            ) : (
              <>
                <Title>Welcome Back</Title>

                <Form onSubmit={handleSubmit}>
                  <InputGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <InputGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>

                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Log In
                  </SubmitButton>
                </Form>

                <SwitchText>
                  New here?{' '}
                  <button type="button" onClick={switchToSignUp}>Sign up</button>
                </SwitchText>
              </>
            )}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
