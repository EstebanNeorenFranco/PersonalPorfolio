import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "about_me": "About me:",
        "bio_text1": "Born in San Nicolas 🇦🇷 and I grew up playing boardgames and basketball with my friends.",
        "bio_text2": "Ever since I was a child, my fascination for technology has never waned. When I turned 12, my passion for tinkering with technology became even more evident, as I received an {{ item }} as a Christmas gift. From that moment on, I have been developing various projects.",
        "bio_text3": "This passion let me create innovative projects that can be showcased in different contests. As a result, I honed my skills in various domains, including {{ domains }}.",
        "bio_text4": "Nowadays I live in Buenos Aires and I study Business at {{ institution }} (Buenos Aires Institute of Technology).",
        "bio_text5": "In 2021, in my last year of school, I developed with some friends a project called NEOCULI that consists of a pair of glasses that recognize the objects the user is watching. This project won some national prizes and hackathons."
      }
    },
    es: {
      translation: {
        "about_me": "Sobre mí:",
        "bio_text1": "Nací en San Nicolás 🇦🇷 y crecí jugando a juegos de mesa y baloncesto con mis amigos.",
        "bio_text2": "Desde que era niño, mi fascinación por la tecnología nunca ha disminuido. Cuando cumplí 12 años, mi pasión por trastear con la tecnología se hizo aún más evidente, ya que recibí un {{ item }} como regalo de Navidad. Desde ese momento, he estado desarrollando varios proyectos.",
        "bio_text3": "Esta pasión me permitió crear proyectos innovadores que se pueden presentar en diferentes concursos. Como resultado, perfeccioné mis habilidades en varios dominios, incluidos {{ domains }}.",
        "bio_text4": "Actualmente vivo en Buenos Aires y estudio Negocios en {{ institution }} (Instituto Tecnológico de Buenos Aires).",
        "bio_text5": "En 2021, en mi último año de escuela, desarrollé con algunos amigos un proyecto llamado NEOCULI que consiste en un par de gafas que reconocen los objetos que el usuario está viendo. Este proyecto ganó algunos premios nacionales y hackathones."
      }
    }
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
