const parseCookies = (cookie = '') => {
  return cookie.split(';').map(c => c.trim().split('=')).reduce((acc, [k, v]) => {
    if (acc instanceof Array) {
      const [k1, v1] = acc;
      return {
        [k1]: decodeURIComponent(v1),
        [k]: decodeURIComponent(v)
      };
    }
    acc[k] = decodeURIComponent(v);
    return acc;
  });
};

module.exports = {
  parseCookies,
};
