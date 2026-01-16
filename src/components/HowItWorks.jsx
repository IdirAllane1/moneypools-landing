import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { colors, breakpoints, shadows } from '../styles/theme';

const Section = styled.section`
  padding: 100px 24px;
  background: ${colors.darkBrown};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${colors.cream};
  text-align: center;
  margin-bottom: 64px;
`;

const StepsContainer = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const CarouselWrapper = styled.div`
  display: block;
  overflow: hidden;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
  display: flex;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$active ? colors.gold : 'rgba(253, 249, 238, 0.3)'};
  cursor: pointer;
  transition: background 0.3s ease;
  padding: 0;
`;

const StepCard = styled(motion.div)`
  text-align: center;
  padding: 32px 24px;
  background: rgba(253, 249, 238, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(253, 249, 238, 0.15);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const spin = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-1232px); }
`;

const IllustrationWrapper = styled.div`
  width: 154px;
  height: 154px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 3px solid ${colors.gold};
  box-shadow: 0 0 30px ${colors.gold}40;
  background: ${colors.darkBrown};
`;

const SlotReel = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -77px;
  animation: ${props => props.$isSpinning ? spin : 'none'} 0.35s linear infinite;
  transform: translateY(${props => props.$finalPosition}px);
  transition: ${props => !props.$isSpinning ? 'transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)' : 'none'};
`;

const AvatarImage = styled(motion.img)`
  width: 154px;
  height: 154px;
  border-radius: 17px;
  object-fit: cover;
  flex-shrink: 0;
`;

const WinText = styled(motion.div)`
  font-size: 2rem;
  font-weight: 900;
  color: #00FF00;
  text-shadow: 0 0 20px #00FF00, 0 0 40px #00FF00;
  font-family: 'Poppins', sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  background: ${colors.gold};
  color: ${colors.darkBrown};
  font-weight: 700;
  font-size: 14px;
  border-radius: 30px;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StepTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.cream};
  margin-bottom: 12px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: ${colors.cream};
  opacity: 0.8;
  line-height: 1.6;
`;

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [spinningSteps, setSpinningSteps] = useState([false, false, false]);
  const [showWin, setShowWin] = useState([false, false, false]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const allAvatars = ['/images/01.png', '/images/03.png', '/images/04.png', '/images/05.png', '/images/06.png', '/images/07.png', '/images/08.png', '/images/09.png'];

  const steps = [
    {
      number: 1,
      title: "Join a Pool",
      description: "Subscribe and get placed with other players. The more people join, the bigger the prize.",
      avatar: "/images/01.png",
      targetIndex: 0, // index in allAvatars
    },
    {
      number: 2,
      title: "Draw Day",
      description: "Every 3 days, one winner is randomly selected. Guaranteed.",
      avatar: "/images/03.png",
      targetIndex: 1,
    },
    {
      number: 3,
      title: "Win Big",
      description: "The jackpot equals the number of players. 50,000 players = €50,000 prize.",
      avatar: "/images/05.png",
      targetIndex: 3,
    },
  ];

  const getFinalPosition = (targetIndex) => {
    // Each avatar is 154px tall, position to show the target avatar
    return -(targetIndex * 154);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSpinningSteps([true, true, true]);
    setShowWin([false, false, false]);

    // Stop each step with stagger effect (like a slot machine)
    setTimeout(() => {
      setSpinningSteps([false, true, true]);
      setShowWin([true, false, false]);
    }, 500);
    setTimeout(() => {
      setSpinningSteps([false, false, true]);
      setShowWin([true, true, false]);
    }, 750);
    setTimeout(() => {
      setSpinningSteps([false, false, false]);
      setShowWin([true, true, true]);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowWin([false, false, false]);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && currentSlide < steps.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (info.offset.x > swipeThreshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Section id="how-it-works" ref={ref}>
      <Container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </SectionTitle>

        {/* Desktop: Grid layout */}
        <StepsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <StepCard key={step.number} variants={itemVariants}>
              <IllustrationWrapper>
                {showWin[index] ? (
                  <WinText
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    WIN!
                  </WinText>
                ) : (
                  <SlotReel
                    $isSpinning={spinningSteps[index]}
                    $finalPosition={getFinalPosition(step.targetIndex)}
                  >
                    {allAvatars.map((avatar, i) => (
                      <AvatarImage
                        key={i}
                        src={avatar}
                        alt={step.title}
                      />
                    ))}
                    {allAvatars.map((avatar, i) => (
                      <AvatarImage
                        key={`duplicate-${i}`}
                        src={avatar}
                        alt={step.title}
                      />
                    ))}
                  </SlotReel>
                )}
              </IllustrationWrapper>
              <StepNumber>Step {step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsContainer>

        {/* Mobile: Swipeable carousel */}
        <CarouselWrapper
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
        >
          <CarouselTrack
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {steps.map((step, index) => (
              <CarouselSlide key={step.number}>
                <StepCard
                  as={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <IllustrationWrapper>
                    {showWin[index] ? (
                      <WinText
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        WIN!
                      </WinText>
                    ) : (
                      <SlotReel
                        $isSpinning={spinningSteps[index]}
                        $finalPosition={getFinalPosition(step.targetIndex)}
                      >
                        {allAvatars.map((avatar, i) => (
                          <AvatarImage
                            key={i}
                            src={avatar}
                            alt={step.title}
                          />
                        ))}
                        {allAvatars.map((avatar, i) => (
                          <AvatarImage
                            key={`duplicate-${i}`}
                            src={avatar}
                            alt={step.title}
                          />
                        ))}
                      </SlotReel>
                    )}
                  </IllustrationWrapper>
                  <StepNumber>Step {step.number}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              </CarouselSlide>
            ))}
          </CarouselTrack>
          <Dots>
            {steps.map((_, index) => (
              <Dot
                key={index}
                $active={currentSlide === index}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </Dots>
        </CarouselWrapper>
      </Container>
    </Section>
  );
};

export default HowItWorks;
