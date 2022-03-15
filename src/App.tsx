import { Header } from './components/header';
import { Pomodoro } from './components/pomodoro';
import { SITE_TITLE } from './constants';

function App() {
  return (
    <div className='App'>
      <Header title={SITE_TITLE} />
      <Pomodoro />
    </div>
  );
}

export default App;
