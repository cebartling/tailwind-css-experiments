import { Header } from './components/foundational/Header';
import { Footer } from './components/foundational/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      {/* Spacer for header height */}
      <div className="h-16"></div>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto flex flex-col justify-between items-start">
          <h1 className="text-2xl font-bold">Welcome</h1>
          <p className="mt-2 text-lg">
            This page demonstrates a footer that stays at the bottom of the
            screen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
