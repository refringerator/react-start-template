import { useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Header } from './components/header/Header';
import { Layout } from './components/layout/Layout';
import { Select } from './components/select/Select';
import { Switch } from './components/switch/Switch';
import { languageOptions } from './locales/langueages';
import { ProductScreen } from './screens/ProductScreen';

type TTheme = 'ocean' | 'forest';
const defaultTheme: TTheme = 'ocean';

function App() {
  const [themeName, setTheme] = useState(defaultTheme);
  const [lang, setLang] = useState('ru');
  const { i18n, t } = useTranslation('common');

  const HandleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? 'forest' : 'ocean';
    setTheme(theme);
  };

  const HandleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    setLang(lng);
    console.log(i18n);
  };

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={{ mode: themeName || 'ocean' }}>
          <Layout
            header={
              <Header menu={<p>{t('welcome')}</p>}>
                <Switch onChange={HandleThemeChange} switched={themeName !== defaultTheme} />
                <Select options={languageOptions} onChange={HandleLanguageChange} />
              </Header>
            }
          >
            <ProductScreen />
          </Layout>
        </ThemeProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
