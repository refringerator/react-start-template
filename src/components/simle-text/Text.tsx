import { withTranslation } from 'react-i18next';

export const Text = ({ t }: { t?: (v: string) => React.ReactNode | string }) => <>{t('welcome')}</>;

const TextTranslated = withTranslation('common')(Text);
export default TextTranslated;
