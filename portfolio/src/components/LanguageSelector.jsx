import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex justify-center gap-4 bg-gray-800 text-white p-4 font-bold'>
      <button onClick={() => changeLanguage('en')}>English 🇬🇧</button>
      <button onClick={() => changeLanguage('es')}>Español 🇪🇸</button>
    </div>
  );
}

export default LanguageSelector;
