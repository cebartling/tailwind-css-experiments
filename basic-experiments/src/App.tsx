import { Routing } from './routing.tsx';
import { Header } from './components/foundational/Header';
import { Footer } from './components/foundational/Footer';
import { Main } from './components/foundational/Main';
import { Spacer } from './components/foundational/Spacer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <Spacer height={16} />
      <Main>
        <Routing />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
