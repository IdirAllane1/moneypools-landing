import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, breakpoints, shadows, transitions } from '../styles/theme';

const Section = styled.section`
  padding: 100px 24px;
  background: ${colors.darkBrown};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${colors.cream};
  text-align: center;
  margin-bottom: 16px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${colors.cream};
  text-align: center;
  opacity: 0.8;
  max-width: 550px;
  margin: 0 auto 48px;
`;

const AvatarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 64px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AvatarCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 12px;
  cursor: pointer;
  transition: all ${transitions.normal};
  border: 2px solid ${props => props.$highlighted ? colors.gold : 'transparent'};
  overflow: hidden;
  transform: ${props => props.$highlighted ? 'translateY(-8px)' : 'none'};
  box-shadow: ${props => props.$highlighted ? shadows.glow : 'none'};

  &:hover {
    border-color: ${colors.gold};
    transform: translateY(-8px);
    box-shadow: ${shadows.glow};

    img {
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    transition: transform ${transitions.normal};
    transform: ${props => props.$highlighted ? 'scale(1.05)' : 'none'};
  }
`;

const AvatarLabel = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: rgba(21, 1, 0, 0.8);
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
  opacity: ${props => props.$highlighted ? 1 : 0};
  transform: ${props => props.$highlighted ? 'translateY(0)' : 'translateY(10px)'};
  transition: all ${transitions.normal};

  ${AvatarCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AvatarName = styled.span`
  color: ${colors.cream};
  font-weight: 600;
  font-size: 13px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 28px 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all ${transitions.normal};

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: ${colors.coral};
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: ${colors.gradientGoldCoral};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
    fill: ${colors.darkBrown};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: ${colors.cream};
  margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: ${colors.cream};
  opacity: 0.7;
  line-height: 1.5;
`;

const Badge = styled.span`
  display: inline-block;
  background: ${colors.gold};
  color: ${colors.darkBrown};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  margin-top: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// Feature Icons as SVG
const SyndicateIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const GiftIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
  </svg>
);

const BoostIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M13 7.83c.85-.3 1.53-.98 1.83-1.83H18l-3 7h2l-4 9 1-9h-2l2-6h-.83zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

const Collectibles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Cycle through cards with 2 second delay
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const avatars = [
    { id: '01', name: 'Tiger Tech' },
    { id: '03', name: 'Lucky Cat' },
    { id: '04', name: 'Fortune Paw' },
    { id: '05', name: 'Golden Bear' },
    { id: '06', name: 'Neon Cat' },
    { id: '07', name: 'Fire Tiger' },
    { id: '08', name: 'Money Mouse' },
    { id: '09', name: 'Prosperity' },
  ];

  const features = [
    {
      Icon: SyndicateIcon,
      title: "Form Syndicates",
      description: "Team up with up to 10 friends. Win together, share together.",
      badge: null,
    },
    {
      Icon: GiftIcon,
      title: "Gift Tickets",
      description: "Send tickets to friends and family. Spread the luck around.",
      badge: null,
    },
    {
      Icon: BoostIcon,
      title: "10x Your Odds",
      description: "Buy up to 9 extra tickets and multiply your chances.",
      badge: "Power Up",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <Section id="collectibles" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Collect Unique Avatars
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every player gets a unique 3D collectible. Build your collection as you play.
        </SectionSubtitle>

        <AvatarsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {avatars.map((avatar, index) => (
            <AvatarCard key={avatar.id} variants={itemVariants} $highlighted={index === highlightedIndex}>
              <img src={`/images/${avatar.id}.png`} alt={avatar.name} />
              <AvatarLabel $highlighted={index === highlightedIndex}>
                <AvatarName>{avatar.name}</AvatarName>
              </AvatarLabel>
            </AvatarCard>
          ))}
        </AvatarsGrid>

        <FeaturesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} variants={itemVariants}>
              <FeatureIcon>
                <feature.Icon />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              {feature.badge && <Badge>{feature.badge}</Badge>}
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </Section>
  );
};

export default Collectibles;
