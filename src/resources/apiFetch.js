import config from './config';

const get = async url => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: config.liveLinkCredentials
      },
    });
    const resJSON = await res.json();
    return resJSON;    
  } catch (error) {
    console.error( 'apiFetch get error' ,error);
  }
}

export default {
  get,
};