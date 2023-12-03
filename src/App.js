import './App.css';
import { Tldraw } from '@tldraw/tldraw'

function App() {
  return (
    <div className="App" style={{ position: 'fixed', inset: 0 }}>
      <Tldraw/>
    </div>
  );
}

export default App;
