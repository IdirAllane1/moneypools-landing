import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, breakpoints, transitions } from '../../styles/theme';
import { useDashboard } from '../../context/DashboardContext';

// Shared Modal Styles
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(21, 1, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContainer = styled(motion.div)`
  background: linear-gradient(180deg, #1a0a05 0%, #150100 100%);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 24px;
  padding: 32px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  color: ${colors.cream};
  font-size: 1.5rem;
  font-weight: 700;
`;

const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(253, 249, 238, 0.08);
  border: 1px solid rgba(253, 249, 238, 0.1);
  color: ${colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    background: rgba(203, 51, 50, 0.2);
    border-color: ${colors.red};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  background: rgba(253, 249, 238, 0.05);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 12px;
  color: ${colors.cream};
  font-size: 15px;
  margin-bottom: 16px;
  transition: all ${transitions.fast};

  &::placeholder {
    color: rgba(253, 249, 238, 0.4);
  }

  &:focus {
    outline: none;
    border-color: ${colors.gold};
    background: rgba(253, 249, 238, 0.08);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  background: rgba(253, 249, 238, 0.05);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 12px;
  color: ${colors.cream};
  font-size: 15px;
  margin-bottom: 16px;
  min-height: 80px;
  resize: none;

  &::placeholder {
    color: rgba(253, 249, 238, 0.4);
  }

  &:focus {
    outline: none;
    border-color: ${colors.gold};
  }
`;

const PrimaryButton = styled(motion.button)`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, ${colors.red}, ${colors.coral});
  color: ${colors.cream};
  font-weight: 700;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 8px;
`;

const SecondaryButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  background: transparent;
  border: 1px solid rgba(253, 249, 238, 0.2);
  color: ${colors.cream};
  font-weight: 600;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background: rgba(253, 249, 238, 0.05);
  }
`;

const Label = styled.label`
  display: block;
  color: ${colors.cream};
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  opacity: 0.8;
`;

const InfoBox = styled.div`
  background: rgba(230, 201, 86, 0.1);
  border: 1px solid rgba(230, 201, 86, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  color: ${colors.gold};
  font-size: 14px;
  line-height: 1.5;
`;

const SliderContainer = styled.div`
  margin: 20px 0;
`;

const Slider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: rgba(253, 249, 238, 0.1);
  appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colors.gold};
    cursor: pointer;
  }
`;

const SliderValue = styled.div`
  text-align: center;
  margin-top: 12px;
`;

const BigNumber = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: ${colors.gold};
`;

const SliderLabel = styled.span`
  display: block;
  color: ${colors.cream};
  opacity: 0.6;
  font-size: 13px;
  margin-top: 4px;
`;

const OddsDisplay = styled.div`
  background: rgba(253, 249, 238, 0.05);
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0;
  text-align: center;
`;

const OddsLabel = styled.div`
  color: ${colors.cream};
  opacity: 0.6;
  font-size: 12px;
  margin-bottom: 4px;
`;

const OddsValue = styled.div`
  color: ${colors.coral};
  font-size: 1.2rem;
  font-weight: 700;
`;

const OddsArrow = styled.span`
  color: ${colors.cream};
  opacity: 0.5;
  margin: 0 12px;
`;

const NewOdds = styled.span`
  color: ${colors.gold};
`;

const ShareButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 20px 0;
`;

const ShareButton = styled(motion.button)`
  padding: 12px;
  border-radius: 12px;
  background: ${props => props.$bg || 'rgba(253, 249, 238, 0.08)'};
  border: none;
  color: ${colors.cream};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ReferralLink = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const LinkInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  background: rgba(253, 249, 238, 0.05);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 10px;
  color: ${colors.gold};
  font-size: 13px;
  font-family: monospace;
