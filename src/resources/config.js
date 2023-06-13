import { encode } from "base-64"; 'base-64'

const config = {
  siteUrl: 'https://spotted-paste.localsite.io/wp-json/wc/v3/',
  wcCredentials: 'consumer_key=ck_af4883f016bc8ec3ec732ed5d783fb423ac6a1f2&consumer_secret=cs_9af945aeb0c43c82ba3e4b9dc33fb0f7c48057a0',  
  'liveLinkCredentials': `Basic ${encode('nutmeg:cowardly')}`
};

export default config;