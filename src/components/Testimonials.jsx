import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { colors, breakpoints, shadows, transitions } from '../styles/theme';

const Section = styled.section`
  padding: 100px 0;
  background: ${colors.cream};
  position: relative;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${colors.darkBrown};
  text-align: center;
  margin-bottom: 48px;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 60px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 40px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 24px;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 40px;
`;

const NavButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.darkBrown};
  border: none;
  color: ${colors.cream};
  font-size: 20px;
  cursor: pointer;
  transition: all ${transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.red};
    transform: scale(1.1);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? colors.gold : colors.darkBrown};
  opacity: ${props => props.$active ? 1 : 0.3};
  cursor: pointer;
  transition: all ${transitions.normal};

  &:hover {
    opacity: 0.7;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 16px;
  padding: 32px 28px;
  box-shadow: 0 4px 20px rgba(21, 1, 0, 0.08);
  transition: all ${transitions.normal};
  border: 1px solid rgba(21, 1, 0, 0.08);
  flex-shrink: 0;
  width: 340px;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(21, 1, 0, 0.12);
  }
`;

const WinAmount = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: ${colors.darkBrown};
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
`;

const TestimonialText = styled.p`
  font-size: 0.95rem;
  color: ${colors.darkBrown};
  line-height: 1.8;
  margin-bottom: 24px;
  font-weight: 400;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(21, 1, 0, 0.1);
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: ${colors.darkBrown};
  border: 2px solid rgba(21, 1, 0, 0.1);
`;

const AuthorDetails = styled.div``;

const AuthorName = styled.div`
  font-weight: 600;
  color: ${colors.darkBrown};
  font-size: 0.9rem;
`;

const AuthorLocation = styled.div`
  font-size: 0.8rem;
  color: ${colors.darkBrown};
  opacity: 0.6;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

const Star = styled.span`
  color: ${colors.gold};
  font-size: 16px;
`;

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const testimonials = [
    {
      amount: "€47,230",
      text: "Could not believe it when I got the notification. Three weeks in and I am paying off my loans.",
      name: "Sarah M.",
      location: "Dublin, Ireland",
      initials: "SM",
    },
    {
      amount: "€52,100",
      text: "My coworkers and I formed a syndicate. We won and split it five ways. Still life-changing.",
      name: "Marcus J.",
      location: "Cork, Ireland",
      initials: "MJ",
    },
    {
      amount: "€31,500",
      text: "Way better odds than anything else out there. Won on my second month of playing.",
      name: "Emily R.",
      location: "Galway, Ireland",
      initials: "ER",
    },
    {
      amount: "€49,800",
      text: "My wife gifted me a subscription. Best gift ever. I won the very next draw.",
      name: "David K.",
      location: "Limerick, Ireland",
      initials: "DK",
    },
    {
      amount: "€38,900",
      text: "Joined with my friends from college. We're all winners now. Such a fair system!",
      name: "Lisa O.",
      location: "Waterford, Ireland",
      initials: "LO",
    },
    {
      amount: "€45,600",
      text: "The multiplier feature really works! Got 3x tickets and won on the fourth draw.",
      name: "Tom H.",
      location: "Drogheda, Ireland",
      initials: "TH",
    },
    {
      amount: "€58,200",
      text: "Best decision ever. The odds are transparent and fair. Won after 2 months.",
      name: "Rachel B.",
      location: "Dundalk, Ireland",
      initials: "RB",
    },
    {
      amount: "€41,300",
      text: "Invited 5 friends and my odds multiplied. Won in my third draw. Unbelievable!",
      name: "James P.",
      location: "Sligo, Ireland",
      initials: "JP",
    },
    {
      amount: "€53,700",
      text: "The guaranteed winner per draw sold me. No fake promises. Won after a month!",
      name: "Anna K.",
      location: "Kilkenny, Ireland",
      initials: "AK",
    },
    {
      amount: "€36,400",
      text: "My sister recommended it. I thought why not. Won €36k three weeks later!",
      name: "Michael D.",
      location: "Wexford, Ireland",
      initials: "MD",
    },
    {
      amount: "€50,900",
      text: "The fact that the jackpot equals the players makes it so fair. Best platform ever.",
      name: "Sophie L.",
      location: "Carlow, Ireland",
      initials: "SL",
    },
    {
      amount: "€44,100",
      text: "Formed a syndicate with 8 people. We won and everyone got a nice share. Amazing!",
      name: "Kevin W.",
      location: "Athlone, Ireland",
      initials: "KW",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 900) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1200) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= testimonials.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerView, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const maxIndex = testimonials.length - 1;
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <Section ref={ref}>
      <TitleContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Real Winners, Real Winnings
        </SectionTitle>
      </TitleContainer>

      <CarouselWrapper>
        <CarouselTrack
          animate={{
            x: -(currentIndex + testimonials.length) * (340 + 24)
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <Star key={i}>&#9733;</Star>
                ))}
              </Stars>
              <WinAmount>{testimonial.amount}</WinAmount>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <AuthorInfo>
                <AuthorAvatar>{testimonial.initials}</AuthorAvatar>
                <AuthorDetails>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorLocation>{testimonial.location}</AuthorLocation>
                </AuthorDetails>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </CarouselTrack>
      </CarouselWrapper>

      <Container>
        <CarouselControls>
          <NavButton onClick={handlePrev}>
            ‹
          </NavButton>

          <Dots>
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <Dot
                key={index}
                $active={index === currentIndex}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </Dots>

          <NavButton onClick={handleNext}>
            ›
          </NavButton>
        </CarouselControls>
      </Container>
    </Section>
  );
};

export default Testimonials;
