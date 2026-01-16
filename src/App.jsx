import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import GlobalStyles from './styles/GlobalStyles';
import {
  Header,
  Hero,
  HowItWorks,
  Jackpot,
  Collectibles,
  Testimonials,
  Pricing,
  FinalCTA,
  Footer,
  SoundToggle,
  SignUpModal,
  LoginModal,
} from './components';
import Dashboard from './pages/Dashboard';

// Landing Page Component
const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <HowItWorks />
      <Jackpot />
      <Collectibles />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </main>
    <Footer />
    <SoundToggle />
    <SignUpModal />
    <LoginModal />
  </>
);

function App() {
  return (
    <Router>
      <AppProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
