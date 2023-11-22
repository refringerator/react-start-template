import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { Select } from './components/select/Select';
import { Switch } from './components/switch/Switch';
import { languageOptions } from './locales/langueages';

type TTheme = 'ocean' | 'forest';
const defaultTheme: TTheme = 'ocean';

function App() {
  const [themeName, setTheme] = useState(defaultTheme);

  const HandleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? 'forest' : 'ocean';
    setTheme(theme);
  };

  return (
    <div className="App">
      <ThemeProvider theme={{ mode: themeName || 'ocean' }}>
        <Layout
          header={
            <Header>
              <Switch onChange={HandleThemeChange} switched={themeName !== defaultTheme} />
              <Select options={languageOptions} />
            </Header>
          }
        >
          <p>Я пример приложения</p>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
