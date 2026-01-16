import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, breakpoints, shadows, transitions } from '../styles/theme';
import { useApp } from '../context/AppContext';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 30px rgba(230, 201, 86, 0.2); }
  50% { box-shadow: 0 0 50px rgba(230, 201, 86, 0.4); }
`;

const Section = styled.section`
  padding: 120px 24px;
  background: ${colors.darkBrown};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(230, 201, 86, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(203, 51, 50, 0.06) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: ${colors.cream};
  text-align: center;
  margin-bottom: 16px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${colors.cream};
  text-align: center;
  opacity: 0.7;
  max-width: 500px;
  margin: 0 auto 56px;
  line-height: 1.6;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

const PricingCard = styled(motion.div)`
  background: ${props => props.$featured ? colors.cream : 'rgba(253, 249, 238, 0.05)'};
  border-radius: 20px;
  padding: 40px 32px;
  position: relative;
  border: ${props => props.$featured ? 'none' : '1px solid rgba(253, 249, 238, 0.1)'};
  transition: all ${transitions.normal};
  animation: ${props => props.$featured ? glow : 'none'} 3s ease-in-out infinite;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${props => props.$featured
      ? '0 25px 60px rgba(230, 201, 86, 0.4)'
      : '0 20px 50px rgba(0, 0, 0, 0.3)'};
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.gold};
  color: ${colors.darkBrown};
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PlanAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  border: 3px solid ${props => props.$featured ? colors.gold : 'rgba(253, 249, 238, 0.3)'};
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.$featured ? '0s' : '0.5s'};
`;

const PlanName = styled.h3`
  font-size: 2.2rem;
  color: ${props => props.$featured ? colors.darkBrown : colors.cream};
  margin-bottom: 8px;
  text-align: center;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
`;

const PlanDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.$featured ? colors.darkBrown : colors.cream};
  opacity: 0.6;
  text-align: center;
  margin-bottom: 28px;
`;

const PlanPrice = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;

const Price = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.$featured ? colors.darkBrown : colors.gold};
  font-family: 'Poppins', sans-serif;
`;

const PriceUnit = styled.span`
  font-size: 1rem;
  color: ${props => props.$featured ? colors.darkBrown : colors.cream};
  opacity: 0.5;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: ${props => props.$featured ? colors.darkBrown : colors.cream};
  font-size: 0.95rem;
`;

const CheckIcon = styled.span`
  width: 20px;
  height: 20px;
  background: ${props => props.$featured ? colors.gold : 'rgba(230, 201, 86, 0.2)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &::after {
    content: '✓';
    font-size: 12px;
    color: ${props => props.$featured ? colors.darkBrown : colors.gold};
    font-weight: 700;
  }
`;

const CTAButton = styled(motion.button)`
  width: 100%;
  padding: 16px 28px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all ${transitions.normal};

  ${props => props.$featured ? `
    background: ${colors.red};
    color: ${colors.cream};
    border: none;

    &:hover {
      background: #b52d2c;
    }
  ` : `
    background: transparent;
    color: ${colors.cream};
    border: 2px solid rgba(253, 249, 238, 0.3);

    &:hover {
      background: rgba(253, 249, 238, 0.1);
      border-color: rgba(253, 249, 238, 0.5);
    }
  `}
`;

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const { playClick } = useApp();

  const handleCTA = () => {
    playClick();
    navigate('/dashboard');
  };

  const plans = [
    {
      name: "Silver",
      description: "Perfect for casual players",
      price: 7,
      avatar: "/images/07.png",
      featured: false,
      features: [
        "4 draws per month",
        "1 unique collectible",
        "Join syndicates",
        "Gift tickets",
      ],
    },
    {
      name: "Gold",
      description: "For serious winners",
      price: 14,
      avatar: "/images/09.png",
      featured: true,
      features: [
        "10 draws per month",
        "3 unique collectibles",
        "Create syndicates",
        "Unlimited gifting",
        "Priority support",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="pricing" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Start Winning Today
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Pick the plan that fits your style. Cancel anytime.
        </SectionSubtitle>

        <PricingGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              $featured={plan.featured}
              variants={itemVariants}
            >
              {plan.featured && <PopularBadge>Best Value</PopularBadge>}
              <PlanAvatar src={plan.avatar} alt={plan.name} $featured={plan.featured} />
              <PlanName $featured={plan.featured}>{plan.name}</PlanName>
              <PlanDescription $featured={plan.featured}>{plan.description}</PlanDescription>
              <PlanPrice>
                <Price $featured={plan.featured}>€{plan.price}</Price>
                <PriceUnit $featured={plan.featured}>/month</PriceUnit>
              </PlanPrice>
              <FeaturesList>
                {plan.features.map((feature) => (
                  <FeatureItem key={feature} $featured={plan.featured}>
                    <CheckIcon $featured={plan.featured} />
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
              <CTAButton
                $featured={plan.featured}
                onClick={handleCTA}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </CTAButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </Section>
  );
};

export default Pricing;
