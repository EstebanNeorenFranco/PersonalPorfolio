import React from 'react';
import { useTranslation } from 'react-i18next';

function Bio() {
  const { t } = useTranslation();

  return (
    <div className='bg-cover '>
      <div className='mx-auto px-8 md:px-54 lg:px-80 '>
        <h2 className='text-center w-44 h-10 text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 rounded'>
          {t('about_me')}
        </h2>
        <div className='py-6 space-y-4'>
          <p>{t('bio_text1')}</p>
          <p>{t('bio_text2', { item: 'Arduino Uno' })}</p>
          <p>{t('bio_text3', { domains: 'Machine Learning, Microcontroller Programming, Web Development' })}</p>
          <p>{t('bio_text4', { institution: 'ITBA' })}</p>
          <p>{t('bio_text5')}</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;

