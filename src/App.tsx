import './App.css';
import { Layout } from './components/layout/Layout';
import { Header } from './components/header/Header';
import { Logo } from './components/logo/Logo';
import { Switch } from './components/switch/Switch';

function App() {
  return (
    <div className="App">
      <Layout
        header={
          <Header>
            <Logo />
            <Switch />
          </Header>
        }
      >
        <p>Я пример приложения</p>
      </Layout>
    </div>
  );
}

export default App;