`;

const CopyButton = styled(motion.button)`
  padding: 12px 20px;
  background: ${colors.gold};
  color: ${colors.darkBrown};
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 16px;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${props => props.$selected ? `${colors.gold}20` : 'rgba(253, 249, 238, 0.03)'};
  border: 1px solid ${props => props.$selected ? colors.gold : 'rgba(253, 249, 238, 0.08)'};
  border-radius: 12px;
  cursor: pointer;
  transition: all ${transitions.fast};

  &:hover {
    background: rgba(253, 249, 238, 0.08);
  }
`;

const FriendAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
`;

const FriendName = styled.span`
  color: ${colors.cream};
  font-weight: 500;
`;

const PriceTag = styled.div`
  text-align: center;
  margin: 16px 0;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.cream};
`;

const PriceLabel = styled.span`
  display: block;
  color: ${colors.cream};
  opacity: 0.5;
  font-size: 12px;
  margin-top: 4px;
`;

// Close Icon
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Dummy friends data
const dummyFriends = [
  { id: 1, name: 'Sarah_Winner', avatar: '/images/01.png' },
  { id: 2, name: 'JackpotJoe', avatar: '/images/03.png' },
  { id: 3, name: 'LuckyLisa', avatar: '/images/04.png' },
];

// ==================== MODALS ====================

// Syndicate Modal
export const SyndicateModal = () => {
  const { syndicateModalOpen, setSyndicateModalOpen, pool } = useDashboard();
  const [syndicateName, setSyndicateName] = useState('');

  if (!syndicateModalOpen) return null;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSyndicateModalOpen(false)}
      >
        <ModalContainer
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Start a Syndicate</ModalTitle>
            <CloseButton onClick={() => setSyndicateModalOpen(false)}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>

          <InfoBox>
            <InfoText>
              Team up with up to 9 friends. If anyone wins, the prize is split equally!
            </InfoText>
          </InfoBox>

          <Label>Syndicate Name</Label>
          <Input
            type="text"
            placeholder="e.g., The Lucky Tigers"
            value={syndicateName}
            onChange={e => setSyndicateName(e.target.value)}
          />

          <Label>Invite Members</Label>
          <Input type="text" placeholder="Search by username..." />

          <FriendsList>
            {dummyFriends.map(friend => (
              <FriendItem key={friend.id}>
                <FriendAvatar src={friend.avatar} alt={friend.name} />
                <FriendName>{friend.name}</FriendName>
              </FriendItem>
            ))}
          </FriendsList>

          <OddsDisplay>
            <OddsLabel>Combined Odds (with 3 members)</OddsLabel>
            <OddsValue>1 in {Math.ceil(pool.activePlayers / 3).toLocaleString()}</OddsValue>
          </OddsDisplay>

          <PrimaryButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Create Syndicate
          </PrimaryButton>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

// Gift Ticket Modal
export const GiftModal = () => {
  const { giftModalOpen, setGiftModalOpen } = useDashboard();
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [message, setMessage] = useState('');

  if (!giftModalOpen) return null;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setGiftModalOpen(false)}
      >
        <ModalContainer
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Gift a Ticket</ModalTitle>
            <CloseButton onClick={() => setGiftModalOpen(false)}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>

          <InfoBox>
            <InfoText>
              Send a ticket to a friend and they'll be entered in the next draw!
            </InfoText>
          </InfoBox>

          <Label>Select Friend</Label>
          <FriendsList>
            {dummyFriends.map(friend => (
              <FriendItem
                key={friend.id}
                $selected={selectedFriend === friend.id}
                onClick={() => setSelectedFriend(friend.id)}
              >
                <FriendAvatar src={friend.avatar} alt={friend.name} />
                <FriendName>{friend.name}</FriendName>
              </FriendItem>
            ))}
          </FriendsList>

          <Label>Add a Message (optional)</Label>
          <TextArea
            placeholder="Good luck! 🍀"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <PrimaryButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!selectedFriend}
          >
            Send Gift
          </PrimaryButton>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

