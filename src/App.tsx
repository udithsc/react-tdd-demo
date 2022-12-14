import './App.css';
import Greet from './components/greet/greet';
import Application from './components/application/application';
import Counter from './components/counter/counter';
import { AppProviders } from './providers/app-provider';
import { MuiMode } from './components/mui/mui-mode';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Greet name="john" />
        <Application />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
