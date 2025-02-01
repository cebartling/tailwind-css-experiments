import { Header } from './components/foundational/Header';
import { Footer } from './components/foundational/Footer';
import { Main } from './components/foundational/Main';
import {Spacer} from "./components/foundational/Spacer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <Spacer height={16} />
      <Main>
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="mt-2 text-lg">
          This page demonstrates a footer that stays at the bottom of the
          screen.
        </p>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
