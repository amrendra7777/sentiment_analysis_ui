import HeroSection from './components/HeroSection';
import DemoSection from './components/DemoSection';
import StorySection from './components/StorySection';

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <DemoSection />
      <StorySection />

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-mocha)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Project Sentiment. Built with Espresso.</p>
      </footer>
    </div>
  )
}

export default App;
