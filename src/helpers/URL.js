const getTrueURL = (url) => {
  const trueURL = url.split('/')[5];

  return trueURL;
};

const getPage = (url) => {
  const page = `?${url.split('?')[1]}`;

  return page;
};

export default {
  getTrueURL,
  getPage,
};
