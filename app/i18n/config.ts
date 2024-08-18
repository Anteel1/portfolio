import i18next from 'i18next';
// using json imports would work, but interpolation checks would not work
// import ns1 from './en/ns1.json';
// import ns2 from './en/ns2.json';
import common_en from './en/common.json';
import common_vi from './vi/common.json'
export const defaultNS = 'common';

export const resources = {
  en: {
    common: common_en,
  },
  vi:{
    common: common_vi
  }
};

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
  defaultNS,
});