// Multiplier Modal
export const MultiplierModal = () => {
  const { multiplierModalOpen, setMultiplierModalOpen, player, pool, updateMultiplier, calculateOdds } = useDashboard();
  const [tickets, setTickets] = useState(player.ticketMultiplier);

  if (!multiplierModalOpen) return null;

  const baseOdds = pool.activePlayers;
  const newOdds = Math.ceil(baseOdds / tickets);
  const extraCost = (tickets - 1) * 7; // €7 per extra ticket

  const handleConfirm = () => {
    updateMultiplier(tickets);
    setMultiplierModalOpen(false);
  };

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMultiplierModalOpen(false)}
      >
        <ModalContainer
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Ticket Multiplier</ModalTitle>
            <CloseButton onClick={() => setMultiplierModalOpen(false)}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>

          <InfoBox>
            <InfoText>
              More tickets = better odds! Each ticket is another chance to win.
            </InfoText>
          </InfoBox>

          <SliderContainer>
            <Slider
              type="range"
              min="1"
              max="10"
              value={tickets}
              onChange={e => setTickets(parseInt(e.target.value))}
            />
            <SliderValue>
              <BigNumber>{tickets}</BigNumber>
              <SliderLabel>tickets this draw</SliderLabel>
            </SliderValue>
          </SliderContainer>

          <OddsDisplay>
            <OddsLabel>Your Odds</OddsLabel>
            <OddsValue>
              1 in {baseOdds.toLocaleString()}
              <OddsArrow>→</OddsArrow>
              <NewOdds>1 in {newOdds.toLocaleString()}</NewOdds>
            </OddsValue>
          </OddsDisplay>

          {extraCost > 0 && (
            <PriceTag>
              <Price>€{extraCost}</Price>
              <PriceLabel>for {tickets - 1} extra ticket{tickets > 2 ? 's' : ''}</PriceLabel>
            </PriceTag>
          )}

          <PrimaryButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleConfirm}
          >
            {extraCost > 0 ? `Confirm (€${extraCost})` : 'Confirm'}
          </PrimaryButton>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};

// Invite Modal
export const InviteModal = () => {
  const { inviteModalOpen, setInviteModalOpen, player } = useDashboard();
  const [copied, setCopied] = useState(false);

  const referralLink = `https://moneypools.com/ref/${player.referralCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inviteModalOpen) return null;

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setInviteModalOpen(false)}
      >
        <ModalContainer
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <ModalHeader>
            <ModalTitle>Invite Friends</ModalTitle>
            <CloseButton onClick={() => setInviteModalOpen(false)}>
              <CloseIcon />
            </CloseButton>
          </ModalHeader>

          <InfoBox>
            <InfoText>
              Multiply your winning chances! For each friend you invite, your odds are multiplied for the next 3 draws. Invite 10 friends = 10X winning chances!
            </InfoText>
          </InfoBox>

          <Label>Your Referral Link</Label>
          <ReferralLink>
            <LinkInput type="text" value={referralLink} readOnly />
            <CopyButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy'}
            </CopyButton>
          </ReferralLink>

          <Label>Share via</Label>
          <ShareButtons>
            <ShareButton
              $bg="#25D366"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </ShareButton>
            <ShareButton
              $bg="#0088cc"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </ShareButton>
            <ShareButton
              $bg="#1DA1F2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </ShareButton>
          </ShareButtons>

          <OddsDisplay>
            <OddsLabel>Your Referral Stats</OddsLabel>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 12 }}>
              <div style={{ textAlign: 'center' }}>
                <OddsValue style={{ fontSize: '1.5rem' }}>3</OddsValue>
                <OddsLabel>Invited</OddsLabel>
              </div>
              <div style={{ textAlign: 'center' }}>
                <OddsValue style={{ fontSize: '1.5rem' }}>2</OddsValue>
                <OddsLabel>Active</OddsLabel>
              </div>
              <div style={{ textAlign: 'center' }}>
                <OddsValue style={{ fontSize: '1.5rem', color: colors.gold }}>€10</OddsValue>
                <OddsLabel>Earned</OddsLabel>
              </div>
            </div>
          </OddsDisplay>
        </ModalContainer>
      </Overlay>
    </AnimatePresence>
  );
};
