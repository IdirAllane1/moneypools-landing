import styled from 'styled-components';
import { colors, breakpoints, transitions } from '../styles/theme';

const FooterWrapper = styled.footer`
  padding: 48px 24px 32px;
  background: ${colors.darkBrown};
  border-top: 1px solid rgba(253, 249, 238, 0.1);
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const LogoSection = styled.div`
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
  }
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
`;

const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  @media (min-width: ${breakpoints.tablet}) {
    gap: 32px;
  }
`;

const FooterLink = styled.a`
  color: ${colors.cream};
  font-size: 14px;
  opacity: 0.7;
  transition: opacity ${transitions.fast};

  &:hover {
    opacity: 1;
    color: ${colors.coral};
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(253, 249, 238, 0.1);
  margin-bottom: 24px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  color: ${colors.cream};
  font-size: 13px;
  opacity: 0.5;
`;

const Disclaimer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AgeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${colors.red};
  color: ${colors.cream};
  font-weight: 700;
  font-size: 11px;
  border-radius: 50%;
`;

const DisclaimerText = styled.p`
  color: ${colors.cream};
  font-size: 12px;
  opacity: 0.5;
  max-width: 350px;

  @media (min-width: ${breakpoints.tablet}) {
    text-align: right;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Responsible Gaming', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <FooterWrapper>
      <Container>
        <TopSection>
          <LogoSection>
            <Logo src="/images/logo_desktop.png" alt="MoneyPools" />
          </LogoSection>

          <LinksSection>
            {links.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </LinksSection>
        </TopSection>

        <Divider />

        <BottomSection>
          <Copyright>
            {currentYear} MoneyPools Ltd. All rights reserved.
          </Copyright>

          <Disclaimer>
            <AgeBadge>18+</AgeBadge>
            <DisclaimerText>
              Must be 18 or older to participate. Please play responsibly.
            </DisclaimerText>
          </Disclaimer>
        </BottomSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
