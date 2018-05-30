let config = {
  prodURL: 'http://66.70.216.149:5001',
  devURL: 'http://localhost:5001',
  prodCDN: 'http://6ghadam.com/static',
  devCDN: 'http://localhost:5001/static',
  title: '6Ghadam'
};

if (process.env.NODE_ENV === 'development') {
  config.url = config.devURL;
  config.cdn = config.devCDN;
} else {
  config.url = config.prodURL;
  config.cdn = config.prodCDN;
}

module.exports = config;
