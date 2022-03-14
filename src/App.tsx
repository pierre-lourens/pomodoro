import { Header } from './components/header';
import { SITE_TITLE } from './constants';

function App() {
  return (
    <div className='App'>
      <Header title={SITE_TITLE} />
    </div>
  );
}

export default App;
